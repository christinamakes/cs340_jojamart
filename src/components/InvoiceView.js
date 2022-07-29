import React from 'react';
// import { AiOutlineEdit } from "react-icons/ai";
// import { Link } from 'react-router-dom'

function InvoiceView({ invoiceView}) {
    return (
        <tr>
            <td>{invoiceView.order_number}</td>
            <td>{invoiceView.member_name}</td>
            <td>{invoiceView.product_name}</td>
            <td>{invoiceView.product_price}</td>
            <td>{invoiceView.quantity}</td>
            <td>{invoiceView.invoice_total}</td>
            <td>{invoiceView.order_type}</td>
            <td>{invoiceView.purchase_date}</td>
        </tr>
    );
}

export default InvoiceView;