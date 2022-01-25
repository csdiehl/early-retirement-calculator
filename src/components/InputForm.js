import React from "react";
import Button from "react-bootstrap/Button";
import "./InputForm.css";
import Card from "./Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RangeSlider from "react-bootstrap-range-slider";

const InputForm = (props) => {
  const handleInput = (event) => {
    props.changeHandler(event);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.calcInputs();
  };

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <h2>Income</h2>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="age">Age</Form.Label>
              <Form.Control
                className="input"
                onChange={handleInput}
                name="age"
                type="number"
                label="Age"
                defaultValue="30"
                min="15"
                max="100"
                step="1"
              />
              <Form.Text>Your Current Age</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Income</Form.Label>
              <Form.Control
                className="input"
                onChange={handleInput}
                name="salary"
                type="number"
                label="Salary"
                defaultValue="70000"
              />
              <Form.Text>After-tax Income</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <h2>Expenses</h2>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Food</Form.Label>
              <Form.Control
                className="input"
                onChange={handleInput}
                name="food"
                type="number"
                label="Food"
                defaultValue="6000"
                step="100"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Housing</Form.Label>
              <Form.Control
                className="input"
                onChange={handleInput}
                name="housing"
                type="number"
                label="Housing"
                defaultValue="15000"
                step="100"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Transportation</Form.Label>
              <Form.Control
                className="input"
                onChange={handleInput}
                name="transportation"
                type="number"
                label="Transportation"
                defaultValue="10000"
                step="100"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="other">Other</Form.Label>
              <Form.Control
                className="input"
                name="otherExpense"
                type="number"
                defaultValue="10000"
                step="100"
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
        </Row>
        <h2>Investments</h2>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Stocks</Form.Label>
              <Form.Control
                className="input"
                name="retireStocks"
                type="number"
                defaultValue="10000"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Growth Rate</Form.Label>
              <Form.Control
                className="input"
                name="growthRateStocks"
                type="number"
                min="0"
                max="10"
                defaultValue="7"
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Bonds</Form.Label>
              <Form.Control
                className="input"
                name="retireBonds"
                type="number"
                defaultValue="10000"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Growth Rate</Form.Label>
              <Form.Control
                className="input"
                name="growthRateBonds"
                type="number"
                min="0"
                max="10"
                defaultValue="2"
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
        </Row>
          <Form.Group as = {Row} className = "mb-3">
          <Form.Label>Inflation Rate</Form.Label>
            <Col xs = "9">
            <RangeSlider onChange = {handleInput} value = {props.inflation} name = "inflation" min="0" max="10" step="1" variant = "light"/>
            </Col>
            <Col xs = "3">
              <Form.Control onChange = {handleInput} className = "input" name = "inflation" value = {props.inflation} min = "0" max ="10" />
            </Col>
          </Form.Group>
        <Row className="mb-0">
          <Button className="button" variant="primary" type="submit">
            Calculate
          </Button>
        </Row>
      </Form>
    </Card>
  );
};

export default InputForm;
