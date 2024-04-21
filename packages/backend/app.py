from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil   

app = FastAPI()

# CORS middleware to allow connections from your Next.js frontend
origins = [
    "http://localhost:3001",  # Adjust the port if your Next.js app runs on a different one
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def hello():
    print("Route /hello was called")
    return {"message": "Hello, world!"}

@app.get("/api/hello")
async def hello():
    print("Route /api/hello was called")
    return {"message": "Hello, bitches!"}

@app.post("/upload/")
async def upload_audio(file: UploadFile = File(...)):
    with open(f"{file.filename}", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"filename": file.filename}
