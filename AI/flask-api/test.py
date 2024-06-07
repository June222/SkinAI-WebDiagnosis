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
