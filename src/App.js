import "./App.css";
import React, {useState} from 'react';
import InputForm from "./components/InputForm";

function App() {

  [data, setData] = useState({
    age: 27,
    netWorth: 60000,
    salary: 70000,
    food: 0,
    housing: 0,
    transportation: 0,
    retireStocks: 0,
    retireBonds: 0,
    otherStocks: 0,
    otherBonds: 0
  })

  const changeHandler = () => {

  }

  return (
    <div className="App">
        <InputForm changeHandler = {changeHandler} />
      </div>
  );
}

export default App;
