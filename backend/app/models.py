from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional

class ArticleProfileLink(SQLModel, table=True):
    article_id: Optional[int] = Field(
        default=None, foreign_key="article.id", primary_key=True
    )
    profile_id: Optional[int] = Field(
        default=None, foreign_key="profile.id", primary_key=True
    )

class ArticleBase(SQLModel):
    name: str
    price: float

class Article(ArticleBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    assigned_profiles: List["Profile"] = Relationship(
        back_populates="articles", link_model=ArticleProfileLink
    )

class ProfileBase(SQLModel):
    name: str

class Profile(ProfileBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    articles: List[Article] = Relationship(
        back_populates="assigned_profiles", link_model=ArticleProfileLink
    )