import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

const Coin = ( { coinData, match }) => {

  // useEffect(() => {
  //   if (dropdownOption) {
  //     axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/${dropdownOption.toLowerCase()}`
  //     )
  //     .then(res => {
  //       setCoinsMoreInfo(res.data)
  //     })
  //     .catch(err => console.log(err));
  //   }
  // }, [dropdownOption])

  return (
    <div className="navbar">
      <h1>{coinData.name}</h1>
      <div> 
        {/* {coinData.description}  */}
      </div>
    </div>
  );
};

export default Coin;