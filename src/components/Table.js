import React from 'react';
import Table from 'react-bootstrap/Table';

const DataTable = (props) => {

    return(
        <Table variant = "dark">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                </tr>
            </thead>
        </Table>
    )
}

export default DataTable;