import React, { useState } from 'react'

const Usestate2 = () => {
const [car,setcar]=useState({
    brand:('ferrari'),
    model:('roma'),
    color:('red'),
    year:('2023')
});
const changecolor=()=>{
    setcar((car)=>{
        return{...car,color:"Blue"}
    });
    

}

  return (
    <div>
      <h1>My {car.brand} </h1>
      <h2> it is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changecolor}>Click to change color</button>
    </div>
  )
}

export default Usestate2
