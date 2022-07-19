import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const UpdateSalePage = () => {
    const [member, setMember] = useState('');
    const [employee, setEmployee] = useState('');
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

    return (
        <div>

        <header>
            <h1>update a sale</h1>
            <p>update a sale on this page.</p>
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
                onClick={updateSale}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateSalePage;