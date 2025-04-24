import { Box, Flex, IconButton } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box bg="#121212" color="white" minH="100vh">
      <Flex direction={{ base: "column", md: "row" }} h="100%">
        {/* Sidebar - Desktop only */}
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

        {/* Main content wrapper */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          ml={{ base: 0, md: "20rem" }}
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

          {/* Hamburger menu for mobile */}
          <Box
            display={{ base: "block", lg: "none" }}
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

          {/* Main Content */}
          <Box
            mt={{ base: 0, lg: "4rem" }}
            px={{ base: 4, md: 6 }}
            py={4}
            flex="1"
            pb={{ base: "8rem", lg: "4rem" }} // Increased bottom padding for mobile to avoid hiding last content
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

          {/* Mobile Sidebar */}
          <Box
            position="fixed"
            top="0"
            left="0"
            w="100%"
            h="calc(100vh - 6rem)" // 6rem is the height of the mobile bottom navbar
            bg="#1a1a1a"
            zIndex="998"
            display={{ base: isSidebarOpen ? "block" : "none", lg: "none" }}
            transition="all 0.3s ease"
            borderRadius="0" // ✅ Ensures no rounded edges
            overflow="hidden" // ✅ Ensures no overflow visuals
          >
            <Sidebar />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
