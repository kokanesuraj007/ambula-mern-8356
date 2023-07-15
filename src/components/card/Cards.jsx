import React, { useContext } from "react";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { ProductContext } from "../features/ProductContext";

export default function Cards({ image, title, price }) {
  let { addToCart } = useContext(ProductContext);
  const handleClick = () => {
    const data = {
      id : Date.now(),
      image,
      title,
      price
    }
    addToCart(data)
  };
  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="350px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={image}
          alt={`Picture of`}
          w={"auto"}
          maxH={"200px"}
          margin={"20px auto"}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline"></Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"} onClick={handleClick}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="25px">
                &#x20B9;
              </Box>
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
