import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddProductPage = () => {
    const URL = 'https://joja-server.herokuapp.com'
    const navigate = useNavigate();
    const [product_name, setName] = useState('');
    const [product_price, setPrice] = useState('');
    const [season_code, setSeason] = useState('');
    const [number_in_stock, setStockNum] = useState('');

    const [seasons, setSeasons] = useState([])

    const loadSeasons = async () => {
        const response = await fetch(`${URL}/seasons`);
        const seasons = await response.json();
        setSeasons(seasons);
    };

    const addProduct = async () => {
        const response = await fetch(`${URL}/products/add`, {
            method: 'POST',
            body: JSON.stringify({ product_name: product_name, product_price: product_price, season_code: season_code, number_in_stock: number_in_stock }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status !== 200) {
            alert(`Oops! Something went wrong.`);
        }
        navigate('/products')
    };

    useEffect(() => {
        loadSeasons();
    }, []);

    return (
        <div>

        <header>
            <h1>Add a product</h1>
            <Navigation />
        </header>
        <div>
            <p>Add a product on this page.</p>
            <label for='prodName'>Name: </label>
            <input
                id='prodName'
                type="text"
                placeholder="Enter name here"
                value={product_name}
                onChange={e => setName(e.target.value)} />
            <label for='prodPrice'>Price: </label>
            <input
                id='prodPrice'
                type="text"
                placeholder="Enter price here"
                value={product_price}
                onChange={e => setPrice(e.target.value)} />
            <label for='prodSea'>Season Code: </label>
            <select id='prodSea' name='season_code' onChange={e => setSeason(e.target.value)}>
                {seasons.map((season, i) => <option value={season.season_code} key={i}>{season.season_code}</option>)}
            </select>
            <label for='prodStock'>Number in Stock: </label>
            <input
                id='prodStock'
                type="text"
                placeholder="Enter number in stock"
                value={number_in_stock}
                onChange={e => setStockNum(e.target.value)} />
            <button
                onClick={addProduct}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddProductPage;