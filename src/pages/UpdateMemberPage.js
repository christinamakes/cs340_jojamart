import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MembersList from '../components/MembersList';

export const UpdateMemberPage = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const updateMember = async () => {
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

    const memList = [{'name':'Carl','address':'123 Rooster Drive', 'email': 'carl@stardew.com', 'phone':'999-999-9999','id':1}]

    return (
        <div>

        <header>
            <h1>update a member</h1>
            <Navigation />
        </header>
        <p>update a member on this page.</p>
        <div>
            <p>This is a sample page, if these values don't match the row you clicked to update, it is because they are hard-coded.</p>
            <MembersList members={memList}></MembersList>
        </div>
        <div>
        <label for='uMemName'>Name: </label>
            <input
                id='uMemName'
                type="text"
                placeholder="Update name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <label for='uMemAdd'>Address: </label>
            <input
                id='uMemAdd'
                type="text"
                placeholder="Update address here"
                value={address}
                onChange={e => setAddress(e.target.value)} />
            <label for='uMemEmail'>Email: </label>
            <input
                id='uMemEmail'
                type="text"
                placeholder="Update email here"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <label for='uMemPhone'>Phone Number: </label>
            <input
                id='uMemPhone'
                type="text"
                placeholder="Update phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
            <button
                onClick={updateMember}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateMemberPage;