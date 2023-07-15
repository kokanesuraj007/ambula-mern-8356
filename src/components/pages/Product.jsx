import React, { useContext, useEffect } from "react";
import HeadingSection from "../card/Heading";
import { Box } from "@chakra-ui/react";
import Cards from "../card/Cards";
import { ProductContext } from "../features/ProductContext";

export default function Product() {
  let { productData, getProductData } = useContext(ProductContext);
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Box>
        <HeadingSection heading={"Welcome To Product Page"} />
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={"20px"}>
          {
            productData?.map((ele) =>{
              return <Cards {...ele}/>
            })
          }
        </Box>
      </Box>
    </>
  );
}
