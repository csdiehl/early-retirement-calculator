import React from "react";
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import styles from './BigNumber.module.css';

const BigNumber = (props) => {
  return (
    <Card>
      <Row>
       <Col>
      <h1 className = {styles.number}>{`$ ${props.cashFlow}`}</h1>
      <h2>Annual Savings</h2>
      </Col>

      <Col>
      <h1 className = {styles.number}>{`$ ${props.target}`}</h1>
      <h2>Goal</h2>
      </Col>

      <Col>
      <h1 className = {styles.number}>{`${props.age} years old`}</h1>
      <h2>Retirement Age</h2>
      </Col>
      </Row>
    </Card>
  );
};

export default BigNumber;
