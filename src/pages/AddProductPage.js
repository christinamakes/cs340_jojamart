import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddProductPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [season, setSeason] = useState('');
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
            <p>Add a product on this page.</p>
        </header>
        <Navigation />
        <div>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="text"
                placeholder="Enter price here"
                value={price}
                onChange={e => setPrice(e.target.value)} />
            <input
                type="text"
                placeholder="Enter season here"
                value={season}
                onChange={e => setSeason(e.target.value)} />
            <input
                type="text"
                placeholder="Enter wage here"
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