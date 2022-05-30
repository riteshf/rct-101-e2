import React from "react";
import { useEffect } from "react";
import { Text ,Image,Box,Stack,Heading,Tag,TagLabel } from '@chakra-ui/react'
import axios from "axios";
const Product = () => {
  const [page, setPage] = React.useState(1);
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const [products,setProducts] = React.useState([])
  useEffect(() => {
    // console.log("Product component rendered");
  
      axios.get('http://localhost:8080/products').then((r)=>{
        setProducts(r.data)
      });
   console.log(products)
  },page);
  
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image"  />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
