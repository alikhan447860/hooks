import React, { useState } from 'react'

const Usestate = () => {
    const [color,setcolor]=useState('Red');
    const changecolor=()=>{
        setcolor('Blue');
    }
  return (
    <div>
      <h1>My Favourate color is {color}</h1>
      <button onClick={changecolor}>Blue</button>
    </div>
  )
}

export default Usestate;
