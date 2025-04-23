import { Box, Flex, IconButton } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { HamburgerIcon } from "@chakra-ui/icons"; // Ensure you have this import

import { useState } from "react";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box bg="#121212" color="white" minH="100vh">
      <Flex direction={{ base: "column", md: "row" }} h="100%">
        {/* Sidebar - Full height, fixed on desktop */}
        <Box
          position="fixed"
          top="0"
          left="0"
          w={{ base: "100%", md: "20rem" }}
          h="100vh"
          bg="#1a1a1a"
          display={{ base: "none", md: "block" }}
          zIndex="999"
        >
          <Sidebar />
        </Box>

        {/* Main Content Section */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          ml={{ base: 0, md: "20rem" }} // Offset content on desktop for the sidebar
        >
          {/* Fixed Navbar for desktop */}
          <Box
            position="fixed"
            top="0"
            left={{ base: 0, md: "20rem" }}
            right="0"
            zIndex="999"
            display={{ base: "none", lg: "block" }}
            bg="#121212"
            boxShadow="md"
            width="100%" // Ensure navbar spans the full width
          >
            <Navbar />
          </Box>

          {/* Hamburger Icon (Only visible on mobile) */}
          <Box
            display={{ base: "block", lg: "none" }} // Show only on mobile
            position="fixed"
            top="1rem"
            left="1rem"
            zIndex="999"
          >
            <IconButton
              aria-label="Open Sidebar"
              icon={<HamburgerIcon />}
              onClick={toggleSidebar}
              bg="transparent"
              color="white"
              _hover={{ bg: "transparent" }}
            />
          </Box>

          {/* Content with top padding to avoid overlap with fixed navbar */}
          <Box
            mt={{ base: 0, lg: "4rem" }}
            px={{ base: 4, md: 6 }}
            py={4}
            flex="1"
            pb={{ base: "6rem", lg: "4rem" }} // prevents bottom overlap with mobile navbar
            overflowY="auto"
            zIndex="1" // Make sure content is not hidden behind sidebar/navbar
          >
            {children}
          </Box>

          {/* Bottom navbar for mobile */}
          <Box
            position="fixed"
            bottom="0"
            left="0"
            width={{ base: "90%", md: "100%" }} // Decrease width for mobile (90%)
            marginLeft="auto" // Center it
            marginRight="auto" // Center it
            display={{ base: "flex", lg: "none" }}
            bg="#121212"
            justifyContent="center"
            py="1.5rem"
            boxShadow="0 -2px 10px rgba(0,0,0,0.4)"
            zIndex="999"
          >
            <Navbar />
          </Box>
        </Box>

        {/* Mobile Sidebar (Appears when hamburger is clicked) */}
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100vh"
          bg="#1a1a1a"
          zIndex="998"
          display={{ base: isSidebarOpen ? "block" : "none", lg: "none" }} // Only visible when isSidebarOpen is true
          transition="all 0.3s ease"
        >
          <Sidebar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
