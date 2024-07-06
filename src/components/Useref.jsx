import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const inputele=useRef();
const btnchange=()=>{
    inputele.current.style.background="blue";
}
  return (
    <div>
     <input type="text" ref={inputele} />
     <button onClick={btnchange}>Click here</button>
    </div>
  )
}

export default Useref
