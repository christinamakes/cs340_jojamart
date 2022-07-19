import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Product({ product, onDelete, onEdit }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.season}</td>
            <td>{product.stockNum}</td>
            <td className='click'><Link to="/update-product"><AiOutlineEdit onClick={null} /></Link></td>
            <td className='click'><Link to="/delete-product"><AiOutlineDelete onClick={null} /></Link></td>
        </tr>
    );
}

export default Product;