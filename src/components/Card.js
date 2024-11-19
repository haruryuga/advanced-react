import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (

    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.2s" // Add hover effect
      _hover={{ transform: "scale(1.05)" }} // Slight scale on hover
      bg="white"
      textAlign="left" // Center text within the card
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} mt={4} align="flex-start" p={4}>
        <Heading as="h2" size="lg" color="black">
          {title}
        </Heading>
        <Text fontSize="md" color="black">
          {description}
        </Text>
        <HStack spacing={2} color='black'>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x'></FontAwesomeIcon>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
