import React from "react";
import Card from './Card';

const BigNumber = (props) => {
  return (
    <Card>
      <h1>{`$ ${props.cashFlow}`}</h1>
      <h2>Annual cash flow</h2>

      <h1>{`$ ${props.target}`}</h1>
      <h2>FIRE Target</h2>
    </Card>
  );
};

export default BigNumber;
