// export const handleIncrease = () =>{
//     let value = 0
//     return console.log("increase", value++);
// }
// export const handleDecrease = () =>{
//     let value = 0
//     return console.log("Decrease", value--);
// }

// useState hook is used to update the state of function based components
// It must be used inside the function body.
// Must be imported at the top level of your component
// It has three main parts: stateName, function to update the state(i.e setName()) and the useState(initialState)

import React, { useState } from 'react'
import img9 from '../assets/images/Mohbad.jpg'
import img8 from '../assets/images/Mohbad2.png'

const Count = () => {

const [count, setCount] = useState(0);
const [imgurl, setimgurl] = useState(img9);
const [name, setName] = useState("Blard");
const handleIncrease = () =>{
        setCount(count + 1);
        setimgurl(img8)
        if (count < pupils.length - 1) {
          setName(pupils[count + 1]);
        }
    }
const handleDecrease = () =>{
        setCount(count - 1);
        setimgurl(img9)
        if (count > 0) {
          setName(pupils[count - 1]);
        }
       
    }
    //array of names
    const pupils = ["Blard","Mohbad","Tobi","Sheggz"]

  return (
    <div>
        <h1>Mentor Counter App</h1>
        <p>{name}</p>
        <h1>{count}</h1>
        <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button><br /> <br />
      <img src={imgurl} alt="" />
    </div>
  )
}

export default Count  


