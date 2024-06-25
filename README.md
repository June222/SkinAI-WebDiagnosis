# 🧑🏻‍⚕️ SkinAI WebDiagnosis

## A. 프로젝트 명
피부 질환 진단 웹 서비스, Dr.Skin ....

## B. 프로젝트 멤버 이름 및 멤버 별 담당한 파트 소개
|201824441 김승혁  &nbsp;  &nbsp;  &nbsp; 201924587 조주은 &nbsp; |202055565 여지수|
|:----------|:---|
|• React 프론트엔드 개발<br>• Proxy 서버 구축<br>• CORS 구현<br>• Postgresql  데이터베이스 구축<br>• Fast API 백엔드 개발<br>• Docker 배포| • [Figma 작성](https://www.figma.com/design/d7kHfNE52tT625W46LA6Mj/skin-disease?node-id=0-1)<br>• 데이터 분석 및 전처리, AI (분류, 세그멘테이션) 모델 개발<br>• AI 모델 배포용 Flask Rest API 개발<br>• PythonAnywhere 배포|

## C. 프로젝트 소개 
> 💡 피부 질환 분류 및 세그멘테이션을 위한 인공지능 모델과 웹 기반 진단 서비스 개발

이 프로젝트는 [kaggle의 HAM10000 데이터셋](https://www.kaggle.com/datasets/surajghuwalewala/ham1000-segmentation-and-classification)을 활용하여 다양한 피부 질환을 분류하고 세그멘테이션하는 인공지능 모델을 개발하고, 이를 사용자 친화적인 웹 기반 진단 서비스로 제공하는 것을 목표로 합니다. 사용자는 자신의 피부 사진을 업로드하면, AI 모델이 해당 이미지를 분석하여 피부 질환을 예측하고, 세그멘테이션된 결과를 제공합니다. 이 서비스는 Flask 기반의 REST API를 통해 AI 모델과 통신하며, 웹 페이지는 FastAPI 백엔드와 PostgreSQL 데이터베이스, 그리고 React 프론트엔드로 구성됩니다. Flask 기반 REST API와 AI 모델은 PythonAnywhere 클라우드 플랫폼에 배포하여, 프론트엔드에서 사용합니다. PostgreSQL은 Docker Container에 배포하여 관리합니다. 

## D. 프로젝트 필요성 소개
피부 질환은 조기 진단이 매우 중요한 질병 중 하나입니다. 그러나 전문 피부과 의사의 접근이 어려운 지역에서는 조기 진단이 힘든 경우가 많습니다. 그리고, 일반인들이 자신의 피부 상태를 정기적으로 모니터링할 수 있는 간편한 도구가 필요합니다. 이 프로젝트는 이러한 문제를 해결하기 위해 누구나 쉽게 접근할 수 있는 웹 기반의 피부 질환 진단 서비스를 제공합니다.

## E. 관련 기술/논문/특허 조사 내용 소개
- [SkinVision](https://www.skinvision.com/): 스마트폰 앱을 통해 피부 병변을 분석하고 피부암 위험을 평가하는 서비스.
- [Google's DermAssist](https://health.google/consumers/search/): 구글의 AI 기반 피부 질환 진단 도구로, 사용자에게 초기 진단 정보를 제공.
- [MoleScope](https://www.molescope.com/): 스마트폰과 연동되는 기기를 통해 피부 병변을 촬영하고 분석하는 서비스.
- "[A Convolutional Neural Network for Melanoma Detection](https://arxiv.org/abs/1603.04967)"- CNN을 이용하여 피부암을 검출하는 방법을 제안.
- "[System and method for skin disease detection using machine learning](https://patents.google.com/patent/US20180035727A1/en)" - IBM에서 출원한, 머신러닝을 이용한 피부 질환 검출 시스템 및 방법에 대한 특허. 다양한 피부 병변을 분석하여 질환을 예측하는 기술에 대한 내용을 담고 있습니다. 

## F. 프로젝트 개발 결과물 소개 (+ 다이어그램)
### 🌱 서비스 구조도 (다이어그램)
<img width="800" alt="image" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/59c74b14-77df-4828-be56-b944e44951f5">

[ 피부 질환 진단 기능 동작방식 ]
1. 사용자가 React web에서 피부 질환 사진을 업로드.
2. React -> flask -> model로 해당 img url이 전달.
3. model은 해당 이미지를 prediction하고, 세그멘테이션 결과 이미지와 레이블을 flask에 반환.
4. flask는 결과 이미지를 서버에 업로드하고, 결과 이미지에 대한 new img url을 생성.
5. flask -> React 로 new img url과 label이 전달되고, 최종적으로 사용자에게 보여줌. 

[ 기타 커뮤니티, 나의 정보 조회 등의 기능 동작 방식 ]
1. 사용자가 React web에서 정보를 요청.
2. React -> Fast API -> postgres DB로 해당 내용 전달.
3. DB는 요청에 따른 결과값을 FastAPI에 반환.
4. Fast API -> React Web로 결과 전달되고, 최종적으로 사용자에게 보여줌.

### 🌱 인공지능 개발 결과물 소개

#### ① 데이터셋 분석 및 전처리

✔️ **데이터셋 분석**
- 총 7 class로 구성
  - 액티닉 케라토시스와 상피내암/보웬병 (AKIEC), 기저세포암종 (BCC), 양성 각화증성 병변 (BKL), 피부섬유종 (DF), 흑색종 (MEL), 멜라닌성 모반 (NV), 혈관 병변 (VASC)
- 각 클래스 분포는 불균형을 이루고 있음
- GroundTruth.csv 파일과 images와 masks 폴더가 있음
  - GroundTruth.csv 파일에는 image 칼럼과 7개 class 칼럼이 있음
  - images에는 원본 이미지들이, masks에는 마스크 이미지들이 있음
  
✔️ **데이터셋 전처리(공통)**
- mask 이미지를 활용하여 RLE Encoded Pixels를 생성
- images, classID, Encoded Pixels로 구성된 newGroundTruth.csv를 생성
- 클래스별 동일한 비율 8:1:1 유지하여 데이터셋 분리하여 저장. -> TrainData.csv, ValidationData.csv, TestData.csv

#### ② Classification 모델 
✔️ **데이터셋 전처리**
- 원본이미지(450 x 600) -> crop (300 x 300) -> resize (128 x 128) -> 증강 (랜덤 회전, 수평/수직 이동, 확대/축소, 수평/수직 flip, 랜덤 밝기 및 대비 조정)

✔️ **모델 구성**
- Pre-trained EfficientNet B3 <br>
  <img width="600" alt="스크린샷 2024-06-07 오후 8 18 46" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/35bbb83b-07c3-44cd-93a5-890cbd4bff9b"> 

✔️ **모델 학습 결과**
- Loss graph of Train & Validation, Accuracy graph of Train & Validation <br>
  <img width="600" alt="스크린샷 2024-06-07 오후 8 18 46" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/6d52c8dc-3ba9-46be-8786-38b1a1478956">
- Test Data에 대한 Classification 결과 <br>
  <img width="400" alt="스크린샷 2024-06-07 오후 8 19 26" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/5e43a52c-049e-45d0-9c94-67f936f99e3b"> <img width="400" alt="스크린샷 2024-06-07 오후 8 22 58" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/f9185b11-3552-46a0-aaef-fa4c98e1d215">

✔️ **Test Data의 정확도: 88%**

#### ③ Lesion Segmentation 모델 
✔️ **데이터셋 전처리**
- 원본이미지(450 x 600) -> crop (300 x 300) -> resize (224 x 224) + mask 정보

✔️ **모델 구성**
- U-Net - Encoder: Pre-trained ResNet34, Weights: Pre-trained ImageNet <br>
  <img width="600" alt="스크린샷 2024-06-07 오후 8 18 46" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/76ed00d0-ec72-4d1f-a0fe-4e1480ef13a5"> 

✔️ **모델 학습 결과**
- Loss graph of Train & Validation, IoU graph of Train & Validation, Dice graph of Train & Validation <br>
  <img width="900" alt="스크린샷 2024-06-07 오후 8 53 52" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/7237ff2a-4185-4548-8147-0c7065330793">

✔️ **Test Data의 IoU: 0.85, Dice: 0.91**

#### ④ 모델 배포 및 예측 api 개발

✔️ **Flask 실행**
- flask 위한 파일 작성 -> [app.py](https://github.com/YeoJiSu/SkinAI-WebDiagnosis/blob/main/src/AI/flask-api/app.py)

✔️ **모델 배포 및 실행**
- prediction을 위한 파일 작성 -> [test.py](https://github.com/YeoJiSu/SkinAI-WebDiagnosis/blob/main/src/AI/flask-api/test.py)
- pythonanywhere 서버에 label_encoder.pkl, cls_model.pth, seg_model.pth 업로드함. <br>
  <img width="900" alt="스크린샷 2024-06-07 오후 8 53 52" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/ac3dd8c0-251c-4b71-bb02-6b298342a566">

✔️ **pythonanywhere에 Flask api 배포**
- https://yeojisu.pythonanywhere.com/test/ 에 POST request로 body에 json 데이터 형식 {"image_url": "예측할 이미지 url"} 작성하여 전송
- 응답값 {"image_url": "mask 생성된 Image Url", “label”: “Predicted Class”} 이 나옴 <br>
  <img width="797" alt="337548075-95b51bf1-e830-4900-8f41-8f17f6ce116d" src="https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/d7762fcb-eeea-4aea-b7ba-02145a3bfff4">


### 🌱 웹페이지 개발 결과물 소개

#### 메인 페이지(/index)
- AI를 통하여 피부 질환 분석을 할 수 있는 패아자
- 카메라로 직접 촬영하거나 사진을 업로드하여 간단하게 피부 질환 테스트를 수행할 수 있음 

#### 소개 페이지(/about)
- Dr. Skin(현 플랫폼) 에 대한 소개 페이지

#### 피부 질환 종류 소개 페이지(disease)
- 피부 질환 종류 소개 및 원인/예방법 등에 대한 소개 페이지

#### 커뮤니티 페이지(/community)
- 다른 사람들과 소통할 수 있는 페이지
- 핵심 기능은 아니므로 구현하지 않았음. 추후 구현 예정



## G. 개발 결과물을 사용하는 방법 소개 (설치 방법, 동작 방법 등)

### 🌱 설치 방법

#### Frontend (src/Frontend/)
1. npm install
2. npm start

#### Backend-Flask (src/AI/flask-api)
1. flask run 또는 python app.py

#### Backend-FastAPI (src/Backend)
1. python3 -m venv .venv
2. source .venv/bin/activate
3. cd api
4. pip install -r requirements.txt
5. gunicorn --bind 0.0.0.0:8000 -k uvicorn.workers.UvicornWorker --reload app:app

#### DB-postgreSQL (src/Backend/)
1. docker compose up --buiild
   (--build ==> 최초 1회만 수행)

### 🌱 동작 방법
> 💡 동작 영상 url:  https://photos.app.goo.gl/FnREN8LpcbR5id368
> 
#### ① 메인페이지(/index) 에서 '사진 모드 테스트' 버튼 클릭

#### ② Dialog에서 '시작하기' 버튼 클릭

#### ③ 카메라 OR 파일 선택으로 사진 업로드

#### ④ 피부 질환 분석 사진 및 설명 확인

![KakaoTalk_Video_2024-06-09-12-37-37-ezgif com-speed](https://github.com/YeoJiSu/SkinAI-WebDiagnosis/assets/76769044/53cdbdb9-663d-4dd1-839f-2de87b901ef2)

## H. 개발 결과물의 활용방안 소개
1. 의료 서비스 접근이 어려운 지역이나 개인에게 자가진단 서비스를 통해서 접근성을 높일 수 있습니다.
2. 전문가와 함께 사용하여 기존보다 더욱 신속하고 정확하게 진단하여 효율성을 높일 수 있습니다.
3. 시스템이 수집하는 데이터를 학생 및 연구자들에게 제공해 의학 교육 및 의학 연구에 기여할 수 있습니다.
4. 시스템을 상업적으로 활용해 맞춤형 피부 관리 제품이나 치료를 제공할 수 있습니다.
