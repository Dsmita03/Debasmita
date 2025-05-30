import Layout from '../Components/Layout';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
  Divider,
  Grid,
  GridItem,
  Image,
  Stack,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'AgriTech-Hub',
      imageUrl: '/AgriTech.png',
      description:
        'AgriTech-Hub – An intelligent agriculture platform integrating real-time data for smart crop recommendations, weather updates, plant disease detection, and government scheme insights. Built with React, Node.js, and AI-powered analysis to empower farmers with data-driven decisions.',
      liveLink: 'https://agritech-hub-frontend.onrender.com/',
      githubLink: 'https://github.com/Dsmita03/AgriTech-Hub',
    },
    {
      name: 'AlgoScope',
      imageUrl: '/algo.png',
      description:
        'AlgoScope is a web-based tool built with Next.js and TypeScript, designed to help users visualize and analyze sorting algorithms.',
      liveLink: 'https://algo-scope.vercel.app',
      githubLink: 'https://github.com/Dsmita03/AlgoScope',
    },
  {
      name: 'EduStack',
      imageUrl: '/edu.png',
      description:'A MERN-based web app for browsing and managing educational courses. Built with React, Node.js, Express, and MongoDB, it serves as a foundation for scalable e-learning platforms.',
      // liveLink: 'https://algo-scope.vercel.app',
      githubLink: 'https://github.com/Dsmita03/EduStack',
    },    
   {
      name: 'RealTimeChatApp',
      imageUrl: '/real.png',
      description: 'A real-time chat application built with Socket.io, Node.js, Express, and React. It enables instant messaging between users with live updates and a clean UI for seamless communication.',
      // liveLink: 'https://algo-scope.vercel.app',
      githubLink: 'https://github.com/Dsmita03/RealTimeChat',
    },    
{
      name: 'CryptoWeather-Nexus',
      imageUrl: '/crypto.png',
      description:
        'CryptoWeather Nexus is a modern dashboard integrating weather data, cryptocurrency information, and real-time notifications via WebSocket',
      // liveLink: 'https://algo-scope.vercel.app',
      githubLink: 'https://github.com/Dsmita03/CryptoWeather-Nexus',
    },    
{
      name: 'AI-Powered-Resume-Analyzer',
      imageUrl: '/res.png',
      description:
        'A web application that uses Gemini AI and NLP to analyze uploaded resumes, offering intelligent suggestions on skills, formatting, and content to enhance job application success. ',
      // liveLink: 'https://algo-scope.vercel.app',
      githubLink: 'https://github.com/Dsmita03/AI-Powered-Resume-Analyzer',
    },    

    {
      name: 'Snapgram',
      imageUrl: '/snapgram.png',
      description:
        'Snapgram is a dynamic web application inspired by Instagram, designed to streamline development processes and deliver engaging user experiences.',
      liveLink: 'https://snapgram-gamma-fawn.vercel.app',
      githubLink: 'https://github.com/Dsmita03/Snapgram',
    },
    {
      name: 'FlipkartClone',
      imageUrl: '/flipkart.png',
      description:
        'A full-stack e-commerce web application inspired by Flipkart, built using the MERN stack.',
      liveLink: '',
      githubLink: 'https://github.com/Dsmita03/Flipkart-clone',
    },
    {
      name: 'Tourly.com',
      imageUrl: '/Tourly.png',
      description: 'TravelWebsite using Html,css,javascript.',
      liveLink: 'https://tourly-com.vercel.app',
      githubLink: 'https://github.com/Dsmita03/Tourly.com',
    },
  ];

  return (
    <Layout>
      <Box
        bg="#121212"
        color="#FFFFFF"
        py={{ base: '0', md: '10' }}
        px={5}
        borderRadius="15"
        m="4"
      >
        <VStack spacing={5} align="start" maxW="1000px" mx="auto">
          <Box>
            <HStack gap="3" alignItems="center" mb="5">
              <Icon as={FaGithub} fontSize="30px" color="#28969c" />
              <Heading as="h1" size="xl" fontWeight="bold">
                Projects
              </Heading>
            </HStack>
            <Text fontSize="lg" mb={5}>
              Here’s a showcase of the projects I’ve developed.
            </Text>
          </Box>

          <Divider orientation="horizontal" borderColor="#333333" />

          <Grid
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={6}
            width="100%"
          >
            {projects.map((project, index) => (
              <GridItem
                key={index}
                bg="#1E1E1E"
                p={5}
                borderRadius="md"
                boxShadow="md"
                display="flex"
                flexDirection="column"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
                transition="all 0.3s ease"
              >
                <VStack
                  align="start"
                  spacing={4}
                  height="100%"
                  justifyContent="space-between"
                >
                  <Heading as="h3" size="md" fontWeight="semibold" color="teal.400">
                    {project.name}
                  </Heading>

                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                    height="150px"
                    mb={4}
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />

                  <Text color="gray.300" fontSize="sm">
                    {project.description}
                  </Text>

                  {/* Equal size buttons with responsive layout */}
                  <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={3}
                    mt="auto"
                    width="100%"
                  >
                    {project.liveLink && (
                      <Box flex="1">
                        <Button
                          width="100%"
                          py={4}
                          colorScheme="blue"
                          as="a"
                          href={project.liveLink}
                          target="_blank"
                          leftIcon={<FaExternalLinkAlt />}
                          borderRadius="md"
                          boxShadow="md"
                          _hover={{ bg: 'blue.600', boxShadow: 'lg' }}
                        >
                          Live Demo
                        </Button>
                      </Box>
                    )}
                    <Box flex="1">
                      <Button
                        width="100%"
                        py={4}
                        colorScheme="gray"
                        as="a"
                        href={project.githubLink}
                        target="_blank"
                        leftIcon={<FaGithub />}
                        borderRadius="md"
                        boxShadow="md"
                        _hover={{ bg: 'gray.600', boxShadow: 'lg' }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </Stack>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Projects;
