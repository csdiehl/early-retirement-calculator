import React, { useState } from "react";
import DataTable from "./Table.js";
import Button  from "react-bootstrap/ToggleButton";
import Chart from "./Chart";

const Toggle = (props) => {
  const [display, toggleDisplay] = useState(true);

  const changeHandler = (event) => {
    event.preventDefault();
    toggleDisplay(prev => !prev);
  };

  return (
    <React.Fragment>
        <Button variant = {display ? "light" : "outline-light"} onClick = {changeHandler}>{display ? 'Table' : 'Chart'}</Button>
      {display ?
        <Chart
          data={props.data}
          age={props.age}
          number={props.number}
          endYear={props.endYear}
        />: 
        <DataTable data = {props.data} />}
    </React.Fragment>
  );
};

export default Toggle;
