import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateProductPage = (productToEdit) => {
    const navigate = useNavigate();
    const [product_name, setName] = useState('');
    const [product_price, setPrice] = useState('');
    const [season_code, setSeason] = useState('');
    const [number_in_stock, setStockNum] = useState('');

    const updateProduct = async () => {
        const response = await fetch(`${URL}/products/update`, {
            method: 'PUT',
            body: JSON.stringify({product_id:productToEdit.product_id, product_name:product_name, product_price:product_price, season_code:season_code, number_in_stock:number_in_stock}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status !== 200){
            alert(`Oops! Something went wrong.`);
        }
        navigate('/products');
    };

    return (
        <div>

        <header>
            <h1>update a product</h1>
            <Navigation />
        </header>
        <p>update a product on this page.</p>
        <div>
            <p>This is a sample page, if these values don't match the row you clicked to update, it is because they are hard-coded.</p>
            <ProductsList products={prodList}></ProductsList>
        </div>
        <div>
        <label for='uProdName'>Name: </label>
            <input
                id='uProdName'
                type="text"
                placeholder="Update name here"
                value={product_name}
                onChange={e => setName(e.target.value)} />
            <label for='uProdPrice'>Price: </label>
            <input
                id='uProdPrice'
                type="text"
                placeholder="Update price here"
                value={product_price}
                onChange={e => setPrice(e.target.value)} />
            <label for='uProdSea'>Season Code: </label>
            <select id='uProdSea' name='season_code' onChange={e => setSeason(e.target.value)}>
                <option value='YEAR'>YEAR</option>
                <option value='SPRING'>SPRING</option>
                <option value='SUMMER'>SUMMER</option>
                <option value='FALL'>FALL</option>
            </select>
            <label for='uProdStock'>Number in Stock: </label>
            <input
                id='uProdStock'
                type="text"
                placeholder="Update number in stock"
                value={number_in_stock}
                onChange={e => setStockNum(e.target.value)} />
            <button
                onClick={updateProduct}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateProductPage;