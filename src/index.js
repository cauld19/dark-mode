import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from "./hooks/useDarkMode"

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);


  const [darkMode, setDarkMode] = useDarkMode(false);
  const [colorMode, setColorMode] = useState(darkMode)


  useEffect(() => {
    axios 
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    setColorMode(!colorMode)
  };

  let tickColor;
  if (colorMode) {
    tickColor = "#ff6600"
  } else {
    tickColor = "#ccc"
  }



  return (
    <div className="App">
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleMode={toggleMode}
      />
      <Charts 
        coinData={coinData}
        colorMode={colorMode}
        tickColor={tickColor}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
