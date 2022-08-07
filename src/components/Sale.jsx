import React from 'react';
import PropTypes from 'prop-types';

function Sale({ sale }) {
    Sale.propTypes = {
        sale: PropTypes.array,
        order_number: PropTypes.string,
        member_id: PropTypes.string,
        employee_id: PropTypes.string,
        purchase_date: PropTypes.string,
        invoice_total: PropTypes.string
    }
    return (
        <tr>
            <td>{sale.order_number}</td>
            <td>{sale.member_id}</td>
            <td>{sale.employee_id}</td>
            <td>{sale.purchase_date}</td>
            <td>{sale.invoice_total}</td>
        </tr>
    );
}

export default Sale;