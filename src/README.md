# 📂 Frontend

### /Frontend 경로에서 다음과 같은 명령어 실행
1. npm install
2. npm start

### 그 후 http://localhost:3000 으로 접속

# 📂 Backend
## DB
### /Backend 경로에서 명령어 실행
1. docker compose up --build

(--build ==> 최초 1회만 수행)

## Fastapi
### /Backend 경로에서 명령어 실행
(python 가상환경 생성 및 패키지 설치 / 1. 4.는 최초 1회만 수행)
1. python3 -m venv .venv
2. source .venv/bin/activate
3. cd api
4. pip install -r requirements.txt

cf) 가상환경 탈출 ==> $ deactivate

### /Backend/api 경로에서 명령어 실행
5. gunicorn --bind 0.0.0.0:8000 -k uvicorn.workers.UvicornWorker --reload app:app

# 📂 AI

### 데이터셋 분석 및 전처리
* data_analysis.ipynb : kaggle ham1000 데이터셋 분석 내용 
* data_preprocessing.ipynb : 데이터셋 전처리 내용

### Classification 모델 학습
* ResNet18.ipynb : pre-trained ResNet18 + 전처리 V1(단순 reszie)
  <img width="800" alt="스크린샷 2024-06-07 오후 3 46 29" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/43098ce9-251c-4fda-9a68-b8732113b977">

* EfficientNetB0.ipynb : pre-trained EfficientNetB0 + 전처리 V2(중앙 기준 crop 후 resize)
  <img width="800" alt="스크린샷 2024-06-07 오후 3 46 41" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/5bc644f5-a844-44f4-ad18-260674ee61c2">

* EfficientNetB3.ipynb : pre-trained EfficientNetB3 + **전처리 V3(중앙 기준 crop 후 resize + 데이터 증강)**
   <img width="800" alt="스크린샷 2024-06-07 오후 3 46 53" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/ead75923-d0a5-483f-ad97-1158dc48d5a6">

### Segmentation 모델 학습
* Unet-encoder(resnet34)-weights(imagenet).ipynb
* U-Net 구조 lesion segmentation - encoder: pre-trained ResNet34, weights: pre-trained imageNet
  <img width="800" alt="스크린샷 2024-06-08 오후 4 13 36" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/5c4d59a5-1e5c-4a71-9941-f357763dbe92">

### Test 결과 출력
* Result_of_Classification&Segmentation.ipynb : 모델 로드 해와서 테스트 이미지에 대한 classification & segmentation 결과 추출 

### 모델 배포 
* flask-api : 학습 모델 배포를 위한 flask 프로젝트 

## Flask-api using PythonAnywhere

### Flask 로컬에서 실행 방법

```
flask run
# OR
python app.py
```

### PythonAnywhere 사용 방법
* PythonAnywhere: flask와 같은 python 기반 프로젝트 배포 가능한 Cloud
* beginner account는 무료로 사용 가능 -> 간단한 프로젝트 만들기 적합하여 선택

<img width="1035" alt="스크린샷 2024-05-17 오전 12 18 48" src="https://github.com/YeoJiSu/Skin-Disease-Classification/assets/76769044/64e6c511-bf30-4750-9111-581b818dd0ee">

1. **Web** 탭에서 Code, Static File 디렉토리 설정
   
   <img width="641" alt="스크린샷 2024-05-17 오전 12 07 28" src="https://github.com/YeoJiSu/Skin-Disease-Classification/assets/76769044/f83987ba-ff46-4ef3-b111-2fef23d1c44b">
   <img width="519" alt="스크린샷 2024-05-17 오전 12 07 46" src="https://github.com/YeoJiSu/Skin-Disease-Classification/assets/76769044/55cc590d-2069-45f0-abe9-d0dcde231cca">

2. **Files** 탭에서 flask 프로젝트 업로드
   
   <img width="720" alt="스크린샷 2024-05-17 오전 12 10 01" src="https://github.com/YeoJiSu/Skin-Disease-Classification/assets/76769044/7bb4ec4b-9c14-4fc6-bf1d-1ee0ba243816">
   <img width="721" alt="스크린샷 2024-05-17 오전 12 12 20" src="https://github.com/YeoJiSu/Skin-Disease-Classification/assets/76769044/71a168f8-5acb-44d1-941d-56269aca59bb">

### 배포된 Api 실행 방법
* Postman에서 https://yeojisu.pythonanywhere.com/test/ 에 POST request로 body에 json 데이터 형식 {"image_url": "이미지 url"} 작성하여 전송

<img width="797" alt="스크린샷 2024-06-07 오후 3 19 07" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/95b51bf1-e830-4900-8f41-8f17f6ce116d">

<img width="300" alt="ISIC_0028994" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/9f2d049a-ee83-4c6e-a8ec-5549999b69c0"> 
<img width="100" alt="ISIC_0028994" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/7e2a4845-d3c5-43ea-a937-32678ae8da66"> 
<img width="300" alt="predicted_ISIC_0028994" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/f46cc216-cf50-416f-8131-3e37b41825db">
