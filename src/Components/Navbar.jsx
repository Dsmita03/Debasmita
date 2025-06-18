import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon as ChakraIcon } from "@chakra-ui/react";
import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", icon: FaUser, label: "About Me" },
  { to: "/skills", icon: FaGraduationCap, label: "Skills" },
  { to: "/projects", icon: FaLaptopCode, label: "Projects" },
  { to: "/contact", icon: FaEnvelope, label: "Contact Me" },
];

const Navbar = () => {
  const location = useLocation();
  const iconSize = useBreakpointValue({ base: "20px", md: "24px" });
  const inactiveColor = useColorModeValue("gray.600", "gray.400");
  const activeColor = useColorModeValue("teal.600", "teal.300");
  const activeBg = useColorModeValue("teal.100", "teal.700");
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");

  return (
    <Box
      width="100%"
      position="sticky"
      top="0"
      zIndex="1000"
      backdropFilter="saturate(180%) blur(10px)"
      bg={bgColor}
      boxShadow="sm"
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        py="3"
        px={{ base: 5, md: 10 }}
        justify="center"
        align="center"
        wrap="wrap"
        gap={{ base: 4, md: 8 }}
      >
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Tooltip
              key={to}
              label={label}
              hasArrow
              bg="gray.700"
              color="white"
              placement="bottom"
              fontSize="sm"
              p="2"
              borderRadius="md"
              openDelay={150}
            >
              <Link to={to}>
                <IconButton
                  aria-label={label}
                  icon={<ChakraIcon as={Icon} boxSize={iconSize} />}
                  variant="ghost"
                  color={isActive ? activeColor : inactiveColor}
                  bg={isActive ? activeBg : "transparent"}
                  size="lg"
                  isRound
                  transition="all 0.25s ease"
                  _hover={{
                    bg: activeBg,
                    color: activeColor,
                    transform: "scale(1.12)",
                  }}
                  boxShadow={isActive ? "0 0 8px rgba(0, 128, 128, 0.4)" : "none"}
                />
              </Link>
            </Tooltip>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Navbar;
