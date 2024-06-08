from sqlalchemy import Column, ARRAY, BigInteger, Integer, String, Boolean, DateTime, ForeignKey, Table

from model.database import Base


class Test(Base):
    __tablename__ = "test"
    tid = Column(BigInteger, index=True, primary_key=True)
    name = Column(String)
    