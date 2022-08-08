import React from 'react';
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function InvoiceView({ invoiceView }) {
    InvoiceView.propTypes = {
        invoiceView: PropTypes.object,
        order_number: PropTypes.string,
        member_id: PropTypes.string,
        member_name: PropTypes.string,
        employee_id: PropTypes.string,
        employee_name: PropTypes.string,
        product_id: PropTypes.string,
        product_name: PropTypes.string,
        product_price: PropTypes.string,
        quantity: PropTypes.string,
        invoice_total: PropTypes.string,
        order_type: PropTypes.string,
        purchase_date: PropTypes.string,
        //onEdit: PropTypes.func,
    }
    return (
        <tr>
            <td>{invoiceView.order_number}</td>
            <td>{invoiceView.member_id} -- {invoiceView.member_name}</td>
            <td>{invoiceView.employee_id} -- {invoiceView.employee_name}</td>
            <td>{invoiceView.product_id} -- {invoiceView.product_name}</td>
            <td>{invoiceView.product_price}</td>
            <td>{invoiceView.quantity}</td>
            <td>{invoiceView.invoice_total}</td>
            <td>{invoiceView.order_type} -- {invoiceView.order_type === 0 ? 'In Person' : 'Online'}</td>
            <td>{invoiceView.purchase_date}</td>
        </tr>
    );
}

export default InvoiceView;