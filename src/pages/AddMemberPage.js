import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddMemberPage = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const addMember = async () => {
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
            <h1>Add a member</h1>
            <p>Add a member on this page.</p>
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
                placeholder="Enter address here"
                value={address}
                onChange={e => setAddress(e.target.value)} />
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
            <button
                onClick={addMember}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddMemberPage;