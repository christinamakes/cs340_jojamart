import React, { useState } from 'react';
// import { Link} from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddSalePage = () => {
    const [setMember] = useState('');
    const [setEmployee] = useState('');
    const [purchase_date, setDate] = useState('');
    const [invoice_total, setTotal] = useState('');

    const addSale = async () => {
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
            <h1>Add a sale</h1>
            <Navigation />
        </header>
        <div>
            <p>Add a sale on this page.</p>
            <label for='saleMember'>Member ID: </label>
            <select id='saleMember' name='member_id' onChange={e => setMember(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='saleEmployee'>Employee ID: </label>
            <select id='saleEmployee' name='employee_id' onChange={e => setEmployee(e.target.value)}>
                <option value='None'>N/A</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='saleDate'>Date: </label>
            <input
                id='saleDate'
                type="text"
                placeholder="Enter date here"
                value={purchase_date}
                onChange={e => setDate(e.target.value)} />
            <label for='saleTotal'>Invoice Total: </label>
            <input
                id='saleTotal'
                type="text"
                placeholder="Enter total here"
                value={invoice_total}
                onChange={e => setTotal(e.target.value)} />
            <button
                onClick={addSale}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddSalePage;