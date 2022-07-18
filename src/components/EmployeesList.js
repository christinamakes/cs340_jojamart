import React from 'react';
import Employee from './Employee';


function EmployeesList({ employees, onDelete, onEdit }) {
    return (
        <table id="employees">
            <thead>
                <tr>
                    <th>employee_id</th>
                    <th>employee_name</th>
                    <th>employee_email</th>
                    <th>employee_phone_number</th>
                    <th>employee_hourly_wage</th>
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
