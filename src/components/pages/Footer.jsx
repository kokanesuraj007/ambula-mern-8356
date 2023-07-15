import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="gray.200" py="4" mt="auto" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Ambula. All rights reserved.</Text>
      <Text>Created By : Suraj Kokane</Text>
    </Box>
  );
};

export default Footer;
