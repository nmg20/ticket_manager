from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ..db import get_session
from ..crud import *
from ..models import Profile

router = APIRouter(prefix="/profiles", tags=["profiles"])

@router.get("/")
def list_profiles(session: Session = Depends(get_session)):
    return get_profiles(session)

@router.get("/{profile_id}")
def get_profile_by_id(profile_id: int, session: Session = Depends(get_session)):
    profile = get_profile(session, profile_id)
    if not profile:
        raise HTTPException(status_code=404, detail=f"Profile {profile_id} not found")
    return profile

@router.post("/")
def create_new_profile(profile: Profile, session: Session = Depends(get_session)):
    return create_profile(session, profile)

