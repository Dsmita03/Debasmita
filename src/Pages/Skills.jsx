import { Box, VStack, Heading, Text, Grid, HStack, Icon, Image } from '@chakra-ui/react';
import { FaCode, FaCloud, FaDatabase, FaReact, FaCss3, FaJsSquare, FaPython, FaJava ,FaServer} from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { FaAngular,FaProjectDiagram } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import Layout from '../Components/Layout';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: FaCode },
    { name: 'CSS', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'React', icon: FaReact },
    { name: 'NodeJs', icon: FaCss3 },
    { name: 'Express', icon: FaCode },
    { name: 'MongoDB', icon: FaDatabase },
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'Python', icon: FaPython },
    { name: 'SQL', icon: FaDatabase },
    { name: 'JAVA', icon: FaJava },
    { name: 'TypeScript', icon: FaCode },
    { name: 'Appwrite', icon: FaCloud },
    { name: 'Angular', icon: FaAngular },
    { name: 'Firebase', icon: SiFirebase }
  ];

  const csFundamentals = [
    { name: 'DBMS', icon: FaDatabase },
    { name: 'OOPS', icon: FaCode },
    { name: 'Operating System', icon: FaServer },
    { name: 'Computer Networks', icon: FaCloud },
    { name: 'Software Engineering', icon:FaProjectDiagram },
  ];

  const certifications = [
    { name: 'Google AI Essential', issuer: 'Google', url: "/GoogleAi.png" },
    { name: 'Open Source Contribution', issuer: 'GirlScript Summer Of Code', url: "/Debasmita Sarkar_Cert_Contributor_GSSoC2024.png" },
    { name: 'Google Solution Challenge 2024', issuer: 'Google', url: "/gogsoln.jpeg" },
    { name: 'Postman API Fundamental Student Expert', issuer: 'Postman', url: "/postman.jpeg" },
    { name: 'Angular Course Certificate', issuer: 'Infosys', url: "/Angular.png" },
    { name: 'Email Writing', issuer: 'Infosys', url: "/EmailWriting.png" },
    { name: 'Foundation of Cybersecurity', issuer: 'Google', url: "/cybersecurity 1.png" },
    { name: 'Network and Network Security', issuer: 'Google', url: "/Cybersecurity2.png" },
    { name: 'Cloud Computing for Beginners', issuer: 'IBM SkillsBuild', url: "/IBM.png" },
    { name: 'Manage Security Risks', issuer: 'Google', url: "/Cybersecurity3.png" },
    { name: 'Typescript Course', issuer: 'Infosys', url: "/Typescript.png" },
    { name: 'GitHub Workshop', issuer: 'Industry Academia Community', url: "/github.png" },
    { name: 'JavaScript Completion', issuer: 'Infosys', url: "/javascript.png" },
    { name: 'Agile Scrum Practice', issuer: 'Infosys', url: "/Agile.png" },
    { name: 'Internship Preparation Workshop', issuer: 'Industry Academia Community', url: "/Internship preparation.png" },
    { name: 'Canva Course Certificate', issuer: 'Coursera', url: "/Canva.png" }
  ];

  const handleOpenPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Layout>
      <Box py={{ base: "0", md: "10" }} px={5} bg="#0f0f0f" color="#FFFFFF" borderRadius="15" m={4}>
        {/* Technical Skills */}
        <Section title="Technical Skills">
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </Grid>
        </Section>

        {/* CS Fundamentals */}
        <Section title="CS Fundamentals">
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
            {csFundamentals.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </Grid>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                name={cert.name}
                issuer={cert.issuer}
                url={cert.url}
                onClick={() => handleOpenPDF(cert.url)}
              />
            ))}
          </Grid>
        </Section>
      </Box>
    </Layout>
  );
};

// Helper Components
const Section = ({ title, children }) => (
  <VStack spacing={5} align="start" maxW="1000px" mx="auto" mt={10}>
    <Heading as="h1" size="xl" mb={5} color="#00d8a7">
      {title}
    </Heading>
    {children}
  </VStack>
);

const SkillCard = ({ name, icon }) => (
  <HStack
    bg="#1e1e1e"
    p={4}
    borderRadius="md"
    boxShadow="md"
    justifyContent="center"
    alignItems="center"
    spacing={3}
  >
    <Icon as={icon} w={6} h={6} color="#28969c" />
    <Text fontSize="lg" fontWeight="600">
      {name}
    </Text>
  </HStack>
);

const CertificationCard = ({ name, issuer, url, onClick }) => (
  <Box
    bg="#1e1e1e"
    p={4}
    borderRadius="md"
    boxShadow="md"
    onClick={onClick}
    cursor="pointer"
    _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
  >
    <Image src={url} alt={name} borderRadius="md" mb={3} />
    <Heading as="h4" size="md" mb={1} color="#28969c">
      {name}
    </Heading>
    <Text fontSize="sm" color="#B0BEC5">
      Issued by: {issuer}
    </Text>
  </Box>
);

export default Skills;
