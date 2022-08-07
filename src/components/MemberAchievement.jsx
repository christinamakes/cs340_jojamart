import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

function MemberAchievement({ memberAchievement, onDelete}) {
    return (
        <tr>
            <td>{memberAchievement.achievement_id}</td>
            <td>{memberAchievement.member_id}</td>
            <td className='click'><AiOutlineDelete onClick={() => onDelete(memberAchievement.member_id)} /></td>
        </tr>
    );
}

export default MemberAchievement;