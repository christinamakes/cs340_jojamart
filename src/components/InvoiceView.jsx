import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function InvoiceView({ invoiceView, onEdit }) {
    InvoiceView.propTypes = {
        invoiceView: PropTypes.object,
        order_number: PropTypes.string,
        member_id_name: PropTypes.string,
        employee_id_name: PropTypes.string,
        product_id_name: PropTypes.string,
        product_price: PropTypes.string,
        quantity: PropTypes.string,
        invoice_total: PropTypes.string,
        order_type_name: PropTypes.string,
        purchase_date: PropTypes.string,
        onEdit: PropTypes.func,
    }
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
            <td className='click'><Link to={'/update-sales-details'}><AiOutlineEdit onClick={() => onEdit(invoiceView)} /></Link></td>
        </tr>
    );
}

export default InvoiceView;