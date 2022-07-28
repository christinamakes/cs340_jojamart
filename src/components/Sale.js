import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Sale({ sale, onDelete, onEdit }) {
    return (
        <tr>
            <td>{sale.order_number}</td>
            <td>{sale.member_id}</td>
            <td>{sale.employee_id}</td>
            <td>{sale.purchase_date}</td>
            <td>{sale.invoice_total}</td>
            <td className='click'><Link to="/update-sale"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-sale"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Sale;