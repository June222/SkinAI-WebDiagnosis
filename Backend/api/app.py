from fastapi import FastAPI, Request
from fastapi.responses import JSONRespons

from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException

from core.config import settings, AuthJWTSettings

@app.get('/')
def root():
    return {'message': 'Hello World'}
