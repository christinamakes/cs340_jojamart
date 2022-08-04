import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Product({ product, onDelete, onEdit }) {
    return (
        <tr>
            <td>{product.product_id}</td>
            <td>{product.product_name}</td>
            <td>{product.product_price}</td>
            <td>{product.season_code}</td>
            <td>{product.number_in_stock}</td>
            <td className='click'><Link to="/update-product"><AiOutlineEdit onClick={() => onEdit(product)} /></Link></td>
            <td className='click'><Link to="/delete-product"><AiOutlineDelete onClick={() => onDelete(product.product_id)} /></Link></td>
        </tr>
    );
}

export default Product;