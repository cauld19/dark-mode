import React from 'react';
import useDarkMode from '../hooks/useDarkMode'

import Chart from "./Chart"


const Navbar = ({ toggleMode, darkMode}) => {
  // const [darkMode, setDarkMode] = useDarkMode(false);





  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  
  return (
    <div>
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
