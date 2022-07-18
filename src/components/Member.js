import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Member({ member, onDelete, onEdit }) {
    return (
        <tr>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.address}</td>
            <td>{member.email}</td>
            <td>{member.phone}</td>
            <td className='click'>< AiOutlineEdit onClick={null} /></td>
            <td className='click'>< AiOutlineDelete onClick={null} /></td>
        </tr>
    );
}

export default Member;