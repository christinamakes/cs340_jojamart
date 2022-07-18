import React from 'react';
import Sale from './Sale';


function SalesList({ sales, onDelete, onEdit }) {
    return (
        <table id="sales">
            <thead>
                <tr>
                    <th>order_number</th>
                    <th>member_id</th>
                    <th>employee_id</th>
                    <th>purchase_date</th>
                    <th>invoice_total</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale, i) => <Sale sale={sale}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default SalesList;
