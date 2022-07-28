import React from 'react';
import SalesDetail from './SalesDetail';


function SalesDetailsList({ salesDetails }) {
    return (
        <table id="salesDetails">
            <thead>
                <tr>
                    <th>Sales-Details ID</th>
                    <th>Product ID</th>
                    <th>Order Number</th>
                    <th>Quantity</th>
                    <th>Order Type</th>
                </tr>
            </thead>
            <tbody>
                {salesDetails.map((salesDetail, i) => <SalesDetail salesDetail={salesDetail}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default SalesDetailsList;