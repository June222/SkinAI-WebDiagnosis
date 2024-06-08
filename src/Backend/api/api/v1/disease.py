from typing import Annotated, List

from fastapi import APIRouter, Depends, HTTPException, Request

from sqlalchemy.orm import Session

from fastapi_jwt_auth import AuthJWT

from model.database import get_db

from model.disease import crud as disease_crud
from model.disease import schemas as disease_schemas


router = APIRouter(
    prefix='/disease',
    tags=['disease'],
    responses={404: {'description': 'Not Found'}},
)

@router.post('/label')
async def get_disease_by_label(request:Request, db: Annotated[Session, Depends(get_db)]) :
    body = await request.body()
    label=body.decode('utf-8')
    print(label)
    disease = disease_crud.get_disease_by_label(db, label)

    if disease is None:
        HTTPException(status_code=404, detail="Disease not found")

    return disease