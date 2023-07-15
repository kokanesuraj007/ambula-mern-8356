import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import HeadingSection from "../card/Heading";
import Type from "../card/Type";

export default function Home() {
  return (
    <Box>
      <HeadingSection heading={<Type />} />
      <Box
        w="80%"
        m="auto"
        textAlign="center"
      >
        <Box
          border="1px solid gray"
          borderRadius="md"
          p="4"
          boxShadow="md"
        >
          <Text color="#008080" fontSize="1.9rem">
            Welcome to Ambula, where organization and shopping meet seamlessly!
          </Text>
        </Box>
        <Box
          border="1px solid gray"
          borderRadius="md"
          p="4"
          mt="4"
          boxShadow="md"
        >
          <Text color="#008080" fontSize="1.9rem">
            Stay organized effortlessly with our intuitive To-Do List feature. Manage tasks with ease and enjoy a user-friendly interface that ensures a seamless experience. Our To-Do List helps you stay on top of your tasks, making it easy to prioritize and track your progress.
          </Text>
        </Box>
        <Box
          border="1px solid gray"
          borderRadius="md"
          p="4"
          mt="4"
          boxShadow="md"
        >
          <Text color="#008080" fontSize="1.9rem">
            Discover the joy of hassle-free shopping with Ambula. Explore a wide range of products and enjoy a convenient shopping experience. Add items to your cart, securely check out, and benefit from swift delivery. Our platform is designed for simplicity and efficiency, saving you time and effort.
          </Text>
        </Box>
        <Box
          border="1px solid gray"
          borderRadius="md"
          p="4"
          mt="4"
          boxShadow="md"
        >
          <Text color="#008080" fontSize="1.9rem">
            Join our community of users and connect with like-minded individuals. Share insights, tips, and recommendations to optimize your productivity. Ambula provides a space where you can collaborate, learn, and grow together.
          </Text>
        </Box>
        <Box
          border="1px solid gray"
          borderRadius="md"
          p="4"
          mt="4"
          boxShadow="md"
        >
          <Text color="#008080" fontSize="1.9rem">
            Experience the convenience of our To-Do List and the pleasure of stress-free shopping. Welcome to Ambula, where organization and shopping come together seamlessly!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
