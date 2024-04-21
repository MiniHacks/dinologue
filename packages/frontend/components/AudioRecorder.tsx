import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaMicrophone, FaStop } from 'react-icons/fa'; // Using React Icons for more options

const AudioRecorder: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  useEffect(() => {
    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, [stream]);

  const handleStartRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(mediaStream);
      const recorder = new MediaRecorder(mediaStream);

      recorder.ondataavailable = event => {
        chunksRef.current.push(event.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/mp3' });
        const audioURL = window.URL.createObjectURL(audioBlob);
        setAudioUrl(audioURL);
        chunksRef.current = [];
        
        // Upload the audio file
        await uploadAudioFile(audioBlob);
      };

      setMediaRecorder(recorder);
      recorder.start();
    } catch (error) {
      console.error(`Error when starting the recording: ${error}`);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const uploadAudioFile = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.mp3');

    try {
      const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Upload successful:', data);
      } else {
        console.error('Upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Box px={"10"} py={"5"}>
      <IconButton 
        icon={<FaMicrophone />} 
        onClick={handleStartRecording} 
        isDisabled={mediaRecorder?.state === 'recording'}
        aria-label="Start recording"
        colorScheme="red"
        size="lg"
        m={2}
      />
      <IconButton 
        icon={<FaStop />}
        onClick={handleStopRecording} 
        isDisabled={!mediaRecorder || mediaRecorder.state !== 'recording'}
        aria-label="Stop recording"
        colorScheme="red"
        size="lg"
        m={2}
      />
      {audioUrl && <audio src={audioUrl} controls autoPlay />}
    </Box>
  );
};

export default AudioRecorder;
