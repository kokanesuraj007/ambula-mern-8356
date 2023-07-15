import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import HeadingSection from "../card/Heading";
import CartItems from "../cart/CartItems";
import PriceDetails from "../cart/PriceDetails";
import { ProductContext } from "../features/ProductContext";

export default function Cart() {
  let { cartData, totalPrice } = useContext(ProductContext);
  return (
    <>
      <Box>
        <HeadingSection heading={"Welcome To Cart Page"} />
        <Box borderWidth={"1px"} bg={"white"}>
          <Box
            w="100%"
            minHeight={"120vh"}
            display="flex"
            flexDirection={"column"}
          >
            <Box p={{ base: "40px 10px", sm: "40px 50px" }} mb="40px">
              <Box
                w={{ base: "100%", md: "80%", lg: "70%" }}
                m="0 auto"
                display={"grid"}
                gridTemplateColumns={{ base: "1fr", md: "1.8fr 1fr" }}
              >
                <Box
                  borderRightWidth={{ base: "0px", md: "1px" }}
                  minH="400px"
                  p={"0px 20px"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    mb="20px"
                  >
                    <Box pr="15px" borderRight={"1px solid black"}>
                      <Text
                        fontSize={"22px"}
                        color={"#333333"}
                        fontWeight={"bolder"}
                      >
                        Cart
                      </Text>
                    </Box>
                    <Box ml="15px">
                      <Text fontSize={"22px"}>{cartData?.length} Item</Text>
                    </Box>
                  </Box>

                  <Box>
                    {
                      cartData?.map((ele) =>{
                        return <CartItems key={ele.id} {...ele} />
                      })
                    }
                    
                  </Box>
                </Box>

                <Box
                  h={{ base: "100%", md: "400px" }}
                  p={{ base: "0px", md: "0px 20px" }}
                  position={"relative"}
                  mt={{ base: "30px", md: "0px" }}
                >
                  <PriceDetails total={totalPrice} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
