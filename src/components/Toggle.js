import React, { useState } from "react";
import DataTable from "./Table.js";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Chart from "./Chart";

const Toggle = (props) => {
  const [display, toggleDisplay] = useState('Chart');

  const changeHandler = (event) => {
    if (event.target.value === 'Chart') {
        toggleDisplay('Chart')
    }

    if (event.target.value === 'Table') {
        toggleDisplay('Table')
    }
  };

  return (
    <React.Fragment>
      <ButtonGroup>
        <ToggleButton value = "Chart" onChange = {changeHandler}>Chart</ToggleButton>
        <ToggleButton value = "Table" onChange = {changeHandler}>Table</ToggleButton>
      </ButtonGroup>
      {display === 'Chart' ? <Chart /> : <DataTable />}
    </React.Fragment>
  );
};

export default Toggle;
