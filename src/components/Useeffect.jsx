import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[count,setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount(count+1);
        }, 2000);
    })
  return (
    <div>
      <h1>i have rendered {count} times</h1>
    </div>
  )
}

export default Useeffect
