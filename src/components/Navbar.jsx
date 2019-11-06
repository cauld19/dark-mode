import React from 'react';
import useDarkMode from '../hooks/useDarkMode'


const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  // if (darkMode) {
  //   props.setColor("#00f000")
  // } else {
  //   props.setColor ("f5f5f5")
  // }
  



  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    if (darkMode) {
      props.setColor(props.permColor)
    } else {
      props.setColor("#f5f5f5")
    }
  };
  
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
