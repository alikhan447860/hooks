import React, { useState } from 'react'

const HooksCounterTwo = () => {
    const initialcount=0;
    const [count,setcount]=useState(initialcount);
      return (
    <div>
      Count:{count}
      <button onClick={()=>setcount(initialcount)}>Reset</button>
       <button onClick={()=>setcount("Ali")}>Increment</button>
       <button onClick={()=>setcount("Shahruk khan")}>Decrement</button>
    </div>
  )
}

export default HooksCounterTwo
