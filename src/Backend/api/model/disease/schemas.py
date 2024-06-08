from pydantic import BaseModel, Field

class Disease(BaseModel):
    did: int
    title: str
    description: str
    label: str 

class DiseaseCreate(BaseModel):
    title: str = Field(...)
    description: str = Field(...)
    label: str = Field(...)

class DiseaseUpdate(BaseModel):
    title: str = Field(...)
    description: str = Field(...)
    label: str = Field(...)