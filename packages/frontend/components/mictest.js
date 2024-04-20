let stream;
let chunks = [];
let mediaRecorder;

const startRecording = document.getElementById('startRecording');
const stopRecording = document.getElementById('stopRecording');

startRecording.addEventListener('click', async () => {
    try {
        // Asks User for Permissions to Use Microphone
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // If allowed, creates a Media Recorder
        mediaRecorder = new MediaRecorder(stream);

        // If space, write to blob
        chunks = [];

        if (mediaRecorder.state === 'recording') {
            console.warn('MediaRecorder already recording');
            return;
        }

        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
        }

        // Starts Recording Audio
        mediaRecorder.start();
    } catch (err) {
        console.error(`Error Message: ${err}`);
    }
});

stopRecording.addEventListener('click', async () => {

    // Stop Stream
    stream.getTracks().forEach(track => track.stop());

    // Stop recording
    mediaRecorder.stop();

    // Once stopped, store the recording
    mediaRecorder.onstop = async (e) => {
        // Should create a single blob from chunks collected
        const audioBlob = new Blob(chunks, { type: 'audio/mp3' });
    
        // Display Audio on Website/Allow Playbacks
        const audioURL = window.URL.createObjectURL(audioBlob);
        const recordedAudio = document.getElementById('recordedAudio')
        recordedAudio.src = audioURL;

        // Save Blob as File to Server
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.mp3');

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Audio uploaded successfully.');
            } else {
                console.error('Failed to upload audio:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading audio:', error);
        }

        
};
});
