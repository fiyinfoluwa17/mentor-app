import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./About";    
import Contact from "./Contact";   
import  Count from "./components/Count" 
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Error404 from './components/Error404';
import Navman from "./Navman"

// import  {  handleDecrease, handleIncrease } from "./components/Count"
function App() {
  const mentor = <h1>Hello Mentor</h1>

  return (
    <>
    <BrowserRouter>
    <Navman/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
     )
    {/* <Nav/>
    <div className='third'>
      <Count/>
      <hr />
      {mentor}
      </div>
      <hr />
      <About/>
      <hr />
      <Contact/> */}
    

  }
export default App
