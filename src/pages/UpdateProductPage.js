import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import ProductsList from '../components/ProductsList';

export const UpdateProductPage = () => {
    const [product_name, setName] = useState('');
    const [product_price, setPrice] = useState('');
    const [setSeason] = useState('');
    const [number_in_stock, setStockNum] = useState('');

    const updateProduct = async () => {
        // const response = await fetch('/exercises', {
        //     method: 'POST',
        //     body: JSON.stringify({name:name, reps:reps, weight:weight, unit:unit, date:date}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        // if (response.status === 200){
        //     alert('updateed exercise!');
        // } else {
        //     alert(`Oops, exercise creation failed!`);
        // }
        // history.push("/");
    };

    const prodList = [{'name':'Joja Cola','price':'75', 'season': 'YEAR', 'stockNum':'5000','id':1}]

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