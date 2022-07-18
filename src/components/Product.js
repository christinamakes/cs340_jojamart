import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Product({ product, onDelete, onEdit }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.season}</td>
            <td>{product.stockNum}</td>
            <td className='click'>< AiOutlineEdit onClick={null} /></td>
            <td className='click'>< AiOutlineDelete onClick={null} /></td>
        </tr>
    );
}

export default Product;