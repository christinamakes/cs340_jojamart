import React from 'react';
import InvoiceView from './InvoiceView';


function InvoiceViewsList({ invoiceViews }) {
    return (
        <table id="invoiceViews">
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Member Name</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Quantity</th>
                    <th>Invoice Total</th>
                    <th>Order Type</th>
                    <th>Purchase Date</th>
                </tr>
            </thead>
            <tbody>
                {invoiceViews.map((invoiceView, i) => <InvoiceView invoiceView={invoiceView}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default InvoiceViewsList;