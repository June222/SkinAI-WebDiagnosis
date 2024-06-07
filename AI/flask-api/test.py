from flask_restful import reqparse, Resource
import requests
import cv2
import numpy as np
import torch
import torch.nn as nn
from torchvision import models, transforms
from segmentation_models_pytorch import Unet
import joblib
import random
import string
torch.backends.cudnn.benchmark = True

def fetch_image(url):
    try:
        # 세션을 사용하여 요청
        with requests.Session() as session:
            response = session.get(url, timeout=10)  # 타임아웃 설정
            response.raise_for_status()  # 요청 성공 여부 확인
            image_data = response.content

        # 바이트 스트림으로부터 이미지 디코딩
        image_array = np.frombuffer(image_data, np.uint8)
        image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
        return image

    except requests.exceptions.RequestException as e:
        print(f"Error fetching image from {url}: {e}")
        return None

class Test(Resource):
    def __init__(self):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        print(f'Using device: {self.device}')

        # classification 모델 초기화
        self.cls_model = models.efficientnet_b3(pretrained=True)
        num_ftrs = self.cls_model.classifier[1].in_features
        self.cls_model.classifier[1] = nn.Linear(num_ftrs, 7)  # 7개의 클래스 출력
        self.cls_model = self.cls_model.to(self.device)
        self.cls_model.load_state_dict(torch.load('/home/yeojisu/mysite/file/skin-disease/EfficientNetB3_cls_V1_more_epoch.pth', map_location=torch.device('cpu')))
        self.cls_model.eval()  # 평가 모드 설정
        self.cls_transform = transforms.Compose([
            transforms.ToPILImage(),
            transforms.CenterCrop(300),
            transforms.Resize(128),
            transforms.ToTensor(),
            transforms.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225)),
        ])

        # Label Encoder 로드
        self.encoder_path = '/home/yeojisu/mysite/file/skin-disease/label_encoder.pkl'
        self.le = joblib.load(self.encoder_path)

        # Segmentation 모델 초기화
        self.seg_model = Unet(encoder_name='resnet34', encoder_weights='imagenet', classes=1, activation='sigmoid')
        self.seg_model = self.seg_model.to(self.device)
        self.seg_model.load_state_dict(torch.load('/home/yeojisu/mysite/file/skin-disease/best_model.pth', map_location=self.device))
        self.seg_model.eval()
        self.seg_transform = transforms.Compose([
            transforms.ToPILImage(),
            transforms.CenterCrop(300),
            transforms.Resize(224),
            transforms.ToTensor(),
            transforms.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225))
        ])

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("image_url")
        args = parser.parse_args()
        argument = args["image_url"]
        # 외부 URL에서 이미지 가져오기
        # image_data = requests.get(argument).content
        # 나중에 image_data 활용예정

        # sample값 출력
        predicted_image_name = "sample_seg.png"
        new_url = "https://yeojisu.pythonanywhere.com/image2/"+predicted_image_name
        label = "MEL" # 'MEL', 'NV', 'BCC', 'AKIEC', 'BKL', 'DF', 'VASC'
        return {"image_url": new_url, "label": label}, 200
