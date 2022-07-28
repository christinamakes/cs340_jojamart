import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link} from 'react-router-dom'

function Employee({ employee}) {
    return (
        <tr>
            <td>{employee.employee_id}</td>
            <td>{employee.employee_name}</td>
            <td>{employee.employee_email}</td>
            <td>{employee.employee_phone_number}</td>
            <td>{employee.employee_hourly_wage}</td>
            <td className='click'><Link to="/update-employee"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-employee"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Employee;