import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Member({ member, onDelete, onEdit }) {
    return (
        <tr>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.address}</td>
            <td>{member.email}</td>
            <td>{member.phone}</td>
            <td className='click'><Link to="/update-member"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-member"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Member;