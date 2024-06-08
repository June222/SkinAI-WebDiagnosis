from sqlalchemy.orm import Session

from . import models, schemas


def get_disease(db: Session, disease_id: int):
    return db.query(models.Disease).filter(models.Disease.did == disease_id).first()

def get_disease_by_label(db: Session, label: str):
    return db.query(models.Disease).filter(models.Disease.label == label).first()

def check_diseases_empty(db: Session):
    return db.query(models.Disease).count() == 0

def create_disease(db: Session, disease: schemas.DiseaseCreate):
    db_disease = models.Disease(**disease.dict())
    db.add(db_disease)
    db.commit()
    db.refresh(db_disease)
    return db_disease