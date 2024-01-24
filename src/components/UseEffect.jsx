import { useState, useEffect } from "react";
// useEffect Hook
// It's use to perform side effects
// It usually run anytime page is loaded/rendered i.e componentDidMount()
// It runs when component is updated i.e componentDidUpdate()
// It runs when component is destroyed i.e componentWillUnload()

const UseEffect = () =>{
const [counter, setCounter] = useState(0)

const handleIncrease = () =>{
    setCounter( counter + 1)
}
const handleDecrease = () =>{
    setCounter( counter - 1)
}
// // useEffect
// useEffect(()=>{
//     console.log("useEffect is called")
// })

// // Run only once
// useEffect(()=>{
//     console.log("useEffect is called")
// }, [])

// Monitor counter
useEffect(()=>{
    console.log("Counter is updated", counter)
}, [counter])
const isAuth = false;


    return(
        <>
        <h1>{counter}</h1>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
        {counter === 5 ? <h1>Count is now equal to {counter}</h1> : <h1>Loading....</h1>
    }
    {!isAuth && <h1>User Authenticated</h1>}
        </>
        
    )
}
export default UseEffect