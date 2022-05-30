import React from "react";
import {Button,ButtonGroup,Select} from '@chakra-ui/react'
const Pagination = ({setPage,setLimit, page,limit ,total}) => {
  // TODO: Remove below const and instead import them from chakra
 let handlelimit=(e)=>{
let value=e.target.value;
console.log(value);
setLimit(value);

 }

  return (
    <ButtonGroup width='70%' margin='auto'>
      <Button data-cy="pagination-first-button" disabled={page<=1} onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" disabled={page<=1} onClick={()=>setPage((prev)=>prev-1)} >Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={handlelimit}>
        <option data-cy="pagination-limit-3" value='3'>3</option>
        <option data-cy="pagination-limit-6" value='6'>6</option>
        <option data-cy="pagination-limit-9" value='9'>9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={total<=page*limit} onClick={()=>setPage((prev)=>prev+1)}>Next</Button>
      <Button data-cy="pagination-last-button" disabled={total<=page*limit} onClick={()=>setPage(total/limit)} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
