import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#fff1e5" color="black" py={4} mt={8}>
      <Flex justifyContent="center">
        <Link as={RouterLink} to="/about" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" mx={2}>Contact</Link>
        <Link as={RouterLink} to="/privacy-policy" mx={2}>Privacy Policy</Link>
      </Flex>
      <Text textAlign="center" mt={2}>&copy; 2023 Financial Times</Text>
    </Box>
  );
};

export default Footer;