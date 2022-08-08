import React from 'react';
import SalesDetail from './SalesDetail';
import PropTypes from 'prop-types';


function SalesDetailsList({ salesDetails, onEdit }) {
    SalesDetailsList.propTypes = {
        salesDetails: PropTypes.array,
        onEdit: PropTypes.func
    }
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
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default SalesDetailsList;