import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddMemberPage = () => {
    const navigate = useNavigate();
    const [member_name, setName] = useState('');
    const [member_address, setAddress] = useState('');
    const [member_email, setEmail] = useState('');
    const [member_phone_number, setPhone] = useState('')

    const addMember = async () => {
        const response = await fetch('/add-member', {
            method: 'POST',
            body: JSON.stringify({member_name:member_name, member_address:member_address, member_phone_number:member_phone_number, member_email:member_email}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status !== 200){
            alert(`Oops, something went wrong!`);
        }
        navigate("/members");
    };

    return (
        <div>

        <header>
            <h1>Add a member</h1>
            <Navigation />
        </header>
        <div>
            <p>Add a member on this page.</p>
            <label for='memName'>Name: </label>
            <input
                id='memName'
                type="text"
                placeholder="Enter name here"
                value={member_name}
                onChange={e => setName(e.target.value)} />
            <label for='memAdd'>Address: </label>
            <input
                id='memAdd'
                type="text"
                placeholder="Enter address here"
                value={member_address}
                onChange={e => setAddress(e.target.value)} />
            <label for='memEmail'>Email: </label>
            <input
                id='memEmail'
                type="text"
                placeholder="Enter email here"
                value={member_email}
                onChange={e => setEmail(e.target.value)} />
            <label for='memPhone'>Phone Number: </label>
            <input
                id='memPhone'
                type="text"
                placeholder="Enter phone number here"
                value={member_phone_number}
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