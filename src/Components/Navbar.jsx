import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaEnvelope
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", icon: FaUser, label: "About Me" },
  { to: "/skills", icon: FaGraduationCap, label: "Skills" },
  { to: "/projects", icon: FaLaptopCode, label: "Projects" },
  { to: "/contact", icon: FaEnvelope, label: "Contact Me" },
];

const Navbar = () => {
  const iconSize = useBreakpointValue({ base: "md", md: "lg" });
  const location = useLocation();
  // const bgColor = useColorModeValue("whiteAlpha.700", "blackAlpha.400");
  const inactiveColor = useColorModeValue("gray.600", "gray.400");
  const activeBg = useColorModeValue("teal.100", "teal.700"); 
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");
  const activeColor = useColorModeValue("teal.600", "teal.300");

  return (
    <Box
      width="100%"
      position="sticky"
      top="0"
      zIndex="1000"
      backdropFilter="saturate(180%) blur(10px)"
      bg={bgColor}
      boxShadow="md"
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
        gap={{ base: 3, md: 6 }}
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
              fontSize="14px"
              p="2"
              borderRadius="md"
            >
              <Link to={to}>
               <IconButton
             aria-label={label}
              icon={<Icon />}
            variant="ghost"
            color={isActive ? activeColor : inactiveColor}
            bg={isActive ? activeBg : "transparent"}
            _hover={{
             bg: activeBg,
              color: activeColor,
              transform: "scale(1.1)",
              transition: "all 0.3s ease",
            }}
            size={iconSize}
            isRound
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
