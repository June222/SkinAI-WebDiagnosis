# 🧑🏻‍⚕️ SkinAI WebDiagnosis

## A. 프로젝트 명
피부 질환 진단 웹 서비스, Dr.Skin

## B. 프로젝트 멤버 이름 및 멤버 별 담당한 파트 소개
|201824441 김승혁  &nbsp;  &nbsp;  &nbsp; 201924587 조주은 &nbsp; |202055565 여지수|
|:----------|:---|
|• React 프론트엔드 개발<br>• Proxy 서버 구축<br>• CORS 구현<br>• Postgresql  데이터베이스 구축<br>• Fast API 백엔드 개발<br>• Docker 배포| • Figma 작성<br>• 데이터 분석 및 전처리, AI (분류, 세그멘테이션) 모델 개발<br>• AI 모델 배포용 Flask Rest API 개발<br>• PythonAnywhere 배포|

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


#### ② Classification 모델 

#### ③ Lesion Segmentation 모델 

#### ④ 모델 배포 및 예측 api 개발

### 🌱 웹페이지 개발 결과물 소개

## G. 개발 결과물을 사용하는 방법 소개 (설치 방법, 동작 방법 등)

## H. 개발 결과물의 활용방안 소개
1. 의료 서비스 접근이 어려운 지역이나 개인에게 자가진단 서비스를 통해서 접근성을 높일 수 있습니다.
2. 전문가와 함께 사용하여 기존보다 더욱 신속하고 정확하게 진단하여 효율성을 높일 수 있습니다.
3. 시스템이 수집하는 데이터를 학생 및 연구자들에게 제공해 의학 교육 및 의학 연구에 기여할 수 있습니다.
4. 시스템을 상업적으로 활용해 맞춤형 피부 관리 제품이나 치료를 제공할 수 있습니다.
