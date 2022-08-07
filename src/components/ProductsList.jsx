import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';


function ProductsList({ products, onEdit }) {
    ProductsList.propTypes = {
        products: PropTypes.array,
        onEdit: PropTypes.func,
    }
    return (
        <table id="products">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Season Code</th>
                    <th># in Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => <Product product={product}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ProductsList;
