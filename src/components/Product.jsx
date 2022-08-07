import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Product({ product, onEdit }) {
    Product.propTypes = {
        product: PropTypes.array,
        onEdit: PropTypes.func,
    }
    return (
        <tr>
            <td>{product.product_id}</td>
            <td>{product.product_name}</td>
            <td>{product.product_price}</td>
            <td>{product.season_code}</td>
            <td>{product.number_in_stock}</td>
            <td className='click'><Link to="/update-product"><AiOutlineEdit onClick={() => onEdit(product)} /></Link></td>
        </tr>
    );
}

export default Product;