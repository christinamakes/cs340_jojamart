import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Season({ season, onDelete, onEdit }) {
    return (
        <tr>
            <td>{season.code}</td>
            <td>{season.description}</td>
            <td className='click'><Link to="/update-season"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-season"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Season;