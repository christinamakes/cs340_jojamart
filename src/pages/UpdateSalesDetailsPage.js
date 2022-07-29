import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesDetailsList from '../components/SalesDetailsList';

export const UpdateSalesDetailsPage = () => {
    const [setProductId] = useState('');
    const [setOrderNumber] = useState('');
    const [quantity, setQuantity] = useState('');
    const [setOrderType] = useState('');

    const updateSalesDetails = async () => {
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

    const saleDetList = [{'id': 1, 'productId': 1, 'orderNumber': 1, 'quantity': 3, 'orderType': 0}]

    return (
        <div>

        <header>
            <h1>Update a Sales Details Instance</h1>
            <Navigation />
        </header>
        <p>Update a Sales Details Instance on this page</p>
        <div>
            <p>This is a sample page, if these values don't match the row you clicked to update, it is because they are hard-coded.</p>
            <SalesDetailsList salesDetails={saleDetList}></SalesDetailsList>
        </div>
        <div>
            <label for='uSaleDetProd'>Product ID: </label>
            <select id='uSaleDetProd' name='product_id' onChange={e => setProductId(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='uSaleDetOrd'>Order Number: </label>
            <select id='uSaleDetOrd' name='order_number' onChange={e => setOrderNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='uSaleDetQuant'>Quantity: </label>
            <input
                id='uSaleDetQuant'
                type="text"
                placeholder="Enter quantity here"
                value={quantity}
                onChange={e => setQuantity(e.target.value)} />
            <label for='uSaleDetOrdType'>Order Number: </label>
            <select id='uSaleDetOrdType' name='order_type' onChange={e => setOrderType(e.target.value)}>
                <option value='1'>0</option>
                <option value='2'>1</option>
            </select>
            <button
                onClick={updateSalesDetails}
            >Update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateSalesDetailsPage;