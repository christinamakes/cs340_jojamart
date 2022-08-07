import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from 'prop-types';

function MemberAchievement({ memberAchievement, onDelete }) {
    MemberAchievement.propTypes = {
        memberAchievement: PropTypes.array,
        onDelete: PropTypes.func,
    }
    return (
        <tr>
            <td>{memberAchievement.achievement_id} -- {memberAchievement.achievement_title}</td>
            <td>{memberAchievement.member_id} -- {memberAchievement.member_name}</td>
            <td className='click'><AiOutlineDelete onClick={() => onDelete(memberAchievement.member_id)} /></td>
        </tr>
    );
}

export default MemberAchievement;