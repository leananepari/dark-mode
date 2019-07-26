import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu";
import Coin from "./components/Coin";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [dropdownOption, setDropdownOption] = useState(null);
  const [optionsList, setOptionsList] = useState([{key: '', text: '', value: ''}]);
  const [coinsMoreInfo, setCoinsMoreInfo] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data)
        const optionsListCopy = [...optionsList];

        res.data.forEach(item => {
          optionsListCopy.push({key: item.name, text: item.name, value: item.name});
        })
        setOptionsList(optionsListCopy);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (dropdownOption) {
      axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${dropdownOption.toLowerCase()}`
      )
      .then(res => {
        setCoinsMoreInfo(res.data)
      })
      .catch(err => console.log(err));
    }
  }, [dropdownOption])

  return (
    <div className="App">
      <Navbar />
      <Route path="/" render={props => <DropdownMenu {...props} list={optionsList} dropdownOption={dropdownOption} setDropdownOption={setDropdownOption}/>}/>
      <Route path="/" exact component={() => <Charts coinData={coinData} />}/>
      <Route path="/:coin" render={props => <Coin {...props} coinData={coinsMoreInfo} />}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
