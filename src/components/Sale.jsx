import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";

function Sale({ sale, onEdit}) {
    Sale.propTypes = {
        sale: PropTypes.object,
        order_number: PropTypes.string,
        member_id: PropTypes.string,
        employee_id: PropTypes.string,
        purchase_date: PropTypes.string,
        invoice_total: PropTypes.string,
        onEdit: PropTypes.func
    }
    return (
        <tr>
            <td>{sale.order_number}</td>
            <td>{sale.member_id}</td>
            <td>{sale.employee_id}</td>
            <td>{sale.purchase_date}</td>
            <td>{sale.invoice_total}</td>
            <td className='click'><Link to="/update-sale"><AiOutlineEdit onClick={() => onEdit(sale)} /></Link></td>

        </tr>
    );
}

export default Sale;