import React ,{useState} from 'react'

const HooksCounterThree = () => {
    const [name,setname]=useState({firstname:'',lastname:''})
  return (
    <div>

    <input type="text" value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})} />
    <input type="text" value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})} />
    
      <h2>Your First Name is -{name.firstname}</h2>
      <h2>Your Last Name is-{name.lastname}</h2>
    </div>
  )
}

export default HooksCounterThree
