import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Member({ member, onDelete, onEdit }) {
    return (
        <tr>
            <td>{member.member_id}</td>
            <td>{member.member_name}</td>
            <td>{member.member_address}</td>
            <td>{member.member_email}</td>
            <td>{member.member_phone_number}</td>
            <td className='click'><Link to="/update-member"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-member"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Member;