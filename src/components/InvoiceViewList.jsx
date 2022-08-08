import React from 'react';
import InvoiceView from './InvoiceView';
import PropTypes from 'prop-types';


function InvoiceViewsList({ invoiceViews }) {
    InvoiceViewsList.propTypes = {
        invoiceViews: PropTypes.array,
        //onEdit: PropTypes.func,
    }
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
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default InvoiceViewsList;