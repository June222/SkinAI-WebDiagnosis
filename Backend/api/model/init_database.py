import json

import os

from typing import Annotated

from fastapi import Depends

from sqlalchemy.orm import Session

from core.config import settings

from model.database import engine, get_db, Base

TEST_ID = 'test'
TEST_PASSWORD = '12341234'
TEST_PHONE = '01012341235'
TEST_RESIDENT_NUMBER = '1234567'

PATH = os.path.abspath(os.pardir)

def init_database(engine: engine, db: Annotated[Session, Depends(get_db)]):
    # Create Tables
    Base.metadata.create_all(bind=engine)
