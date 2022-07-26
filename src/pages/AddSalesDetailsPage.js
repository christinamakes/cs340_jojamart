import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddSalesDetailsPage = () => {
    const [setProductId] = useState('');
    const [setOrderNumber] = useState('');
    const [quantity, setQuantity] = useState('');
    const [setOrderType] = useState('');

    const addSalesDetail = async () => {
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
            <h1>Add a Sales Details Instance</h1>
            <Navigation />
        </header>
        <div>
            <p>Add a Sales Details Instance on this page</p>
            <label for='saleDetProd'>Product ID: </label>
            <select id='saleDetProd' name='productId' onChange={e => setProductId(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='saleDetOrd'>Order Number: </label>
            <select id='saleDetOrd' name='orderNumber' onChange={e => setOrderNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='saleDetQuant'>Quantity: </label>
            <input
                id='saleDetQuant'
                type="text"
                placeholder="Enter quantity here"
                value={quantity}
                onChange={e => setQuantity(e.target.value)} />
            <label for='saleDetOrdType'>Order Number: </label>
            <select id='saleDetOrdType' name='orderNumber' onChange={e => setOrderType(e.target.value)}>
                <option value='1'>0</option>
                <option value='2'>1</option>
            </select>
            <button
                onClick={addSalesDetail}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddSalesDetailsPage;