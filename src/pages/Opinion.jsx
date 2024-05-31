import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Opinion = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h2" size="xl" mb={4}>Opinion</Heading>
      <Text>Content for Opinion goes here.</Text>
      <Box mt={4}>
        <RouterLink to="/">Back to Home</RouterLink>
      </Box>
    </Container>
  );
};

export default Opinion;