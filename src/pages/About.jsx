import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.xl" py={8} bg="#fff1e5">
      <Heading as="h2" size="xl" mb={4}>About Us</Heading>
      <Text>Content for About Us goes here.</Text>
      <Box mt={4}>
        <RouterLink to="/">Back to Home</RouterLink>
      </Box>
    </Container>
  );
};

export default About;