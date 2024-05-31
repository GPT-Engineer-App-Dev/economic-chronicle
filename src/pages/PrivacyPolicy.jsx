import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.xl" py={8} bg="#fff1e5">
      <Heading as="h2" size="xl" mb={4}>Privacy Policy</Heading>
      <Text>Content for Privacy Policy goes here.</Text>
      <Box mt={4}>
        <RouterLink to="/">Back to Home</RouterLink>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;