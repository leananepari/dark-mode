import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



function DropdownMenu({ list, setDropdownOption, history }) {
  // const [placeholder, setPlaceholder] = useState('All coins');

  function handleChange(e, data) {
    // setPlaceholder(data.value);
  }

  function handleClick(value) {
    // e.preventDefault();
    setDropdownOption(value.toLowerCase());
    history.push('/coin');
  }
  return (
    <Dropdown onChange={handleChange} style={{width: '400px', margin: '0 auto', fontSize: "14px"}}
      placeholder='All coins'
      fluid
      selection
      options= {
        list.map((item, index) => {
        return <Dropdown.Item key={index} onClick={() => handleClick(item.value)}><Link key={index} to={`/${item.value.toLowerCase()}`} style={{color: '#4183c4', margin: '5px 0 5px 5px'}}>{item.value}<br/></Link></Dropdown.Item>
      })}
      />
  );
}

export default DropdownMenu;