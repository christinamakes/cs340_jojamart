import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Achievement({ achievement, onDelete, onEdit }) {
    return (
        <tr>
            <td>{achievement.id}</td>
            <td>{achievement.title}</td>
            <td>{achievement.criteria}</td>
            <td className='click'>< AiOutlineEdit onClick={null} /></td>
            <td className='click'>< AiOutlineDelete onClick={null} /></td>
        </tr>
    );
}

export default Achievement;