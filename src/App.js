import "./App.css";
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import BigNumber from "./components/BigNumber";
import Toggle from "./components/Toggle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DUMMY_DATA = [
  {
    year: 1,
    savings: 50000,
  },
  { year: 2, savings: 60000 },
  { year: 3, savings: 70000 },
];

function App() {

  //State - consider useReducer
  const [data, setData] = useState({
    age: 30,
    netWorth: 60000,
    salary: 70000,
    food: 6000,
    housing: 15000,
    transportation: 10000,
    otherExpense: 10000,
    retireStocks: 10000,
    retireBonds: 10000,
    growthRateStocks: 7,
    growthRateBonds: 2,
    inflation: 3,
  });

  const [cash, setCash] = useState(47500);
  const [target, setTarget] = useState(562500);
  const [endAge, setFireAge] = useState(50);

  const yearsAhead = (endAge - data.age) + 10
  //end of state logic

  const [chartData, setChartData] = useState(DUMMY_DATA);

  const changeHandler = (event) => {
    const target = event.target;
    const value = +target.value;
    const name = target.name;

    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const calcInputs = () => {
    const expenses = data.housing + data.transportation + data.food + data.otherExpense;
    const cashFlow = Math.round(data.salary - expenses);
    const fireTarget = Math.round(expenses * 25);
    const bondRate = data.growthRateBonds / 100;
    const stockRate = data.growthRateStocks / 100;
    const inflation = data.inflation / 100;


    const yearData = [];
    let linearSaving = data.retireStocks + data.retireBonds;
    let totalSavings = data.retireStocks + data.retireBonds;
    let stockGrowth = data.retireStocks
    let bondGrowth = data.retireBonds
    let year = 1;
    let fireAge = data.age;

    //main calculation
    while(year <= yearsAhead) {
      yearData.push({
        year: year,
        cash: linearSaving,
        savings: totalSavings,
      });

      stockGrowth *= 1 + stockRate
      bondGrowth *= 1 + bondRate

      linearSaving += cashFlow - (linearSaving * inflation)

      totalSavings +=
        cashFlow +
        stockGrowth +
        bondGrowth - (totalSavings * inflation);
      
      if (totalSavings <= fireTarget) {
        fireAge += 1;
      }

      year += 1;
    }


    setCash(cashFlow);
    setTarget(fireTarget);
    setChartData(yearData);
    setFireAge(fireAge)
  };

  

  return (
    <Container fluid className="justify-content-md-center App">
      <Row>
        <Col md="4">
          <InputForm inflation = {data.inflation} calcInputs={calcInputs} changeHandler={changeHandler} />
        </Col>
        <Col md="8">
          <BigNumber target={target} cashFlow={cash} age = {endAge} />
          <Toggle data={chartData} age = {data.age} number = {target} endYear = {yearsAhead} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
