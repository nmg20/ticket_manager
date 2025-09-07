from fastapi import FastAPI
from .db import init_db

app = FastAPI(
    title="TM",
    version="0.1.0"
)

init_db()