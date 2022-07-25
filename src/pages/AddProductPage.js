import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddProductPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [setSeason] = useState('');
    const [stockNum, setStockNum] = useState('');

    const addProduct = async () => {
        // const response = await fetch('/exercises', {
        //     method: 'POST',
        //     body: JSON.stringify({name:name, reps:reps, weight:weight, unit:unit, date:date}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        // if (response.status === 200){
        //     alert('Added exercise!');
        // } else {
        //     alert(`Oops, exercise creation failed!`);
        // }
        // history.push("/");
    };

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
                value={name}
                onChange={e => setName(e.target.value)} />
            <label for='prodPrice'>Price: </label>
            <input
                id='prodPrice'
                type="text"
                placeholder="Enter price here"
                value={price}
                onChange={e => setPrice(e.target.value)} />
            <label for='prodSea'>Season Code: </label>
            <select id='prodSea' name='season' onChange={e => setSeason(e.target.value)}>
                <option value='YEAR'>YEAR</option>
                <option value='SPRING'>SPRING</option>
                <option value='SUMMER'>SUMMER</option>
                <option value='FALL'>FALL</option>
            </select>
            <label for='prodStock'>Number in Stock: </label>
            <input
                id='prodStock'
                type="text"
                placeholder="Enter number in stock"
                value={stockNum}
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