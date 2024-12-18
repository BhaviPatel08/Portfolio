import './App.css'

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import MyNavbar from './componentes/MyNavbar'
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import React from 'react';

function App() {

  return (
    <React.Fragment>

    <MyNavbar/>
    

    <Outlet/>
    
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      {/* <Footer/> */}
    
    </React.Fragment>
  )
}

export default App