import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import PageLayout from "../components/Layout/PageLayout";

// Dynamic import of the AudioRecorder component
const AudioRecorder = dynamic(() => import("../components/AudioRecorder"), {
  ssr: false
});

const RecorderPage: NextPage = () => {
  return (
    <PageLayout title="Audio Recorder">
      <AudioRecorder />
    </PageLayout>
  );
};

export default RecorderPage;
