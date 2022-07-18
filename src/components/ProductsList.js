import React from 'react';
import Product from './Product';


function ProductsList({ products, onDelete, onEdit }) {
    return (
        <table id="products">
            <thead>
                <tr>
                    <th>product_id</th>
                    <th>product_name</th>
                    <th>product_price</th>
                    <th>season_code</th>
                    <th>number_in_stock</th>
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
