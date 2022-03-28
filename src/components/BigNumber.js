import React from "react";
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import styles from './BigNumber.module.css';

const BigNumber = (props) => {
  return (
    <Card>
      <Row>
       <Col xs = "4">
      <h1 className = {styles.number}>{`$ ${props.cashFlow.toLocaleString('en-US')}`}</h1>
      <h2>Annual Savings</h2>
      </Col>

      <Col xs = "4">
      <h1 className = {styles.number}>{`$ ${(props.target / 1000000).toLocaleString('en-US')} M`}</h1>
      <h2>Goal</h2>
      </Col>

      <Col xs = "4">
      <h1 className = {styles.number}>{`${props.age} years`}</h1>
      <h2>Retirement Age</h2>
      </Col>
      </Row>
    </Card>
  );
};

export default BigNumber;