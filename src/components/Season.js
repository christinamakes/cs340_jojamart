import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Season({ season, onDelete, onEdit }) {
    return (
        <tr>
            <td>{season.code}</td>
            <td>{season.description}</td>
            <td className='click'>< AiOutlineEdit onClick={null} /></td>
            <td className='click'>< AiOutlineDelete onClick={null} /></td>
        </tr>
    );
}

export default Season;