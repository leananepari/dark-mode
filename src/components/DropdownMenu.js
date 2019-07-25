import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';



function DropdownMenu({ list }) {
// const [options, setOptions] = useState([
//       {key: 'Leana\' Team',
//        text: 'Leana\' Team',
//        value: 'Leana\' Team'}, 
//        {key: 'Team 2',
//         text: 'Team 2',
//         value: 'Team 2',}
//       ]);
  return (
    <Dropdown style={{width: '500px', margin: '0 auto'}}
    placeholder='Select'
    fluid
    selection
    options={list}
  />
  );
}

export default DropdownMenu;