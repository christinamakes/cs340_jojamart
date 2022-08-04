import React from 'react';
import Employee from './Employee';


function EmployeesList({ employees, onEdit, onDelete }) {
    return (
        <table id="employees">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Hourly Wage</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, i) => <Employee employee={employee}
                onDelete={onDelete}
                onEdit={onEdit}
                key={i} />)}
            </tbody>
        </table>
    );
}

export default EmployeesList;
