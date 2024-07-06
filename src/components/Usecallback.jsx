import React, { useState } from 'react'

const Usecallback = () => {
    const [count,setcount]=useState(0);
  return (
    <div>
    <h1>Count:{count}</h1>
    <button onClick={()=>setcount(prev=>prev+1)}>Click Here</button>
      
    </div>
  )
}

export default Usecallback
