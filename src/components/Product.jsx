import React from "react";

import { Text,Box,Image, Stack, Heading, Tag, TagLabel} from '@chakra-ui/react'
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from '@chakra-ui/react'

const Product = ({items}) => {

  // items.map((item)=>{
  //   return <Stack data-cy="product">
  //   <Image data-cy="product-image" />
  //   <Text data-cy="product-category"></Text>
  //   <Tag>
  //     <TagLabel data-cy="product-gender"></TagLabel>
  //   </Tag>
  //   <Heading data-cy="product-title"></Heading>
  //   <Box data-cy="product-price"></Box>
  // </Stack>
  // })

  // return (
  //   <Stack data-cy="product">
  //     <Image data-cy="product-image" />
  //     <Text data-cy="product-category"></Text>
  //     <Tag>
  //       <TagLabel data-cy="product-gender"></TagLabel>
  //     </Tag>
  //     <Heading data-cy="product-title"></Heading>
  //     <Box data-cy="product-price"></Box>
  //   </Stack>
  // );

  return (
    <div>

       {{items}.map((item)=>{
        return <Stack data-cy="product">
        <Image data-cy="product-image" src={item.imageSrc}/>
        <Text data-cy="product-category">{item.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender"> {item.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{item.title}</Heading>
        <Box data-cy="product-price">{item.price}</Box>
      </Stack>
      })}

    </div>
      
  );
};

export default Product;
