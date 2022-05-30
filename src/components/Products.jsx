import React, { useState, useSyncExternalStore,useEffect } from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"

import {Flex,Grid } from '@chakra-ui/react'

const Products = () => {
  
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then(res=>{return res.json()})
    .then(res=>{setItems(res)})
  },[])



  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}
        <Product items={items}/>
      </Grid>
      {/* Pagination */}
      
      <Pagination/>
    </Flex>
  );
};

export default Products;
