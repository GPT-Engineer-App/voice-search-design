import { Container, VStack, InputGroup, Input, InputRightElement, IconButton, Box, Heading, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleVoiceSearch = () => {
    // Placeholder for voice-to-text integration
    console.log("Voice search initiated");
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <InputGroup>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              aria-label="Voice Search"
              icon={<FaMicrophone />}
              onClick={handleVoiceSearch}
              mr={2}
            />
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Design Your Product</Heading>
          <Text mb={4}>Choose from a variety of mockups to design your own products.</Text>
          <Button colorScheme="teal">Start Designing</Button>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Products Ready for Stores</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h3" size="md">Product 1</Heading>
                <Text mt={4}>Description of product 1.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h3" size="md">Product 2</Heading>
                <Text mt={4}>Description of product 2.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h3" size="md">Product 3</Heading>
                <Text mt={4}>Description of product 3.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;