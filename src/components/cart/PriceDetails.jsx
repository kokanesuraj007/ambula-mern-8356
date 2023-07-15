import React from 'react'
import { Box, Button, Text } from "@chakra-ui/react";

export default function PriceDetails({total}) {
  return (
    <>
        <Box  w={{base : "100%", md : "270px"}} position={{base : "absolute", md : "fixed"}} >
            <Text fontSize={"22px"} color={"#333333"} fontWeight={"bolder"} mb="20px">Price Details</Text>
            <Box borderBottom={"1px solid black"}>
             <Box display={"flex"} alignItems={"center"} mb="15px" justifyContent={"space-between"}>
              <Text fontSize={"18px"}>Total Product Price</Text>
              <Text fontSize={"18px"}>&#8377;{total}</Text>
             </Box>

     

            </Box>
            <Box display={"flex"} alignItems={"center"} p="15px 0px" justifyContent={"space-between"}>
              <Text fontSize={"18px"} fontWeight={"bolder"}>Order Total</Text>
              <Text fontSize={"18px"} fontWeight={"bolder"}>&#8377;{total}</Text>
             </Box>
             <Box p="8px 0px" bg={"#F9F9F9"} mb="15px">
              <Text fontSize={"10px"} textAlign={"center"} fontWeight={"bold"}>Clicking on ‘Continue’ will not deduct any money</Text>
             </Box>
             <Box mb="15px">
              <Button w="100%" color={"white"} bg={"#008060"} h="45px">Continue</Button>
             </Box>
          </Box>
    </>
  )
}