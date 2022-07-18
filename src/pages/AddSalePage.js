import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddSalePage = () => {
    const [member, setMember] = useState('');
    const [employee, setEmployee] = useState('');
    const [date, setDate] = useState('');
    const [total, setTotal] = useState('');

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
            <p>Add a sale on this page.</p>
        </header>
        <Navigation />
        <div>
            <input
                type="text"
                placeholder="Enter member here"
                value={member}
                onChange={e => setMember(e.target.value)} />
            <input
                type="text"
                placeholder="Enter employee here"
                value={employee}
                onChange={e => setEmployee(e.target.value)} />
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <input
                type="text"
                placeholder="Enter total here"
                value={total}
                onChange={e => setTotal(e.target.value)} />
            <button
                onClick={addProduct}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddSalePage;