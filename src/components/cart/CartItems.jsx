import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import EditDrawer from "./EditDrawer";

import RemoveItemAlert from "./RemoveItemAlert";

export default function CartItems({id, image, price, title}) {
  return (
    <>
      <Box w="100%" borderWidth="1px" minH="100px" mb="10px">
        <Box
          w="100%"
          p="20px"
          borderBottomWidth="1px"
          minH="100px"
          display={"grid"}
          gridTemplateColumns={"1fr 3fr"}
          gap={"10px"}
        >
          <Box>
            <Image
              src={image}
              w="100%"
            />
          </Box>
          <Box>
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              mb="10px"
            >
              <Box w="80%">
                <Text fontWeight={"bold"} noOfLines={1} fontSize={"17px"}>
                  {title}
                </Text>
              </Box>
              <Box
                color={"#008060"}
                fontSize={"18px"}
                fontWeight={"bold"}
                w="20%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                {/* <EditDrawer id={id} title={title} image={image} price={price} /> */}
              </Box>
            </Box>

           
            <Box mb="10px">
              <Text fontSize={"20px"}>₹{price}</Text>
            </Box>
            <Box>
              <RemoveItemAlert title={title} id={id}/>
            </Box>
          </Box>
        </Box>
        <Box
          w="100%"
          p="10px 20px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
    
          <Text fontSize={"18px"}>Free Delivery</Text>
        </Box>
      </Box>
    </>
  );
}