import React, { useEffect, useState } from "react";
import { Button,Flex,Grid,Box } from '@chakra-ui/react'
import Product from './Product';
import axios from "axios";
import Pagination from "./Pagination";
const Products = () => {
const [data,setdata]=useState([]);
  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(3);
  const [total, setTotal]=useState(0);
  
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{
    console.log(res);
    setdata(res.data);
    setTotal(Number(res.headers['x-total-count']));
    })
  },[page,limit])

  return (
    <Flex direction='column' width='900px' gap='10px' borderRadius='10px' border='1px solid grey' margin='auto'  padding='20px'>
      <Button colorScheme='blue' width='100px' margin='auto'>Button</Button>
      <Grid gap='10px' templateColumns='repeat(3,1fr)'>{
        data.map((data)=>(<Box key={data.id} >
          <Product {...data} />
        </Box>))
        
        }</Grid>
      <Pagination setLimit={setLimit} page={page} limit={limit} setPage={setPage} total={total}/>
    </Flex>
  );
};

export default Products;
