from fastapi import FastAPI, File, UploadFile, HTTPException
from pathlib import Path

app = FastAPI()

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parent=True, exist_ok=True)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/upload/")
async def upload_audio_file(audio: UploadFile = File(...)):
    try:
        # Save the audio file to the specified directory
        file_path = UPLOAD_DIR / audio.filename
        with open(file_path, "wb") as file:
            file.write(await audio.read())
        
        return {"message": "Audio file uploaded successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload audio file: {e}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)