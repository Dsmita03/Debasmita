import Layout from '../Components/Layout';
import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  HStack,
  Badge,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
  const bg = useColorModeValue('#121212', '#121212');
  const textColor = useColorModeValue('white', 'white');
  const accentColor = '#28969c';
  const isMobile = useBreakpointValue({ base: true, md: false });

  const educationData = [
    {
      year: '2022–2026',
      degree: 'Bachelor of Technology (B.Tech)',
      emoji: '🎓',
      location: 'GCECT, Kolkata',
      grade: 'CGPA: 9.24',
      department: 'Information Technology',
    },
    {
      year: '2020–2022',
      degree: 'Higher Secondary (12th)',
      emoji: '🏫',
      location: 'Pathfinder H.S. Public School',
      grade: '92%',
      board: 'WBCHSE',
    },
    {
      year: '2020',
      degree: 'Secondary (10th)',
      emoji: '🏫',
      location: "St. Joseph's English Medium School",
      grade: '91%',
      board: 'ICSE',
    },
  ];

  return (
    <Layout>
      <Box bg={bg} color={textColor} py={12} px={{ base: 4, md: 12 }} minH="100vh">
        <VStack spacing={16} align="start" maxW="1000px" mx="auto">

          {/* About Me Section */}
          <MotionBox
            w="100%"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <HStack spacing={3} mb={4} align="center">
              <Icon as={FiUser} boxSize={6} color={accentColor} />
              <Heading
                size="lg"
                fontWeight="extrabold"
                bgGradient={`linear(to-r, ${accentColor}, teal.300)`}
                bgClip="text"
              >
                About Me
              </Heading>
            </HStack>
            <Text fontSize="lg" lineHeight="1.9" opacity={0.95}>
           Hello! I’m <b>Debasmita Sarkar</b> — a passionate technophile and lifelong learner driven by curiosity and creativity. As a <b>B.Tech student in Information Technology</b> at <b>GCECT, Kolkata</b>, I find joy in transforming complex ideas into elegant, user-friendly digital experiences. Whether I’m designing responsive <b>React</b> interfaces or building robust <b>Node.js</b> backends, I love crafting full-stack solutions that are both functional and delightful. With every project, I aim not just to code — but to create with purpose. 🚀
          </Text>
          </MotionBox>

          {/* Education Section */}
          <Box w="100%">
            <HStack spacing={3} mb={6} align="center">
              <Icon as={MdSchool} boxSize={6} color={accentColor} />
              <Heading
                size="lg"
                fontWeight="extrabold"
                bgGradient={`linear(to-r, ${accentColor}, cyan.400)`}
                bgClip="text"
              >
                Education Journey
              </Heading>
            </HStack>

            <Box position="relative" py={4}>
              {!isMobile && (
                <Box
                  position="absolute"
                  left="50%"
                  top="0"
                  bottom="0"
                  width="2px"
                  bg={accentColor}
                  transform="translateX(-50%)"
                  zIndex={0}
                />
              )}

              <VStack spacing={12} position="relative" zIndex={1}>
                {educationData.map((edu, index) => {
                  const isLeft = index % 2 === 0;
                  const align = isMobile ? 'center' : isLeft ? 'flex-start' : 'flex-end';

                  return (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent={align}
                      w="100%"
                      px={{ base: 0, md: 4 }}
                    >
                      <MotionBox
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        bg="linear-gradient(135deg, #1E1E1E, #252525)"
                        borderRadius="xl"
                        border={`1px solid ${accentColor}`}
                        p={6}
                        width={{ base: '100%', md: '45%' }}
                        textAlign="left"
                        position="relative"
                        boxShadow={`0 0 18px -2px ${accentColor}55`}
                        _hover={{
                          transform: 'translateY(-4px) scale(1.02)',
                          transition: '0.3s ease',
                          boxShadow: `0 0 20px 1px ${accentColor}`,
                        }}
                      >
                        {/* Timeline dot */}
                        {!isMobile && (
                          <Box
                            position="absolute"
                            top="50%"
                            left={isLeft ? 'auto' : '-12px'}
                            right={isLeft ? '-12px' : 'auto'}
                            transform="translateY(-50%)"
                            w="24px"
                            h="24px"
                            bg={accentColor}
                            border="3px solid #121212"
                            borderRadius="full"
                            zIndex={2}
                          />
                        )}

                        <Text fontSize="sm" color="gray.400" mb={1}>
                          {edu.year}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold" color={accentColor} mb={1}>
                          {edu.emoji} {edu.degree}
                        </Text>
                        <Text fontSize="md" fontWeight="semibold">
                          {edu.location}
                        </Text>
                       <Badge
                     fontSize="0.8em"
                     mt={2}
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg={accentColor}
                      color="black"
                      fontWeight="bold"
                      boxShadow={`0 0 10px ${accentColor}`}>
                      {edu.grade}
                     </Badge>
                       {edu.department && (
                          <Text fontSize="sm" color="gray.400" mt={2}>
                            Dept: {edu.department}
                          </Text>
                        )}
                        {edu.board && (
                          <Text fontSize="sm" color="gray.400">
                            Board: {edu.board}
                          </Text>
                        )}
                      </MotionBox>
                    </Box>
                  );
                })}
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
};

export default About;
