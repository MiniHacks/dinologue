# Dinologue -- the best way to learn a language

![](https://i.imgur.com/FsNla5r.jpeg)

## Inspiration

As college students, learning new languages is not only exciting but also highly beneficial for broadening our academic and professional horizons. However, the learning process can sometimes be confusing, and it's easy to forget a word without even realizing it. To tackle this challenge, we created Dinologue—a supportive and interactive language learning platform featuring our friendly dinosaur mascot, Theo!

## What it does

Dinologue is a multifunctional website designed to enhance language learning through interactive tools and AI-driven support. Here’s what it offers:

- **Language Detection and Interaction:** Automatically determines the language spoken by the user and provides responses in the same language, including grammatical corrections as needed.
- **Speech-to-Text and Text-to-Speech:** Integrates GeminiAI for accurate speech-to-text conversion and ElevenLabs for lifelike text-to-speech output, facilitating seamless communication.

## How we built it

### Back End:
Our backend architecture employs the **Gemini API** for STT(speech-to-text functionality). Using the Gemini 1.5 API documentation as a guide, we set up authentication and handled API responses efficiently. For text-to-speech, we integrated the ElevenLabs API, which allowed TTS(Text-to-speech functionality), enhancing the interactive experience.

### Front End:
The front end is crafted with **Next.js**, **TypeScript**, and **Three.js**, bringing Theo to life. Theo, your digital dino friend, greets users with a friendly spin on the screen, made possible through Three.js animations. Users can interact directly with Theo by recording their speech on the website, which then processes the input for grammatical improvements.

### What we learned
- metadata and payload can do the same thing >:((((
- uploading a recorded mp3 can be goofy 

### Accomplishments we're proud of
- Ansh's only working laptop
- Veena enthusiasm and expertise Js
- Stuti Three.js motion menace 
- Sam Api ally

