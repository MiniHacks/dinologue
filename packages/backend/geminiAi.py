import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

# Check if the API key is loaded properly
if not GOOGLE_API_KEY:
    raise ValueError("No GOOGLE_API_KEY set. Check your .env file.")

genai.configure(api_key=GOOGLE_API_KEY)

# Function to upload a local file and get a file object for the API
def upload_audio_file(file_path):
    # Upload the audio file and return the file object
    return genai.upload_file(path=file_path)

local_audio_file_path = '../backend/music.mp3'
audio_file = upload_audio_file(local_audio_file_path)

prompt = "Listen carefully to the following audio file. Provide a brief summary."

model_name = 'models/gemini-1.5-pro-latest'  # Replace with the appropriate model name
model = genai.GenerativeModel(model_name)

response = model.generate_content([prompt, audio_file])

# Print the response from the model
print(response.text)