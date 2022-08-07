import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Employee({ employee, onEdit, onDelete }) {
    Employee.propTypes = {
        employee: PropTypes.array,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func
    }
    return (
        <tr>
            <td>{employee.employee_id}</td>
            <td>{employee.employee_name}</td>
            <td>{employee.employee_email}</td>
            <td>{employee.employee_phone_number}</td>
            <td>{employee.employee_hourly_wage}</td>
            <td className='click'><Link to="/update-employee"><AiOutlineEdit onClick={() => onEdit(employee)} /></Link></td>
            <td className='click'><AiOutlineDelete onClick={() => onDelete(employee.employee_id)} /></td>
        </tr>
    );
}

export default Employee;