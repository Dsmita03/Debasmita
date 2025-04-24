import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box bg="#121212" color="white" minH="100vh">
      {/* Sidebar - Fixed on desktop, full-width on mobile */}
      <Box
        position={{ base: "relative", md: "fixed" }}
        top="0"
        left="0"
        w={{ base: "100%", md: "20rem" }}
        h={{ base: "auto", md: "100vh" }}
        bg="#1a1a1a"
        zIndex="999"
      >
        <Sidebar />
      </Box>

      {/* Main content wrapper */}
      <Box
        ml={{ base: 0, md: "20rem" }}
        display="flex"
        flexDirection="column"
        minH="100vh"
      >
        {/* Desktop Navbar */}
        <Box
          position="fixed"
          top="0"
          left={{ base: 0, md: "20rem" }}
          right="0"
          zIndex="999"
          display={{ base: "none", lg: "block" }}
          bg="#121212"
          boxShadow="md"
          width="100%"
        >
          <Navbar />
        </Box>

        {/* Main Content */}
        <Box
          mt={{ base: 0, lg: "4rem" }}
          px={{ base: 4, md: 6 }}
          py={4}
          flex="1"
          pb={{ base: "8rem", lg: "4rem" }}
          overflowY="auto"
          zIndex="1"
        >
          {children}
        </Box>

        {/* Mobile Bottom Navbar */}
        <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          width="100%"
          display={{ base: "flex", lg: "none" }}
          bg="#121212"
          justifyContent="center"
          py="1.5rem"
          px="1rem"
          boxShadow="0 -2px 10px rgba(0,0,0,0.4)"
          zIndex="999"
        >
          <Navbar />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
