import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const[value,setvalue]=useState(0);
   const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    })

  return (
    <div>
      <button onClick={()=>{setvalue(prev=>prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setvalue(prev=>prev+1)}}>+1</button>
      <h1>Render count:{count.current}</h1>
    </div>
  )
}

export default Useref
