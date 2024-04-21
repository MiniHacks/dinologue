import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyHeading, { MyHeadingProps } from "./MyHeading";

type PageLayoutProps = MyHeadingProps & {
  children: ReactNode;
  bgColor?: string;  // Optional background color prop
};

const PageLayout = ({ children, bgColor = "linear-gradient(#E9D17D, #704683);", ...props }: PageLayoutProps): JSX.Element => (
  <Box bg={bgColor} w="full" minH="100vh">
    <MyHeading {...props} />
    {children}
  </Box>
);
export default PageLayout;
