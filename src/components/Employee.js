import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link} from 'react-router-dom'

function Employee({ employee, onDelete, onEdit }) {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.wage}</td>
            <td className='click'><Link to="/update-employee"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-employee"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Employee;