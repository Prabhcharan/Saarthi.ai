import React from "react";
import './Table.css';

function Table() {
    return (
        <table class="content-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee ID</th>
                    <th>Department</th>
                    <th>Email ID</th>
                    <th>DOJ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abc</td>
                    <td>1001</td>
                    <td>Front-End</td>
                    <td>Abc@xyz.com</td>
                    <td>21/01/1999</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;