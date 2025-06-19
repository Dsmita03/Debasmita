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
  Input,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionGridItem = motion(GridItem);

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      name: 'AgriTech-Hub',
      imageUrl: '/AgriTech.png',
      description: 'Smart agriculture platform with crop recommendations, weather, and disease detection.',
      tags: ['React', 'Node.js', 'AI'],
      liveLink: 'https://agritech-hub-fe.onrender.com/',
      githubLink: 'https://github.com/Dsmita03/AgriTech-Hub',
    },
    {
      name: 'AlgoScope',
      imageUrl: '/algo.png',
      description: 'Visualize sorting algorithms using Next.js and TypeScript.',
      tags: ['Next.js', 'TypeScript'],
      liveLink: 'https://algo-scope.vercel.app',
      githubLink: 'https://github.com/Dsmita03/AlgoScope',
    },
    {
      name: 'CanvasCraft',
      imageUrl: '/canvaCraft.png',
      description: 'Excalidraw-style sketch tool built with React and Rough.js.',
      tags: ['React', 'TypeScript'],
      liveLink: 'https://canvas-craft-xi.vercel.app/',
      githubLink: 'https://github.com/Dsmita03/CanvasCraft',
    },
    {
      name: 'EduStack',
      imageUrl: '/edu.png',
      description: 'E-learning platform built on MERN stack for managing courses.',
      tags: ['MERN', 'MongoDB', 'Node.js'],
      liveLink: 'https://edustack-fe.onrender.com',
      githubLink: 'https://github.com/Dsmita03/EduStack',
    },
    {
      name: 'RealTimeChatApp',
      imageUrl: '/real.png',
      description: 'Live chat app with Socket.io and MERN, supporting real-time messaging.',
      tags: ['Socket.io', 'MERN'],
      githubLink: 'https://github.com/Dsmita03/RealTimeChat',
    },
    {
      name: 'CryptoWeather-Nexus',
      imageUrl: '/crypto.png',
      description: 'Weather + crypto dashboard with WebSocket alerts.',
      tags: ['WebSocket', 'Dashboard'],
      githubLink: 'https://github.com/Dsmita03/CryptoWeather-Nexus',
    },
    {
      name: 'AI-Powered-Resume-Analyzer',
      imageUrl: '/res.png',
      description: 'Gemini AI + NLP-powered resume analysis with smart suggestions.',
      tags: ['AI', 'Gemini', 'NLP'],
      githubLink: 'https://github.com/Dsmita03/AI-Powered-Resume-Analyzer',
    },
    {
      name: 'Snapgram',
      imageUrl: '/snapgram.png',
      description: 'Instagram-inspired social platform built with modern frontend stack.',
      tags: ['Social', 'Frontend'],
      liveLink: 'https://snapgram-gamma-fawn.vercel.app',
      githubLink: 'https://github.com/Dsmita03/Snapgram',
    },
    {
      name: 'FlipkartClone',
      imageUrl: '/flipkart.png',
      description: 'Full-stack Flipkart-style e-commerce app using MERN.',
      tags: ['MERN', 'E-commerce'],
      githubLink: 'https://github.com/Dsmita03/Flipkart-clone',
    },
    {
      name: 'Tourly.com',
      imageUrl: '/Tourly.png',
      description: 'Static travel website using HTML, CSS, and JavaScript.',
      tags: ['Static', 'HTML', 'JavaScript'],
      liveLink: 'https://tourly-com.vercel.app',
      githubLink: 'https://github.com/Dsmita03/Tourly.com',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const content = `${project.name} ${project.description} ${project.tags?.join(' ')}`.toLowerCase();
    return content.includes(searchQuery.toLowerCase());
  });

  return (
    <Layout>
      <Box py={10} px={{ base: 4, md: 10 }} bg="#121212" color="white" borderRadius="2xl" m={4}>
        <VStack spacing={6} maxW="1280px" mx="auto" align="start">
          <HStack spacing={3}>
            <Icon as={FaGithub} fontSize="28px" color="#28969c" />
            <Heading size="2xl" fontWeight="bold" color="#00d8a7">
              My Projects
            </Heading>
          </HStack>

          <Text fontSize="md" color="gray.400">
            A curated list of projects across web, AI, and real-time apps.
          </Text>

          <Input
            placeholder="Search by name, tech, or description..."
            size="md"
            bg="#1e1e1e"
            border="1.5px solid #28969c"
            borderRadius="md"
            px={4}
            py={3}
            color="white"
            _placeholder={{ color: 'gray.400' }}
            _focus={{ borderColor: '#28969c', boxShadow: '0 0 0 1px #28969c' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Divider borderColor="#222" />

          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={6}
            w="100%"
          >
            {filteredProjects.map((project, index) => (
              <MotionGridItem
                key={index}
                bg="#1e1e1e"
                border="1px solid #333"
                borderRadius="xl"
                p={4}
                display="flex"
                flexDirection="column"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: '#28969c' }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  borderRadius="lg"
                  objectFit="cover"
                  height="160px"
                  mb={4}
                />

                <Heading size="md" color="#00d8a7" mb={2}>
                  {project.name}
                </Heading>

                <Text color="gray.400" fontSize="sm" mb={2} flexGrow={1}>
                  {project.description}
                </Text>

                <HStack wrap="wrap" spacing={2} mb={3}>
                  {project.tags?.map((tag, i) => (
                    <Box
                      key={i}
                      fontSize="xs"
                      px={2}
                      py={0.5}
                      bg="gray.700"
                      borderRadius="md"
                      color="#00d8a7"
                    >
                      {tag}
                    </Box>
                  ))}
                </HStack>

                <Stack direction={{ base: 'column', md: 'row' }} spacing={3} mt="auto">
                  {project.liveLink && (
                    <Button
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      leftIcon={<FaExternalLinkAlt />}
                      size="sm"
                      bg="#28969c"
                      color="white"
                      _hover={{ bg: '#1ea3a0' }}
                      w="full"
                    >
                      Live
                    </Button>
                  )}
                  <Button
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    leftIcon={<FaGithub />}
                    size="sm"
                    variant="outline"
                    borderColor="gray.600"
                    color="gray.300"
                    _hover={{ bg: 'gray.700' }}
                    w="full"
                  >
                    GitHub
                  </Button>
                </Stack>
              </MotionGridItem>
            ))}
          </Grid>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Projects;