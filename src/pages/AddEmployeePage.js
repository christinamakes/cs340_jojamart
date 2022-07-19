import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddEmployeePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [wage, setWage] = useState('');

    const addEmployee = async () => {
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
            <h1>Add an employee</h1>
            <p>Add an employee on this page.</p>
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
                placeholder="Enter email here"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="text"
                placeholder="Enter phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
            <input
                type="text"
                placeholder="Enter wage here"
                value={wage}
                onChange={e => setWage(e.target.value)} />
            <button
                onClick={addEmployee}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddEmployeePage;