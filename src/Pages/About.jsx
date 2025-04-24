import Layout from '../Components/Layout';
import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';

const About = () => {
  const bg = useColorModeValue('#121212', '#121212'); // Consistent dark background
  const textColor = useColorModeValue('white', 'white');
  const accentColor = '#28969c'; // Matching accent color

  const educationData = [
    {
      year: '2022-2026',
      degree: 'Bachelor of Technology (B.Tech)',
      location: 'Government College of Engineering and Ceramic Technology',
      grade: 'CGPA: 9.24',
      department: 'Information Technology',
    },
    {
      year: '2020-2022',
      degree: 'Higher Secondary (12th)',
      location: 'Pathfinder Higher Secondary Public School',
      grade: 'Grade: 92%',
      board: 'WBCHSE',
    },
    {
      year: '2020',
      degree: 'Secondary (10th)',
      location: "St. Joseph's English Medium School",
      grade: 'Grade: 91%',
      board: 'ICSE',
    },
  ];

  return (
    <Layout>
      <Box bg={bg} color={textColor} py={12} px={{ base: 4, md: 12 }} minH="100vh">
        <VStack spacing={12} align="start" maxW="1000px" mx="auto">
          {/* About Me Section */}
          <Box w="100%">
            <HStack spacing={4} mb={4} align="center">
              <Icon as={FiUser} boxSize={7} color={accentColor} />
              <Heading as="h2" size="lg" fontWeight="bold">
                About Me
              </Heading>
            </HStack>
            <Text fontSize="lg" lineHeight="1.8">
              Hello, I'm <b>Debasmita Sarkar</b>, a passionate and driven <b>Full-Stack Developer</b> and <b>aspiring Software Engineer</b>, currently pursuing my <b>B.Tech in Information Technology</b> at <b>GCECT</b> (Class of 2026). With a deep understanding of web development technologies like <b>React</b>, <b>Node.js</b>, <b>MongoDB</b>, and <b>Firebase</b>, I am dedicated to building intuitive, efficient, and scalable applications. I thrive on solving complex real-world problems with innovative solutions and constantly challenge myself to learn new technologies and frameworks. My journey is fueled by my curiosity to create a positive impact through technology.
            </Text>
          </Box>

          {/* Education Timeline */}
          <Box w="100%">
            <HStack spacing={4} mb={10} align="center">
              <Icon as={MdSchool} boxSize={7} color={accentColor} />
              <Heading as="h2" size="lg" fontWeight="bold">
                Education
              </Heading>
            </HStack>

            <Box position="relative" minH="100px">
              {/* Vertical timeline line */}
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

              <VStack spacing={14} align="stretch" position="relative" zIndex={1}>
                {educationData.map((edu, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent={isLeft ? 'flex-start' : 'flex-end'}
                      alignItems="center"
                      position="relative"
                    >
                      {/* Arrow pointing toward the box */}
                      <Box
                        position="absolute"
                        top="50%"
                        left={isLeft ? 'calc(50% - 6px)' : undefined}
                        right={!isLeft ? 'calc(50% - 6px)' : undefined}
                        width="0"
                        height="0"
                        borderTop="8px solid transparent"
                        borderBottom="8px solid transparent"
                        borderRight={isLeft ? `12px solid ${accentColor}` : undefined}
                        borderLeft={!isLeft ? `12px solid ${accentColor}` : undefined}
                        transform="translateY(-50%)"
                        zIndex={1}
                        display={{ base: 'none', md: 'block' }} // Hide on mobile devices
                      />

                      {/* Dot - Hidden on mobile */}
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="20px"
                        h="20px"
                        bg={accentColor}
                        borderRadius="full"
                        zIndex={2}
                        display={{ base: 'none', md: 'block' }} // Hide on mobile devices
                      />

                      {/* Education Card */}
                      <Box
                        bg="#1E1E1E"
                        borderRadius="lg"
                        border={`1px solid ${accentColor}`}
                        p={6}
                        width={{ base: '100%', md: '45%' }}
                        _hover={{
                          transform: 'scale(1.05)',
                          transition: '0.3s ease',
                          boxShadow: `0 0 10px 2px ${accentColor}`,
                        }}
                        _active={{
                          transform: 'scale(1.03)',
                        }}
                      >
                        <Text fontSize="sm" color="gray.400">
                          {edu.year}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold" color={accentColor}>
                          {edu.degree}
                        </Text>
                        <Text fontSize="md" fontWeight="semibold" color="white">
                          {edu.location}
                        </Text>
                        <Text fontSize="sm" fontWeight="bold" color="gray.300">
                          {edu.grade}
                        </Text>
                        {edu.department && (
                          <Text fontSize="sm" color="gray.400" fontStyle="italic">
                            Department: {edu.department}
                          </Text>
                        )}
                        {edu.board && (
                          <Text fontSize="sm" color="gray.400">
                            Board: {edu.board}
                          </Text>
                        )}
                      </Box>
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
