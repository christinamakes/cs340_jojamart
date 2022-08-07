import React from 'react';
import Sale from './Sale';
import PropTypes from 'prop-types';


function SalesList({ sales }) {
    SalesList.propTypes = {
        sales: PropTypes.array,
    }

    return (
        <table id="sales">
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Member ID</th>
                    <th>Employee ID</th>
                    <th>Purchase Date</th>
                    <th>Invoice Total</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale, i) => <Sale sale={sale} key={i} />)}
            </tbody>
        </table>
    );
}

export default SalesList;
