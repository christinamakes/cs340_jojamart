import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Employee({ employee, onDelete, onEdit }) {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.wage}</td>
            <td className='click'>< AiOutlineEdit onClick={null} /></td>
            <td className='click'>< AiOutlineDelete onClick={null} /></td>
        </tr>
    );
}

export default Employee;