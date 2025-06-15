from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class DrawingData(BaseModel):
    name: str
    elements: dict  # JSON from frontend

@app.get("/")
def root():
    return {"message": "Drawing Board API is running"}

@app.post("/save")
def save_drawing(data: DrawingData):
    with open(f"{data.name}.json", "w") as f:
        import json
        json.dump(data.elements, f)
    return {"status": "success"}
