import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'

function MemberAchievement({ memberAchievement, onDelete, onEdit }) {
    return (
        <tr>
            <td>{memberAchievement.id}</td>
            <td>{memberAchievement.achievementId}</td>
            <td>{memberAchievement.memberId}</td>
            <td className='click'><Link to="/delete-member-achievement"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default MemberAchievement;