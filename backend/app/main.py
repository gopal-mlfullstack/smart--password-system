from app.api.routes.password import router as password_router
from app.database.session import Base, engine
from app.models import password
from fastapi import FastAPI

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(password_router)
