// import { useState } from "react";
'use client'
import React ,{useState}from "react";
import CardBlog from "./card";
const Blog=()=>{
    const [count,setCount]=useState(0)
    const hamdleIncrease=()=>{
        setCount(count+1)
    }
    const handleDecrease=()=>{
        setCount(count-1)
  
    }
return(
    <>
     <cardBlog title="first Blog" body="body of blog" />
     <div>
        <button onClick={hamdleIncrease}>+</button>
           <h1>{count}</h1>
         <button onClick={handleDecrease}>-</button>
     </div>

 </>
)
}
export default Blog