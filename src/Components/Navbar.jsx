 
import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaEnvelope
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const iconSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      mt="4"
      bgGradient="linear(to-r, teal.400, pink.500)" // Gradient background for visual pop
      py="2"
      boxShadow="lg"
      zIndex="1000"
    >
      <Box
        px={{ base: "5", md: "10" }}
        py="3"
        width="100%"
        maxWidth="1200px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex justify="space-between" align="center">
          {/* About Me Icon */}
          <Tooltip
            label="About Me"
            aria-label="About Me"
            bg="gray.700"
            color="white"
            fontSize="14px"
            borderRadius="md"
            p="2"
            hasArrow
            placement="bottom"
          >
            <Link to="/">
              <IconButton
                aria-label="About Me"
                icon={<FaUser />}
                bg="transparent"
                color="white"
                _hover={{
                  bg: "whiteAlpha.800", // White hover background for better contrast
                  color: "teal.500",    // Icon color changes to teal
                  transform: "scale(1.1)", // Smooth scaling effect
                  transition: "all 0.3s ease", // Animation on hover
                }}
                size={iconSize}
                isRound
              />
            </Link>
          </Tooltip>

          {/* Skills Icon */}
          <Tooltip
            label="Skills"
            aria-label="Skills"
            bg="gray.700"
            color="white"
            fontSize="14px"
            borderRadius="md"
            p="2"
            hasArrow
            placement="bottom"
          >
            <Link to="/skills">
              <IconButton
                aria-label="Skills"
                icon={<FaGraduationCap />}
                bg="transparent"
                color="white"
                _hover={{
                  bg: "whiteAlpha.800",
                  color: "teal.500",
                  transform: "scale(1.1)",
                }}
                size={iconSize}
                isRound
                ml="5"
              />
            </Link>
          </Tooltip>

          {/* Projects Icon */}
          <Tooltip
            label="Projects"
            aria-label="Projects"
            bg="gray.700"
            color="white"
            fontSize="14px"
            borderRadius="md"
            p="2"
            hasArrow
            placement="bottom"
          >
            <Link to="/projects">
              <IconButton
                aria-label="Projects"
                icon={<FaLaptopCode />}
                bg="transparent"
                color="white"
                _hover={{
                  bg: "whiteAlpha.800",
                  color: "teal.500",
                  transform: "scale(1.1)",
                }}
                size={iconSize}
                isRound
                ml="5"
              />
            </Link>
          </Tooltip>

          {/* Contact Icon */}
          <Tooltip
            label="Contact Me"
            aria-label="Contact Me"
            bg="gray.700"
            color="white"
            fontSize="14px"
            borderRadius="md"
            p="2"
            hasArrow
            placement="bottom"
          >
            <Link to="/contact">
              <IconButton
                aria-label="Contact Me"
                icon={<FaEnvelope />}
                bg="transparent"
                color="white"
                _hover={{
                  bg: "whiteAlpha.800",
                  color: "teal.500",
                  transform: "scale(1.1)",
                }}
                size={iconSize}
                isRound
                ml="5"
              />
            </Link>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
