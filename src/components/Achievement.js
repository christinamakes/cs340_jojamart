import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom';

function Achievement({ achievement, onDelete, onEdit }) {
    return (
        <tr>
            <td>{achievement.id}</td>
            <td>{achievement.title}</td>
            <td>{achievement.criteria}</td>
            <td className='click'><Link to="/update-achievement"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-achievement"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Achievement;