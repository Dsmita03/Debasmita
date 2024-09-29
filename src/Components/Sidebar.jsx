import React from "react";
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
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GoDownload } from "react-icons/go";

const Sidebar = () => {
  return (
   <Box
    p="6"
    height={{base:"80vh", md:"100vh"}}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    bg="gray.800" // Dark background
    color="white" // Light text color
  >
    {/* Developer Info Card */}
    <VStack spacing="4" alignItems="center" textAlign="center">
      <Avatar size="2xl" name="" src="../profile.jpg" />
      <Box>
      <Text fontSize="2xl" fontWeight="bold">
        Debasmita Sarkar
      </Text>
      <Text fontSize="md" color="gray.400">
        Full Stack Developer
      </Text>
      </Box>
      <HStack spacing="3" mt="2">
        <Link href="https://github.com/Dsmita03" isExternal>
          <IconButton
            aria-label="Github"
            icon={<FaGithub />}
            size="lg"
            fontSize={"x-large"}
            bg="gray.700"
            color={"gray.300"}
            _hover={{ bg: "gray.600" }}
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
            fontSize={"x-large"}
            bg="gray.700"
            color={"gray.300"}
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </Link>
        <Link href="https://twitter.com/dsmita_03" isExternal>
          <IconButton
            aria-label="Twitter"
            icon={<FaXTwitter />}
            size="lg"
            bg="gray.700"
            color={"gray.300"}
            fontSize={"x-large"}
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </Link>
        <Link href="https://leetcode.com/u/debasmita_sarkar03/" isExternal>
          <IconButton
            aria-label="Leetcode"
            icon={<SiLeetcode />}
            size="lg"
            bg="gray.700"
            color={"gray.300"}
            fontSize={"x-large"}
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </Link>
      </HStack>
      {/* Contact Info */}
      <Box pt="5">
        <HStack>
          <Icon as={MdEmail} fontSize={"23px"} color="#28969c"/>
          <Text fontSize={"15px"}>debasmita12b@gmail.com</Text>
        </HStack>
        <HStack pt="3">
          <Icon as={FaLocationDot} fontSize={"23px"} color="#28969c" />
          <Text fontSize={"15px"}>Kolkata, India</Text>
        </HStack>
      </Box>
      {/* Download Resume Button */}
      <Button
        as="a"
         href="https://drive.google.com/file/d/1zf1oBJej06Iqsjo63W3bRCQ2gffB2UvH/view?usp=sharing"
        download="Resume.pdf"
        mt="6"
        colorScheme="blue"
        variant="solid"
        size="md"
        width="full"
      >
        <Icon as={GoDownload} fontSize="20px" mr={"2"} />
        Download Resume
      </Button>
    </VStack>
  </Box>
  );
};

export default Sidebar;
