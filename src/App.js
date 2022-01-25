import "./App.css";
import React, {useState} from 'react';
import InputForm from "./components/InputForm";
import BigNumber from "./components/BigNumber";
import Chart from './components/Chart.js';

const DUMMY_DATA = [{
  year: 1,
  savings: 50000
}, {year: 2, savings: 60000}, {year: 3, savings: 70000}]

function App() {

  const [data, setData] = useState({
    age: 30,
    netWorth: 60000,
    salary: 70000,
    food: 6000,
    housing: 15000,
    transportation: 1500,
    retireStocks: 0,
    retireBonds: 0,
    otherStocks: 0,
    otherBonds: 0
  })

  const [cash, setCash] = useState(47500)
  const [target, setTarget] = useState(562500)

  const [chartData, setChartData] = useState(DUMMY_DATA)

  const changeHandler = (event) => {
    const target = event.target
    const value = +target.value
    const name = target.name

    setData((prevState) => {return {...prevState, [name]: value}} )
  }

  const calcInputs = () => {
    const expenses = (data.housing + data.transportation + data.food)
    const cashFlow = Math.round((data.salary - expenses))
    const fireTarget = Math.round(expenses * 25)

    const years = Math.round((fireTarget - data.netWorth) / cashFlow)

    const yearData = []
    let totalSavings = data.netWorth

    for (let i = 1; i <= years; i++) {

      yearData.push({
        year: i,
        savings: totalSavings
      })

      totalSavings += cashFlow
    }

    setCash(cashFlow)
    setTarget(fireTarget)
    setChartData(yearData)

  }


  return (
    <div className="App">
        <InputForm calcInputs = {calcInputs} changeHandler = {changeHandler} />
        <BigNumber target = {target} cashFlow = {cash} />
        <Chart data = {chartData}/>
      </div>
  );
}

export default App;
