# DB
1. (경로 : .../Backend/)
docker compose up --build
(--build ==> 최초 실행시)

# Fastapi 실행
1. (경로 : .../Backend/)
source .venv/bin/activate
2. 
cd api
3. 
gunicorn --bind 0.0.0.0:8000 -k uvicorn.workers.UvicornWorker --reload app:app

