import type { NextPage } from "next";
import {
  Box,
  Center,
  chakra,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
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

  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box>
        <Box
          height={"100%"}
          width={"100%"}
          position={"absolute"}
          left={"540px"}
          top={"500px"}
        >
          <DynamicModel />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Home;
