import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'

function SalesDetail({ salesDetail}) {
    return (
        <tr>
            <td>{salesDetail.id}</td>
            <td>{salesDetail.productId}</td>
            <td>{salesDetail.orderNumber}</td>
            <td>{salesDetail.quantity}</td>
            <td>{salesDetail.orderType}</td>
            <td className='click'><Link to="/update-sales-details"><AiOutlineEdit onClick={null} /></Link></td>
        </tr>
    );
}

export default SalesDetail;