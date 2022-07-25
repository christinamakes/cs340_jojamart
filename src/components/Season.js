import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Season({ season, onDelete, onEdit }) {
    return (
        <tr>
            <td>{season.code}</td>
            <td>{season.description}</td>
        </tr>
    );
}

export default Season;