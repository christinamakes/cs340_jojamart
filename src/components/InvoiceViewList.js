import React from 'react';
import InvoiceView from './InvoiceView';


function InvoiceViewsList({ invoiceViews, onEdit }) {
    return (
        <table id="invoiceViews">
            <thead>
                <tr>
                    <th>Order #</th>
                    <th>Member</th>
                    <th>Employee</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Invoice Total</th>
                    <th>Order Type</th>
                    <th>Purchase Date</th>
                </tr>
            </thead>
            <tbody>
                {invoiceViews.map((invoiceView, i) => <InvoiceView invoiceView={invoiceView}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default InvoiceViewsList;