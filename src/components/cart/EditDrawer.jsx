import {
    Box,
    Button,
    CloseButton,
    Image,
    Select,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
  } from "@chakra-ui/react";
  
  import { AddIcon, MinusIcon } from "@chakra-ui/icons";
  
  export default function EditDrawer({id, image, price, title}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Text cursor={"pointer"} onClick={onOpen}>
          Edit
        </Text>
  
        {/* ????????? Drawer */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"lg"}
          p="0px"
        >
          <DrawerOverlay />
          <DrawerContent display={"flex"} flexDirection={"column"}>
            <Box
              borderWidth="1px"
              p="30px 20px"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"20px"} fontWeight={"bold"}>
                EDIT ITEM
              </Text>
              <Box onClick={onClose}>
                <CloseButton
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  _hover={{ bg: "white" }}
                />
              </Box>
            </Box>
  
            <Box borderWidth="1px" p="20px">
              <Box w="100%" minH="100px" mb="10px">
                <Box
                  w="100%"
                  p="20px"
                  minH="100px"
                  display={"grid"}
                  gridTemplateColumns={{base : "1fr", sm : "1fr 3fr"}}
                  gap={"10px"}
                >
                  <Box>
                    <Image
                      src="https://images.meesho.com/images/products/146519605/fsjdd_512.jpg"
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
                      <Box w="100%">
                        <Text fontWeight={"bold"} noOfLines={1} fontSize={"17px"}>
                          Premium Polyester T-shirt (Pack of 1) hehehe
                        </Text>
                      </Box>
                    </Box>
  
                    <Box
                      display={"flex"}
                      alignItems={{base : "flex-start", md : "center"}}
                      flexDirection={{base : "column-reverse",md : "row"}}
                      justifyContent={"space-between"}
                      mb="10px"
                  
                    >
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                   
                      >
                        <Text fontSize={"20px"} mr="20px">
                          Size:
                        </Text>
                        <Select>
                          <option value="option1">M</option>
                          <option value="option2">xl</option>
                          <option value="option3">lg</option>
                        </Select>
                      </Box>
                      <Box      mb={{base : "20px",md : "0px"}} display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                      <Text fontSize={"20px"} mr="15px">Qty:</Text>
                      <Box borderWidth="1px">
                          <Button borderRadius={"0px"}><AddIcon /></Button>
                          <Button fontSize={"18px"} _hover={{bg : "white"}} bg="white">1</Button>
                          <Button borderRadius={"0px"}><MinusIcon /></Button>
                      </Box>
                      </Box>
                    </Box>
                    <Box mb="10px">
                      <Text fontSize={"20px"}>₹311</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
  
            <Box borderBottomWidth="1px" p="20px" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
  <Text fontSize={"20px"} fontWeight={"bold"}>Total Price</Text> <Text fontSize={"20px"} fontWeight={"bold"}>₹311</Text>
            </Box>
  
            <Box borderTopWidth="1px" mt={"auto"} p="20px">
              <Button
                w="100%"
                color={"white"}
                bg={
                  "#008060"
                }
                h="45px"
                py="20px"
              >
                Continue
              </Button>
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    );
  }