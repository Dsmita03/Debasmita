import React from 'react'
import Layout from '../Components/Layout'
import { Box, Heading, Text, VStack, Button, HStack, Link, Icon, Divider, Grid,GridItem,Image } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "AlgoScope",
      imageUrl: "/algo.png",
      description: "AlgoScope is a web-based tool built with Next.js and TypeScript, designed to help users visualize and analyze sorting algorithms",
      liveLink: "https://algo-scope.vercel.app",
      githubLink: "https://github.com/Dsmita03/AlgoScope"
    },
    {
      name: "Snapgram",
      imageUrl: "/snapgram.png",
      description: "Snapgram is a dynamic web application inspired by Instagram, designed to streamline development processes and deliver engaging user experiences",
      liveLink: "https://snapgram-gamma-fawn.vercel.app",
      githubLink: "https://github.com/Dsmita03/Snapgram"
    },
    // Add more projects here...
    {
      name: "FlipkartClone",
      imageUrl: "/flipkart.png",
      description: "A full-stack e-commerce web application inspired by Flipkart, built using the MERN stack",
      liveLink: "",
      githubLink: "https://github.com/Dsmita03/Flipkart-clone"
    },
    {
      name: "Tourly.com",
      imageUrl: "/Tourly.png",
      description: "TravelWebsite using Html,css,javascript",
      liveLink: "https://tourly-com.vercel.app",
      githubLink: "https://github.com/Dsmita03/Tourly.com"
    },
  ];
  
  return (
    <Layout>
    <Box 
      bg="#121212"  // Dark background
      color="#FFFFFF"  // White text
      py={{base:"0",md:"10"}} 
      px={5} 
      borderRadius="15" 
      m="4"
    >
      <VStack spacing={5} align="start" maxW="1000px" mx="auto">
        <Box>
          <HStack gap="3" alignItems="center" mb="5">
            <Icon as={FaGithub} fontSize="30px" color="#28969c" />  {/* Accent color */}
            <Heading as="h1" size="xl">
              Projects
            </Heading>
          </HStack>
          <Text fontSize="lg" mb={5}>
          Here’s a showcase of the projects I’ve developed.

          </Text>
        </Box>
  
        <Divider orientation="horizontal" borderColor="#333333" />  {/* Darker divider */}
  
        <Grid 
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))" 
          gap={6} 
          width="100%"
        >
          {projects.map((project, index) => (
            <GridItem
              key={index}
              bg="#1E1E1E"  // Dark gray background for each card
              p={5}
              borderRadius="md"
              boxShadow="md"
              display="flex"
              flexDirection="column"
            >
              <VStack 
                align="start" 
                spacing={4} 
                height="100%" 
                justifyContent="space-between"
              >
                {/* Project Heading */}
                <Heading as="h3" size="md">{project.name}</Heading>
  
                {/* Project Image with fixed height */}
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  borderRadius="md"
                  objectFit="cover"
                  width="100%"
                  height="150px"  // Set a fixed height for images
                />
  
                {/* Project Description */}
                <Text>{project.description}</Text>
  
                {/* Buttons aligned at the bottom */}
                <HStack spacing={4} mt="auto">
                  <Button colorScheme="blue" as="a" href={project.liveLink} target="_blank">
                    Go Live
                  </Button>
                  <Button colorScheme="gray" as="a" href={project.githubLink} target="_blank">
                    GitHub
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  </Layout>
  
  )
}



export default Projects