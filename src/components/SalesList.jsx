import React from 'react';
import Sale from './Sale';


function SalesList({ sales, onEdit }) {
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
                {sales.map((sale, i) => <Sale sale={sale} onEdit={onEdit} key={i} />)}
            </tbody>
        </table>
    );
}

export default SalesList;
