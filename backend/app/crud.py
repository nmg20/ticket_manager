from typing import List, Optional
from fastapi import Depends
from sqlmodel import Session, select
from models import Article, Profile
from .db import get_session

# Articles

def get_articles(session: Session = Depends(get_session)) -> List[Article]:
    return list(session.exec(select(Article)).all())

def get_article(session: Session, article_id: int) -> Optional[Article]:
    return session.get(Article, article_id)

def create_article(session: Session, article: Article) -> Article:
    session.add(article)
    session.commit()
    session.refresh(article)
    return article

def create_profile(session: Session, profile: Profile) -> Profile:
    session.add(profile)
    session.commit()
    session.refresh(profile)
    return profile


# Profiles

def get_profiles(session: Session = Depends(get_session)):
    return list(session.exec(select(Profile)).all())

def get_profile(session: Session, profile_id: int) -> Optional[Profile]:
    return session.get(Profile, profile_id)

def get_profiles_by_ids(session: Session, profile_ids: List[int]) -> list[Profile]:
    return session.exec(select(Profile).where(Profile.id.in_(profile_ids))).all()

# Asignación de un profile a un article
def assign_profile_to_article(session: Session, article_id: int, profile_ids: List[int]) -> Article | None:
    article = session.get(Article, article_id)
    if not article:
        return None
    
    profiles = session.get()
    pass