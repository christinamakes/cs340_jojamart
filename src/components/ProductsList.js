import React from 'react';
import Product from './Product';


function ProductsList({ products, onDelete, onEdit }) {
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
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ProductsList;
