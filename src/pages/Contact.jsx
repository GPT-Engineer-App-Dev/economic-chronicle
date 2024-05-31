import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
      <Text>Content for Contact Us goes here.</Text>
      <Box mt={4}>
        <RouterLink to="/">Back to Home</RouterLink>
      </Box>
    </Container>
  );
};

export default Contact;