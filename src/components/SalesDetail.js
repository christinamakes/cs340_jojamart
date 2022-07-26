import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'

function SalesDetail({ salesDetail}) {
    return (
        <tr>
            <td>{salesDetail.id}</td>
            <td>{salesDetail.productId}</td>
            <td>{salesDetail.orderNumber}</td>
            <td>{salesDetail.quantity}</td>
            <td>{salesDetail.orderType}</td>
        </tr>
    );
}

export default SalesDetail;