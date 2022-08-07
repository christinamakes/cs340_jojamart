import React from 'react';
import Employee from './Employee';
import PropTypes from 'prop-types';


function EmployeesList({ employees, onEdit, onDelete }) {
    EmployeesList.propTypes = {
        employees: PropTypes.array,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func
    }
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
