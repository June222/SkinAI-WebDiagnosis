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

def generate_random_string():
    # 숫자와 문자를 조합한 문자열 생성
    characters = string.ascii_letters + string.digits
    # 10자리에서 20자리까지 랜덤한 길이 선택
    length = random.randint(10, 20)
    # 랜덤한 문자열 생성
    random_string = ''.join(random.choice(characters) for i in range(length))
    return random_string
    
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
        image_url = args["image_url"]

        # 외부 URL에서 이미지 가져오기
        image = fetch_image(image_url)
        if image is None:
            return {"error": "Failed to fetch image"}, 400

        # classification 예측 수행
        cls_image = self.cls_transform(image).unsqueeze(0).to(self.device)
        with torch.no_grad():
            output = self.cls_model(cls_image)
            _, predicted = torch.max(output, 1)
        predicted_class = self.le.inverse_transform(predicted.cpu().numpy())[0]

        # Segmentation 예측 수행
        seg_image = self.seg_transform(image).unsqueeze(0).to(self.device)
        with torch.no_grad():
            output = self.seg_model(seg_image)
        output_mask = output.squeeze().cpu().numpy()
        binary_mask = (output_mask > 0.6).astype(np.uint8)

        mask_center_y, mask_center_x = binary_mask.shape[0] // 2, binary_mask.shape[1] // 2
        image_center_y, image_center_x = image.shape[0] // 2, image.shape[1] // 2
        centered_mask = np.zeros_like(image[:, :, 0], dtype=np.uint8)
        start_y = image_center_y - mask_center_y
        start_x = image_center_x - mask_center_x
        centered_mask[start_y:start_y + binary_mask.shape[0], start_x:start_x + binary_mask.shape[1]] = binary_mask

        contours, _ = cv2.findContours(centered_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        contours = [cnt for cnt in contours if cv2.contourArea(cnt) > 100]
        image_with_contours = cv2.drawContours(image.copy(), contours, -1, (0, 0, 255), 6)

        # 랜덤 이미지 이름 생성
        predicted_image_name = generate_random_string()+".jpg"
        # 결과 이미지 저장
        save_path = "/home/yeojisu/mysite/file/image/"+ predicted_image_name
        cv2.imwrite(save_path, image_with_contours)
        new_url = "https://yeojisu.pythonanywhere.com/image2/"+predicted_image_name

        return {"image_url": new_url, "label": predicted_class}, 200
