import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
// import { Link } from 'react-router-dom'

function InvoiceView({ invoiceView, onEdit}) {
    return (
        <tr>
            <td>{invoiceView.order_number}</td>
            <td>{invoiceView.member_id_name}</td>
            <td>{invoiceView.employee_id_name}</td>
            <td>{invoiceView.product_id_name}</td>
            <td>{invoiceView.product_price}</td>
            <td>{invoiceView.quantity}</td>
            <td>{invoiceView.invoice_total}</td>
            <td>{invoiceView.order_type_name}</td>
            <td>{invoiceView.purchase_date}</td>
            <td className='click'><AiOutlineEdit onClick={() => onEdit(invoiceView)} /></td>
        </tr>
    );
}

export default InvoiceView;