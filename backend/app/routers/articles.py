from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ..db import get_session
from ..crud import *
from ..models import Article

router = APIRouter(prefix="/articles", tags=["articles"])

@router.get("/")
def list_articles(session: Session = Depends(get_session)):
    return get_articles(session)

@router.get("/{article_id}")
def get_article_by_id(article_id: int, session: Session = Depends(get_session)):
    article = get_article(session, article_id)
    if not article:
        raise HTTPException(status_code=404, detail=f"Article {article_id} not found")
    return article

@router.post("/")
def create_new_article(article: Article, session: Session = Depends(get_session)):
    return create_article(session, article)