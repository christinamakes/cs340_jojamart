import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Sale({ sale, onDelete, onEdit }) {
    return (
        <tr>
            <td>{sale.id}</td>
            <td>{sale.member}</td>
            <td>{sale.employee}</td>
            <td>{sale.date}</td>
            <td>{sale.total}</td>
            <td className='click'>< AiOutlineEdit onClick={null} /></td>
            <td className='click'>< AiOutlineDelete onClick={null} /></td>
        </tr>
    );
}

export default Sale;