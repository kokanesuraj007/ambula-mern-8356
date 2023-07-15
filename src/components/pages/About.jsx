import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HeadingSection from "../card/Heading";

export default function About() {
  return (
    <Box bgGradient="linear(to-r, teal.500, teal.700)" minHeight="100vh">
      <Box py="8" px={{ base: "4", md: "8" }} maxW="3xl" mx="auto">
        <HeadingSection heading="About Project" />
        <Box mt="8">
          <Text color="white" fontSize="2xl" fontWeight="bold">
            Project Name: Ambula - Seamless Organization and Shopping
          </Text>
          <Heading color="teal.300" mt="4" textDecoration="underline">
            Project Description:
          </Heading>
          <Text color="white" fontSize="xl">
            Ambula is an ambitious project that aims to revolutionize the way people manage tasks and shop for their everyday needs. Our platform combines an intuitive and user-friendly To-Do List feature with a diverse range of products, creating a seamless experience for organizing tasks and shopping.
          </Text>

          <Heading color="teal.300" mt="8" textDecoration="underline">
            Key Features:
          </Heading>
          <Text color="white" fontSize="xl">
            1. Intuitive To-Do List: Easily create, prioritize, and track tasks with our user-friendly interface, ensuring efficient task management.
          </Text>
          <Text color="white" fontSize="xl">
            2. Seamless Shopping Experience: Explore a wide range of products and add them to your cart with ease, enjoying a convenient shopping experience.
          </Text>
          <Text color="white" fontSize="xl">
            3. Secure Checkout and Swift Delivery: Our platform ensures the security of your transactions and provides swift delivery, guaranteeing a hassle-free shopping experience.
          </Text>
          <Text color="white" fontSize="xl">
            4. Simplicity and Efficiency: We prioritize simplicity and efficiency in our platform's design, allowing you to save valuable time and effort in organizing tasks and completing your shopping needs.
          </Text>
          <Text color="white" fontSize="xl">
            5. Community Engagement: Join our community of like-minded individuals to connect, share insights, and optimize productivity. Exchange tips, ideas, and strategies to enhance your overall efficiency.
          </Text>

          <Heading color="teal.300" mt="8" textDecoration="underline">
            Project Goals:
          </Heading>
          <Text color="white" fontSize="xl">
            1. Develop a user-friendly interface with an intuitive To-Do List feature that simplifies task management and enhances productivity.
          </Text>
          <Text color="white" fontSize="xl">
            2. Curate a diverse product range, ensuring a seamless shopping experience with secure checkout and reliable delivery.
          </Text>
          <Text color="white" fontSize="xl">
            3. Focus on simplicity and efficiency in the platform's design to save users time and effort in their daily tasks and shopping.
          </Text>
          <Text color="white" fontSize="xl">
            4. Foster an engaged community of users, enabling connection and knowledge-sharing to enhance productivity and personal growth.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
