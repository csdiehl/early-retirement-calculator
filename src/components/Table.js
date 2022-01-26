import React from "react";
import Table from "react-bootstrap/Table";

const DataTable = (props) => {
  const today = new Date();
  const year = today.getFullYear();

  const tableData = props.data.map((obj) => {
    return (
      <tr>
        <td>{year + obj.year}</td>
        <td>{`$${Math.round(obj.cash).toLocaleString('en-US')}`}</td>
        <td>{`$${Math.round(obj.savings).toLocaleString("en-US")}`}</td>
      </tr>
    );
  });

  return (
    <Table variant="dark">
      <thead>
        <tr>
          <th>Year</th>
          <th>Cash</th>
          <th>Total Savings</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </Table>
  );
};

export default DataTable;
