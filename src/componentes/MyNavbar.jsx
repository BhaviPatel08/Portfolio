import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/componentes/MyNavbar.css'

function MyNavbar() {
    const [select,setSelect] = useState('home')
    const handelSelect = (str)=>{
        setSelect(str)
    }
    useEffect(()=>{
        const currentURL = window.location.href;
        const route = currentURL.split('/')
        if(route[route.length-1] === '') setSelect('home')
        else setSelect(route[route.length-1])
    })
  return (
    <React.Fragment>
        <div className='navbar-container'>
            <div className='navbar'> 
                <div className='navbar-logo'>
                    <h3>Bhavi's Portfolio</h3>
                </div>
                <div className='navbar-links'>
                    <Link onClick={()=>{handelSelect('home')}} to={`/`} className={`link ${select === 'home' ? 'active' : ''}`}>
                    Home
                    </Link>
                    <Link onClick={()=>{handelSelect('about')}} to={`/about`} className={`link ${select === 'about' ? 'active' : ''}`}>
                    About
                    </Link>
                    <Link onClick={()=>{handelSelect('contact')}} to={`/contact`} className={`link ${select === 'contact' ? 'active' : ''}`}>
                    Contact</Link>
                    <Link onClick={()=>{handelSelect('project')}} to={`/project`} className={`link ${select === 'project' ? 'active' : ''}`}>
                    Projects</Link>
                </div>
                <div className='navbar-btns'>
                    <button>Mode</button>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MyNavbar