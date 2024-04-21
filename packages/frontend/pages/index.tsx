import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Center,
  chakra,
  Heading,
  Link,
  Text,
  Button,
  Spinner,
  HStack,
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

  const router = useRouter();

  const navigateToRecorder = () => {
    router.push('/recorder');
  };

  return (
  <PageLayout title={"Dinologue"}>
      <Box px={10} py={5} maxWidth="100%" minH="100%">
      <Button variant={"ghost"} position={"absolute"} top={"75px"} left={"1295px"} zIndex={2} 
      _hover={{
        variant: "ghost",
        textDecoration: "underline"
      }}
      
      style={{
        color: "#453C3C",
        fontFamily: "Inter",
        fontWeight: "500",
        fontSize: "20px"
    }}>
      <Link>devpost</Link>
    </Button>
    <Button variant={"ghost"} position={"absolute"} top={"80px"} left={"420px"} zIndex={2} 
      _hover={{
        variant: "ghost",
        textDecoration: "underline"
      }}
      
      style={{
        color: "#453C3C",
        fontFamily: "Inter",
        fontWeight: "500",
        fontSize: "20px"
    }}>
      <Link target="blank" href={"https://github.com/iamstutishah/dinologue"}>github</Link>
    </Button>
    <Button variant={"ghost"} position={"absolute"} top={"125px"} left={"860px"} zIndex={2} 
      _hover={{
        variant: "ghost",
        textDecoration: "underline"
      }}
      
      style={{
        color: "#453C3C",
        fontFamily: "Inter",
        fontWeight: "500",
        fontSize: "20px"
    }}>
      <Link>about us</Link>
    </Button>
    <Button variant={"ghost"} position={"absolute"} top={"250px"} left={"210px"} zIndex={2} 
      _hover={{
        variant: "ghost",
        textDecoration: "underline"
      }}
      
      style={{
        color: "#453C3C",
        fontFamily: "Inter",
        fontWeight: "500",
        fontSize: "20px"
    }}>
      <Link>theo facts</Link>
    </Button>
      <Box position="absolute" bottom="0" right="0" zIndex="1">
        <svg width="1512" height="471" viewBox="0 0 1512 471" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M482.5 136L126 562H1469L1030.5 0L765.5 431.5L482.5 136Z" fill="#3C413C"/>
          <path d="M1469 55.2755L1108 476.276H1518V116.776L1469 55.2755Z" fill="#454A45"/>
          <path d="M60 66L-7 156V489.5H371L419 472.5L60 66Z" fill="#454A45"/>
        </svg>
      </Box>
      <Box position="absolute" top="20" right="450" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>
      <Box position="absolute" top="10" right="900" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>

      <Box position="absolute" top="30" right="5" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>

      <Box position="absolute" top="52" right="1100" zIndex="1">
        <svg width="247" height="114" viewBox="0 0 247 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="119.641" cy="55.5" rx="57.8906" ry="55.5" fill="#FFFBFB"/>
          <ellipse cx="196.056" cy="77.25" rx="50.9437" ry="33.75" fill="#FFFEFE"/>
          <ellipse cx="42.4531" cy="78.75" rx="42.4531" ry="35.25" fill="white"/>
        </svg>
      </Box>

      <VStack mt={"250"}>
          <HStack>
            <Text fontSize={"50px"} fontWeight={"bold"} color={"#453C3C"} fontFamily={"Poppins"}>dino</Text>
            <Text fontSize={"50px"} fontWeight={"bold"} color={"#FFFFFF"} fontFamily={"Poppins"}>logue</Text>
          </HStack>
          <Button
            backgroundColor={"#453C3C"}
            color={"#FFFFFF"}
            borderRadius={"20px"}
            width={"150px"}
            height={"50px"}
            fontSize={"20px"}
            fontWeight={"300"}
            fontFamily={"Poppins"}
            marginTop={"20px"}
            onClick={navigateToRecorder}
            aria-label="Start audio recording"
            zIndex={"2"}
          >
            Start Here
          </Button>
        </VStack>
      </Box>
      <Box position="absolute" bottom="-60" left="80" zIndex="1" height="100%" width="100%">
        <DynamicModel /> 
      </Box>
    </PageLayout>
    
  );
}

export default Home;
