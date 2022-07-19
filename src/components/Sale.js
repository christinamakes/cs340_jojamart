import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Sale({ sale, onDelete, onEdit }) {
    return (
        <tr>
            <td>{sale.id}</td>
            <td>{sale.member}</td>
            <td>{sale.employee}</td>
            <td>{sale.date}</td>
            <td>{sale.total}</td>
            <td className='click'><Link to="/update-sale"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-sale"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Sale;