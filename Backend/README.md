# DB
### /Backend 경로에서 명령어 실행
1. docker compose up --build
(--build ==> 최초 1회만 수행)

# Fastapi
### /Backend 경로에서 명령어 실행
(python 가상환경 생성 및 패키지 설치 / 1. 4.는 최초 1회만 수행)
1. python3 -m venv .venv
2. source .venv/bin/activate
3. cd api
4. pip install -r requirements.txt

cf) 가상환경 탈출 ==> $ deactivate

### /Backend/api 경로에서 명령어 실행
5. gunicorn --bind 0.0.0.0:8000 -k uvicorn.workers.UvicornWorker --reload app:app

