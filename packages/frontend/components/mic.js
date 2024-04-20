
export async function startRecording() {
    try {
        //Ask User for Permission To Use Their Mic
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    catch (err) {
        console.error(`Error Message: ${err}`);
    }
    try{
        //If Allowed Create Media Recorder
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        //If Data Available Continue Recording/ Pushing Data Chunks
        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
        }

        //Start the Recording
        mediaRecorder.start();

        return { stream, mediaRecorder, chunks };
    } catch (err) {
        console.error(`Error starting recording: ${err}`);
        throw err;
    }
}

export async function stopRecording(stream, mediaRecorder, chunks) {
    // No Recording Started
    if (!mediaRecorder || !stream) {
        console.warn("Recording not started.");
        return;
    }

    // Stop the Stream
    stream.getTracks().forEach(track => track.stop());

    // Stop the Recording
    mediaRecorder.stop();

    // Once Stopped, Save the Audio File
    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: "audio/wav" });
        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.mp3");

        fetch("/upload", {
            method: "POST",
            body: formData
        });
    };
}
