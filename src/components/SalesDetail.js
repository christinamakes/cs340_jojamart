import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'

function SalesDetail({ salesDetail}) {
    return (
        <tr>
            <td>{salesDetail.sales_details_id}</td>
            <td>{salesDetail.product_id}</td>
            <td>{salesDetail.order_number}</td>
            <td>{salesDetail.quantity}</td>
            <td>{salesDetail.order_type}</td>
            <td className='click'><Link to="/update-sales-details"><AiOutlineEdit onClick={null} /></Link></td>
        </tr>
    );
}

export default SalesDetail;