import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const UpdateEmployeePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [wage, setWage] = useState('');

    const updateEmployee = async () => {
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
            <h1>update an employee</h1>
            <p>update an employee on this page.</p>
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
                onClick={updateEmployee}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateEmployeePage;