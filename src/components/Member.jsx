import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Member({ member, onDelete, onEdit }) {
    Member.propTypes = {
        member: PropTypes.array,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func,
        member_id: PropTypes.string,
        member_name: PropTypes.string,
        member_address: PropTypes.string,
        member_email: PropTypes.string,
        member_phone_number: PropTypes.string
    }
    return (
        <tr>
            <td>{member.member_id}</td>
            <td>{member.member_name}</td>
            <td>{member.member_address}</td>
            <td>{member.member_email}</td>
            <td>{member.member_phone_number}</td>
            <td className='click'><Link to="/update-member"><AiOutlineEdit onClick={() => onEdit(member)} /></Link></td>
            <td className='click'><AiOutlineDelete onClick={() => onDelete(member.member_id)} /></td>
        </tr>
    );
}

export default Member;