import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function HeadingSection({heading}) {
  return (
    <>
      <Box mb={"20px"} bg="white">
      <Heading
      fontSize="4rem"
      textAlign="center"
      bgGradient="linear(to-r, #7928CA, #FF0080)"
      bgClip="text"
      fontWeight="bold"
    >
      {heading}
    </Heading>
      </Box>
    </>
  );
}