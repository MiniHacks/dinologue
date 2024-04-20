import type { NextPage } from "next";
import { Box, chakra, Heading, VStack } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box>
        <Box position={"absolute"} left={"1111px"} top={"262px"}>
          <chakra.svg
            width={"401"}
            height={"562"}
            viewBox={"0 0 401 562"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <path
              d={"M356.5 136L0 562H1343L904.5 0L639.5 431.5L356.5 136Z"}
              fill={"#454A45"}
            />
          </chakra.svg>
        </Box>
        <Box position={"absolute"} top={"398px"}>
          <chakra.svg
            width={"530"}
            height={"426"}
            viewBox={"0 0 530 426"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <path
              d={"M-456.5 136L-813 562H530L91.5 0L-173.5 431.5L-456.5 136Z"}
              fill={"#454A45"}
            />
          </chakra.svg>
        </Box>
        <Box position={"absolute"} left={"100px"} top={"353px"} zIndex={"-1"}>
          <chakra.svg
            width={"1343"}
            height={"471"}
            viewBox={"0 0 1343 471"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <path
              d={"M356.5 136L0 562H1343L904.5 0L639.5 431.5L356.5 136Z"}
              fill={"#3C413C"}
            />
          </chakra.svg>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Home;
