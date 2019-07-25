import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [dropdownOption, setDropdownOption] = useState(false);
  const [optionsList, setOptionsList] = useState([{key: '', text: '', value: ''}])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data)
        res.data.forEach(item => {
          optionsList.push({key: item.name, text: item.name, value: item.name});
          setOptionsList(optionsList);
          console.log('LIST',optionsList)
        })
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <DropdownMenu list={optionsList}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
