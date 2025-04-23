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
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box
      p="6"
      height={{ base: "80vh", md: "100vh" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgGradient="linear(to-b, #2c3e50, #34495e)" // Gradient background
      color="white"
      borderRadius="lg" // Rounded corners
      boxShadow="xl" // Add shadow for depth
    >
      {/* Developer Info Card */}
      <VStack spacing="4" alignItems="center" textAlign="center">
        <Avatar size="2xl" name="" src="../profile.png" border="4px solid #ecf0f1" />
        <Box>
          <Text fontSize="3xl" fontWeight="bold" color="white">
            Debasmita Sarkar
          </Text>
          <Text fontSize="md" color="gray.300">
            Full Stack Developer
          </Text>
        </Box>
        <HStack spacing="4" mt="2">
          <Link href="https://github.com/Dsmita03" isExternal>
            <IconButton
              aria-label="Github"
              icon={<FaGithub />}
              size="lg"
              fontSize={"2xl"}
              bg="transparent"
              color="white"
              _hover={{ bg: "gray.700" }}
              isRound
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/debasmita-s-b47289254?"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              fontSize={"2xl"}
              bg="transparent"
              color="white"
              _hover={{ bg: "gray.700" }}
              isRound
            />
          </Link>
          <Link href="https://twitter.com/dsmita_03" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaXTwitter />}
              size="lg"
              bg="transparent"
              color="white"
              fontSize={"2xl"}
              _hover={{ bg: "gray.700" }}
              isRound
            />
          </Link>
          <Link href="https://leetcode.com/u/debasmita_sarkar03/" isExternal>
            <IconButton
              aria-label="Leetcode"
              icon={<SiLeetcode />}
              size="lg"
              bg="transparent"
              color="white"
              fontSize={"2xl"}
              _hover={{ bg: "gray.700" }}
              isRound
            />
          </Link>
        </HStack>
        {/* Contact Info */}
        <Box pt="5">
          <HStack>
            <Icon as={MdEmail} fontSize={"20px"} color="#28969c" />
            <Text fontSize={"16px"} color="gray.200">debasmita.s003@gmail.com</Text>
          </HStack>
          <HStack pt="3">
            <Icon as={FaLocationDot} fontSize={"20px"} color="#28969c" />
            <Text fontSize={"16px"} color="gray.200">Kolkata, India</Text>
          </HStack>
        </Box>
        {/* Download Resume Button */}
        <Button
          as="a"
          href="https://drive.google.com/file/d/13Uutc1mE9LxBBURV2haI71gHNY1y_dkC/view?usp=sharing"
          download="Resume.pdf"
          mt="6"
          colorScheme="teal"
          variant="solid"
          size="lg"
          width="full"
          _hover={{ bg: "teal.600" }}
          boxShadow="md"
        >
          <Icon as={FaEye} fontSize="20px" mr={"2"} />
          View Resume
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
