from typing import List
from sqlmodel import SQLModel

# Base Schemas

class ProfileBase(SQLModel):
    name: str

class ArticleBase(SQLModel):
    name: str
    price: float

# Create / Update Schemas

class ProfileCreate(ProfileBase):
    pass

class ArticleCreate(ArticleBase):
    pass

# Read Schemas

class ProfileRead(ProfileBase):
    id: int

    class Config:
        orm_mode = True

class ArticleRead(ArticleBase):
    id: int
    assigned_profiles: List[ProfileRead] = []

    class Config:
        orm_mode = True