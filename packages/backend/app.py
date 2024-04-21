from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil   
from fastapi.responses import FileResponse
# import the geminiAPI.py script here
import geminiAi as gemini

app = FastAPI()

# CORS middleware to allow connections from your Next.js frontend
origins = [
    "http://localhost:3000",  # Adjust the port if your Next.js app runs on a different one
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/upload/")
async def upload_audio(file: UploadFile = File(...)):
    with open(f"{file.filename}", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    gemini.main()

    return {"filename": file.filename}

@app.get("/processed")
async def process_audio():
    # send the output.mp3 file to the frontend
    return FileResponse("output.mp3")