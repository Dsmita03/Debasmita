import {
  Box,
  Avatar,
  Text,
  VStack,
  IconButton,
  Link,
  Button,
  HStack,
  Icon,

} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEye } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <Box
      p={6}
      height={{ base: "auto", md: "100vh" }}
      w="full"
      bgGradient="linear(to-b, #1e3c72, #2a5298)"
      color="white"
      borderRadius={{ base: "none", md: "xl" }}
      boxShadow="2xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6} textAlign="center">
        {/* Profile Image */}
        <Avatar
          size="2xl"
          name="Debasmita Sarkar"
          src="../profile.png"
          border="3px solid #00CED1"
          boxShadow="0 0 20px rgba(0,206,209,0.5)"
        />
        {/* Name & Title */}
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            Debasmita Sarkar
          </Text>
          <Text fontSize="md" color="gray.300">
            Full Stack Developer
          </Text>
        </Box>
        {/* Social Icons */}
        <HStack spacing={4}>
          {[
            {
              href: "https://github.com/Dsmita03",
              icon: FaGithub,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/debasmita-s-b47289254?",
              icon: FaLinkedin,
              label: "LinkedIn",
            },
            {
              href: "https://twitter.com/dsmita_03",
              icon: FaXTwitter,
              label: "Twitter",
            },
            {
              href: "https://leetcode.com/u/debasmita_sarkar03/",
              icon: SiLeetcode,
              label: "LeetCode",
            },
          ].map(({ href, icon, label }) => (
            <Link key={label} href={href} isExternal>
              <IconButton
                aria-label={label}
                icon={<Icon as={icon} />}
                size="lg"
                bg="whiteAlpha.100"
                color="white"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "scale(1.1)",
                }}
                isRound
              />
            </Link>
          ))}
        </HStack>
        {/* Contact Info */}
        <VStack spacing={2} pt={4}>
          <HStack>
            <Icon as={MdEmail} color="teal.200" />
            <Text fontSize="sm" color="gray.200">
              debasmita.s003@gmail.com
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaLocationDot} color="teal.200" />
            <Text fontSize="sm" color="gray.200">
              Kolkata, India
            </Text>
          </HStack>
        </VStack>
        {/* Resume Button */}
        <Button
          as="a"
          href="https://drive.google.com/file/d/13HOjKuGFLF2JUm841C9CIQRCfveuHK8P/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          mt={6}
          colorScheme="teal"
          variant="solid"
          size="lg"
          leftIcon={<FaEye />}
          w="full"
          boxShadow="lg"
          _hover={{ bg: "teal.500", transform: "scale(1.02)" }}
        >
          View Resume
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
