import React from 'react'
import Navbar from './Navbar'

import { BrowserRouter,Route, Routes } from  "react-router-dom"

import Home from './Home'
import About from './About'
import Details from './Details'


const App = () => {
  return (
    <BrowserRouter> 
     <Navbar/>
      <Routes>
        < Route path="/" exact component = {Home} />
        < Route path="/details" exact component ={Details}/>
        < Route path="/about" exact component = {About} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
