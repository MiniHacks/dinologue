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
local_audio_file_path = '../backend/recording.mp3'
audio_file = upload_audio_file(local_audio_file_path)
prompt_1 = "Detect the language of the following audio file. The speaker is speaking in first person. Only provide the langauge in the following format: 'insert language'."
prompt = "Listen carefully to the following audio file. Provide 2 sentences of feedback on the language they are speaking and how well they are speaking it. Don't add Titles, just the commentary. Don't be afraid to correct them if they are wrong. Very Important: Speak back in the language that the speaker was speaking in, not a mixture of English and the language. Make sure to reference the speaker in first person."
model_name = 'models/gemini-1.5-pro-latest'
model = genai.GenerativeModel(model_name)
response_1 = model.generate_content([prompt_1, audio_file])
response = model.generate_content([prompt, audio_file])

# detect the language
print(response_1.text)
with open('language.txt', 'w') as f:
    f.write(response_1.text)

# voice_settings = {
#     "English": 1, 
#     "Japanese": 2,
#     "Chinese": 3,
#     "German": 4,
#     "Hindi": 5,
#     "French": 6,
#     "Korean": 7,
#     "Portuguese": 8,
#     "Italian": 9,
#     "Spanish": 10,
#     "Indonesian": 11,
#     "Dutch": 12,
#     "Turkish": 13,
#     "Filipino": 14,
#     "Polish": 15,
#     "Swedish": 16,
#     "Bulgarian": 17,
#     "Romanian": 18,
#     "Arabic": 19,
#     "Czech": 20,
#     "Greek": 21,
#     "Finnish": 22,
#     "Croatian": 23,
#     "Malay": 24,
#     "Slovak": 25,
#     "Danish": 26,
#     "Tamil": 27,
#     "Ukrainian": 28,
#     "Russian": 29
# }

accents = {
    "english": "SOYHLrjzK2X1ezoPC6cr",
    "spanish": "z9fAnlkpzviPz146aGWa",
    "german": "pNInz6obpgDQGcFmaJgB",
    "french": "pqHfZKP75CvOlQylNhV4",
    "polish": "IKne3meq5aSn9XLyUdCD",
    "italian": "2EiwWnXFnvU5JabPnv8n"
}

language = response_1.text
# process language text by stripping the text
language = language.strip().lower()
print(language)
# Output text response
print(response.text)
with open('message.txt', 'w') as f:
    f.write(response.text)

# ElevenLabs Text-to-Speech
if language in accents:
    accent = accents[language]
else:
    accent = accents["english"]

print(f"Using accent: {accents[language]}")
    
url = f"https://api.elevenlabs.io/v1/text-to-speech/{accent}"

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
