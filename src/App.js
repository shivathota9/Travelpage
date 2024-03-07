import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Signup from './components/pages/Signup'
import Products from './components/pages/Products';



const App = () => {
  return (
    <>
     <Router>
       <Navbar/>
      <Routes>
       <Route path='/' exact Component={Home} />
       <Route path='/services' exact Component={Services} />
       <Route path='/products' exact Component={Products} />
       <Route path='/sign-up' exact Component={Signup} />
      </Routes>
     </Router>
     </>
  )
}

export default App