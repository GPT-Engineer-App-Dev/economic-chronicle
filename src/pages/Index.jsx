import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8} bg="#fff1e5">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <Box mb={8}>
            <Image src="/images/top-news.jpg" alt="Top News" />
            <Heading as="h3" size="lg" mt={4}>Top News Headline</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          <Box mb={8}>
            <Image src="/images/top-news-2.jpg" alt="Top News" />
            <Heading as="h3" size="lg" mt={4}>Another Top News Headline</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="md">Trending Article 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Article 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Article 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;