import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css/componentes/MyNavbar.css';

function MyNavbar() {
  const [select, setSelect] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = (str) => {
    setSelect(str);
    setIsMenuOpen(false); // Close menu on link click
  };

  useEffect(() => {
    const currentURL = window.location.href;
    const route = currentURL.split('/');
    if (route[route.length - 1] === '') setSelect('home');
    else setSelect(route[route.length - 1]);
  }, []);

  document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
  
    // Check local storage for mode preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      checkbox.checked = true;
    } else {
      document.body.classList.add('light-mode');
    }
  
    // Add event listener for toggle
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  });  

  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">
            <h3 className="logo">Bhavi's <span>Portfolio</span></h3>
          </div>
          <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <Link onClick={() => handleSelect('home')} to={`/`} className={`link ${select === 'home' ? 'active' : ''}`}>
              Home
            </Link>
            <Link onClick={() => handleSelect('about')} to={`/about`} className={`link ${select === 'about' ? 'active' : ''}`}>
              About
            </Link>
            <Link onClick={() => handleSelect('contact')} to={`/contact`} className={`link ${select === 'contact' ? 'active' : ''}`}>
              Contact
            </Link>
            <Link onClick={() => handleSelect('project')} to={`/project`} className={`link ${select === 'project' ? 'active' : ''}`}>
              Project
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyNavbar;
