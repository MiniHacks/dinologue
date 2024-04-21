import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import PageLayout from "../components/Layout/PageLayout";
import { Box, Center, Spinner, Button, HStack} from "@chakra-ui/react";

// Dynamic import of the AudioRecorder component
const AudioRecorder = dynamic(() => import("../components/AudioRecorder"), {
  ssr: false
});

const RecorderPage: NextPage = () => {
    // get the output.mp3 file from the backend 
    const DynamicModel = dynamic(() => import("../components/dino"), {
      ssr: false,
      loading: () => (
        <Center paddingTop={"10"}>
          <Spinner
            thickness={"4px"}
            speed={"0.65s"}
            emptyColor={"gray.200"}
            color={"green.500"}
            size={"xl"}
          />
        </Center>
      ),
    });

    const getAudio = async () => {
        try {
            const response = await fetch('http://localhost:8000/processed');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            console.log(`Blob URL: ${url}`); // Check the blob URL in the console
            const audio = new Audio(url);
            audio.play().catch(e => console.error(`Error playing audio: ${e.message}`));
        } catch (error) {
            console.error(`Error when fetching the audio: ${error}`);
        }
    }
    
  return (
    <PageLayout title="Audio Recorder">
      <AudioRecorder />
        <Box position="absolute" bottom="-55" left="80" zIndex="2" height="100%" width="100%">
        <DynamicModel /> 
      </Box>
      
          
        <Box position="absolute" top="500" right="450" zIndex="2">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>
      <Box position="absolute" top="450" right="800" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>
      <Box position="absolute" top="530" right="650" zIndex="2">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>

      <Box position="absolute" top="400" right="350" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>

      <Box position="absolute" top="350" right="650" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>
      <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <button style={{
        top: '50%',
        left: '50%',
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'green',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: '2'
      
      }} onClick={getAudio}>Let's see what Theo thinks!</button>
      </div>
     
    </PageLayout>
  );
};

export default RecorderPage;
