import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyHeading, { MyHeadingProps } from "./MyHeading";

type PageLayoutProps = MyHeadingProps & {
  children: ReactNode;
  bgColor?: string;  // Optional background color prop
};

const PageLayout = ({ children, bgColor = "linear-gradient(#e66465, #9198e5);", ...props }: PageLayoutProps): JSX.Element => (
  <Box bg={bgColor} w="full" minH="100vh">
    <MyHeading {...props} />
    {children}
  </Box>
);
export default PageLayout;
