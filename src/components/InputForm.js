import React from "react";
import Button from "react-bootstrap/Button";
import "./InputForm.css";
import Card from "./Card";

const InputForm = (props) => {
  const handleInput = (event) => {
    props.changeHandler(event);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.calcInputs();
  };

  return (
    <div className="form-container">
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="age">Age</label>
          <input
            onChange={handleInput}
            name="age"
            type="number"
            label="Age"
            defaultValue="30"
            min="15"
            max="100"
            step="1"
          />
          <label htmlFor="netWorth">Net Worth</label>
          <input
            onChange={handleInput}
            name="netWorth"
            type="number"
            label="Current Net Worth"
            defaultValue="60000"
          />
          <h2>Income</h2>
          <input
            onChange={handleInput}
            name="salary"
            type="number"
            label="Salary"
            defaultValue="70000"
          />
          <h2>Expenses</h2>
          <div className="subcontainer">
            <input
              onChange={handleInput}
              name="food"
              type="number"
              label="Food"
              defaultValue="6000"
            />
            <input
              onChange={handleInput}
              name="housing"
              type="number"
              label="Housing"
              defaultValue="15000"
            />
            <input
              onChange={handleInput}
              name="transportation"
              type="number"
              label="Transportation"
              defaultValue = "1500"
            />
            <input name="other" type="number" label="Other" />
          </div>
          <h2>Investments</h2>
          <h3>Retirement / 401k</h3>
          <div className="subcontainer">
            <input name="401kstocks" type="number" label="Stocks" />
            <input name="401kbonds" type="number" label="Bonds" />
          </div>
          <h3>Other / General Investing</h3>
          <div className="subcontainer">
            <input name="otherStocks" type="number" label="Stocks" />
            <input name="otherBonds" type="number" label="Bonds" />
          </div>
          <Button variant="primary" type="submit">
            Calculate
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default InputForm;
