import {
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaReact,
  FaCss3,
  FaJsSquare,
  FaPython,
  FaJava,
  FaNodeJs,
  FaServer,
  FaAngular,
  FaProjectDiagram,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiFirebase } from 'react-icons/si';
import Layout from '../Components/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue('#FFFFFF', '#FFFFFF');

  const technicalSkills = [
    { name: 'HTML', icon: FaCode },
    { name: 'CSS', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express', icon: FaServer },
    { name: 'MongoDB', icon: FaDatabase },
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'Python', icon: FaPython },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Java', icon: FaJava },
    { name: 'TypeScript', icon: FaCode },
    { name: 'Appwrite', icon: FaCloud },
    { name: 'Angular', icon: FaAngular },
    { name: 'Firebase', icon: SiFirebase },
  ];

  const csFundamentals = [
    { name: 'DBMS', icon: FaDatabase },
    { name: 'OOPS', icon: FaCode },
    { name: 'Operating System', icon: FaServer },
    { name: 'Computer Networks', icon: FaCloud },
    { name: 'Software Engineering', icon: FaProjectDiagram },
  ];

  const certifications = [
    { name: 'Google AI Essential', issuer: 'Google', url: '/GoogleAi.png' },
    { name: 'Open Source Contribution', issuer: 'GirlScript Summer Of Code', url: '/Debasmita Sarkar_Cert_Contributor_GSSoC2024.png' },
    { name: 'Google Solution Challenge 2024', issuer: 'Google', url: '/gogsoln.jpeg' },
    { name: 'Postman API Fundamental Student Expert', issuer: 'Postman', url: '/postman.jpeg' },
    { name: 'Developing Backend with Node.js & Express', issuer: 'IBM', url: '/back.png' },
    { name: 'Certificate of Achievement', issuer: 'TCS ion', url: '/Tcs y.png' },
    { name: 'Angular Course Certificate', issuer: 'Infosys', url: '/Angular.png' },
    { name: 'Foundation of UX Design Certificate', issuer: 'Google', url: '/design.png' },
    { name: 'Database & SQL Certificate', issuer: 'IBM', url: '/sql.png' },
    { name: 'Master Data Management for beginners', issuer: 'TCS ion', url: '/data.png' },
    { name: 'Email Writing', issuer: 'Infosys', url: '/EmailWriting.png' },
    { name: 'Foundation of Cybersecurity', issuer: 'Google', url: '/cybersecurity 1.png' },
    { name: 'Network and Network Security', issuer: 'Google', url: '/Cybersecurity2.png' },
    { name: 'Cloud Computing for Beginners', issuer: 'IBM SkillsBuild', url: '/IBM.png' },
    { name: 'Manage Security Risks', issuer: 'Google', url: '/Cybersecurity3.png' },
    { name: 'Typescript Course', issuer: 'Infosys', url: '/Typescript.png' },
    { name: 'GitHub Workshop', issuer: 'Industry Academia Community', url: '/github.png' },
    { name: 'JavaScript Completion', issuer: 'Infosys', url: '/javascript.png' },
    { name: 'Agile Scrum Practice', issuer: 'Infosys', url: '/Agile.png' },
    { name: 'Internship Preparation Workshop', issuer: 'Industry Academia Community', url: '/Internship preparation.png' },
    { name: 'Frontend Web-developer', issuer: 'Udemy', url: '/udemy.png' },
    { name: 'Canva Course Certificate', issuer: 'Coursera', url: '/Canva.png' },
  ];

  const filteredCertifications = certifications.filter((cert) =>
    cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (cert) => {
    setSelectedCert(cert);
    onOpen();
  };

  return (
    <Layout>
      <Box py={10} px={{ base: 4, md: 10 }} bg="#121212" color={textColor} borderRadius="2xl" m={4}>
        <Section title="Technical Skills">
          <Grid
            templateColumns={{ base: 'repeat(2, 120px)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }}
            gap={5}
          >
            {technicalSkills.map((skill, idx) => (
              <SkillCard key={idx} name={skill.name} icon={skill.icon} />
            ))}
          </Grid>
        </Section>

        <Section title="CS Fundamentals">
          <Grid
            templateColumns={{ base: 'repeat(2, 140px)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={5}
          >
            {csFundamentals.map((skill, idx) => (
              <SkillCard key={idx} name={skill.name} icon={skill.icon} />
            ))}
          </Grid>
        </Section>

        <Section title="Certifications">
          <Input
            placeholder="Search by name or issuer..."
            variant="unstyled"
            bg="#1e1e1e"
            border="1.5px solid #28969c"
            borderRadius="md"
            px={4}
            py={3}
            mb={6}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            color="white"
            _placeholder={{ color: 'gray.400' }}
            _focus={{ borderColor: '#28969c', boxShadow: '0 0 0 1px #28969c' }}
          />
          <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
            {filteredCertifications.map((cert, index) => (
              <CertificationCard
                key={index}
                name={cert.name}
                issuer={cert.issuer}
                url={cert.url}
                onClick={() => openModal(cert)}
              />
            ))}
          </Grid>
        </Section>

        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent bg="#1e1e1e" color="white">
            <ModalHeader textAlign="center" color="#28969c">
              {selectedCert?.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedCert?.url} alt={selectedCert?.name} w="100%" borderRadius="lg" />
              <Text mt={4} fontSize="sm" textAlign="center" color="gray.400">
                Issued by: {selectedCert?.issuer}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Layout>
  );
};

const Section = ({ title, children }) => (
  <VStack spacing={10} align="start" maxW="1200px" mx="auto" mb={12} px={{ base: 2, md: 4 }}>
    <Heading
      size="lg"
      fontWeight="extrabold"
      bgGradient="linear(to-r, #28969c, teal.300)"
      bgClip="text"
    >
      {title}
    </Heading>
    {children}
  </VStack>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const SkillCard = ({ name, icon }) => (
  <MotionHStack
    bg="linear-gradient(135deg, #1E1E1E, #252525)"
    p={4}
    borderRadius="lg"
    boxShadow="0 0 18px -2px #28969c55"
    justify="center"
    align="center"
    spacing={3}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    textAlign="center"
    _hover={{ shadow: 'lg' }}
  >
    <Icon as={icon} w={6} h={6} color="#28969c" />
    <Text fontWeight="semibold">{name}</Text>
  </MotionHStack>
);

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const CertificationCard = ({ name, issuer, url, onClick }) => (
  <MotionBox
    bg="linear-gradient(135deg, #1E1E1E, #252525)"
    p={4}
    borderRadius="lg"
    boxShadow="0 0 18px -2px #28969c55"
    onClick={onClick}
    cursor="pointer"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <Image src={url} alt={name} borderRadius="md" mb={3} mx="auto" height="160px" objectFit="contain" />
    <Heading as="h4" size="md" mb={1} color="#28969c" textAlign="center">
      {name}
    </Heading>
    <Text fontSize="sm" color="#B0BEC5" textAlign="center">
      Issued by: {issuer}
    </Text>
  </MotionBox>
);

CertificationCard.propTypes = {
  name: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Skills;
