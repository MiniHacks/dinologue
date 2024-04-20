// Mic.tsx
import React from 'react';

const Mic: React.FC = () => {
    return (
        <div>
            <button id="startRecording">Start Recording</button>
            <button id="stopRecording">Stop Recording</button>
            <audio id="recordedAudio" controls></audio>
    
            <script src="mictest.js"></script>
        </div>
    );
};

export default Mic;
