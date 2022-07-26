import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesList from '../components/SalesList';

export const UpdateSalePage = () => {
    const [setMember] = useState('');
    const [setEmployee] = useState('');
    const [date, setDate] = useState('');
    const [total, setTotal] = useState('');

    const updateSale = async () => {
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

    const saleList = [{'id': 1,'member':'2', 'employee': '3', 'date':'2022-03-07', 'total': '225'}]

    return (
        <div>
        <header>
            <h1>update a sale</h1>
            <Navigation />
        </header>
        <p>update a sale on this page.</p>
        <div>
            <p>This is a sample page, if these values don't match the row you clicked to update, it is because they are hard-coded.</p>
            <SalesList sales={saleList}></SalesList>
        </div>
        <div>
        <label for='uSaleMember'>Member ID: </label>
            <select id='uSaleMember' name='member' onChange={e => setMember(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='uSaleEmployee'>Employee ID: </label>
            <select id='uSaleEmployee' name='employee' onChange={e => setEmployee(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='uSaleDate'>Date: </label>
            <input
                id='uSaleDate'
                type="text"
                placeholder="Update date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <label for='uSaleTotal'>Invoice Total: </label>
            <input
                id='uSaleTotal'
                type="text"
                placeholder="Update total here"
                value={total}
                onChange={e => setTotal(e.target.value)} />
            <button
                onClick={updateSale}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateSalePage;