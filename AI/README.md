# AI

## 폴더 구조 설명

### 🌱 데이터셋 분석 및 전처리
* data_analysis.ipynb : kaggle ham1000 데이터셋 분석 내용 
* data_preprocessing.ipynb : 데이터셋 전처리 내용

### 🌱 Classification 모델 학습
* ResNet18.ipynb : pre-trained ResNet18 + 전처리 V1(단순 reszie)
  <img width="862" alt="스크린샷 2024-06-07 오후 3 46 29" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/43098ce9-251c-4fda-9a68-b8732113b977">

* EfficientNetB0.ipynb : pre-trained EfficientNetB0 + 전처리 V2(중앙 기준 crop 후 resize)
  <img width="859" alt="스크린샷 2024-06-07 오후 3 46 41" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/5bc644f5-a844-44f4-ad18-260674ee61c2">

* EfficientNetB3.ipynb : pre-trained EfficientNetB3 + **전처리 V3(중앙 기준 crop 후 resize + 데이터 증강)**
   <img width="864" alt="스크린샷 2024-06-07 오후 3 46 53" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/ead75923-d0a5-483f-ad97-1158dc48d5a6">

### 🌱 Segmentation 모델 학습
* Unet-encoder(resnet34)-weights(imagenet).ipynb
* U-Net 구조 lesion segmentation - encoder: pre-trained ResNet34, weights: pre-trained imageNet
  <img width="419" alt="스크린샷 2024-06-07 오후 3 56 06" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/c38c95e7-41fb-4628-8dea-5a127782cf4a">

### 🌱 Test 결과 출력
* Result_of_Classification&Segmentation.ipynb : 모델 로드 해와서 테스트 이미지에 대한 classification & segmentation 결과 추출 

### 🌱 모델 배포 
* flask-api : 학습 모델 배포를 위한 flask 프로젝트 
