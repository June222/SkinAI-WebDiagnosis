from sqlalchemy import Column, ARRAY, BigInteger, Integer, String, Boolean, DateTime, ForeignKey, Table

from model.database import Base

class Disease(Base):
    __tablename__ = "disesase"
    did = Column(BigInteger, index=True, primary_key=True)
    label = Column(String)
    title = Column(String)
    description = Column(String)