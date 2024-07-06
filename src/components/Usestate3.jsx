import React, { useState } from 'react'

const Usestate3 = () => {
    const[count,setcount]=useState(0);
    const incount=()=>{
    setcount(count+1);
    }
    const decount=()=>{
        setcount(count-1);
    }

  return (
    <div>
      <h1>Count= {count} </h1>
      <button onClick={incount}>Increase</button>
      <button onClick={decount}>Decrease</button>
    </div>
  )
}

export default Usestate3
