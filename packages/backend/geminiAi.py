import os
import requests
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
ELEVENLABS_API_KEY = os.getenv('ELEVENLABS_API_KEY')

# Check if the API keys are loaded properly
if not GOOGLE_API_KEY:
    raise ValueError("No GOOGLE_API_KEY set. Check your .env file.")
if not ELEVENLABS_API_KEY:
    raise ValueError("No ELEVENLABS_API_KEY set. Check your .env file.")

# Configure Google API
genai.configure(api_key=GOOGLE_API_KEY)

def upload_audio_file(file_path):
    return genai.upload_file(path=file_path)

# Process audio file
local_audio_file_path = '../backend/music.mp3'
audio_file = upload_audio_file(local_audio_file_path)
prompt = "Listen carefully to the following audio file. Provide a brief summary."
model_name = 'models/gemini-1.5-pro-latest'
model = genai.GenerativeModel(model_name)
response = model.generate_content([prompt, audio_file])

# Output text response
print(response.text)
with open('message.txt', 'w') as f:
    f.write(response.text)

# ElevenLabs Text-to-Speech
url = "https://api.elevenlabs.io/v1/text-to-speech/e3LFxj9gLCuc93l3RQkP"  # Replace 'your-voice-id' with the actual ID
headers = {
    "Accept": "audio/mpeg",
    "Content-Type": "application/json",
    "xi-api-key": ELEVENLABS_API_KEY
}
data = {
    "text": response.text,
    "model_id": "eleven_monolingual_v1",
    "voice_settings": {
        "stability": 0.5,
        "similarity_boost": 0.5
    }
}

response = requests.post(url, json=data, headers=headers)
response.raise_for_status()  # Ensure the request was successful

# Save the audio response
with open('output.mp3', 'wb') as audio_file:
    for chunk in response.iter_content(chunk_size=1024):
        if chunk:
            audio_file.write(chunk)

print("Audio file generated successfully.")
