import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MembersList from '../components/MembersList';
import { useNavigate } from 'react-router-dom';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateMemberPage = ({members}) => {
    const navigate = useNavigate();
    const [member_name, setName] = useState('');
    const [member_address, setAddress] = useState('');
    const [member_email, setEmail] = useState('');
    const [member_phone_number, setPhone] = useState('');
    const [member_id, setId] = useState('')

    const updateMember = async () => {
        const response = await fetch(`${URL}/update-member`, {
            method: 'PUT',
            body: JSON.stringify({member_id:member_id,member_name:member_name, member_address:member_address, member_phone_number:member_phone_number, member_email:member_email}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200){
            navigate('/members');
        } else {
            alert(`Oops, exercise creation failed!`);
        }
    };

    const memList = [{'member_name':'Carl','member_address':'123 Rooster Drive', 'member_email': 'carl@stardew.com', 'member_phone_number':'999-999-9999','member_id':1}]

    return (
        <div>

        <header>
            <h1>update a member</h1>
            <Navigation />
        </header>
        <p>update a member on this page.</p>
        <div>
            <p>This is a sample preview of the member to edit, if these values don't match the row you clicked to update, it is because they are hard-coded. In the final version, this will dynamically show the member you are editing.</p>
            <MembersList members={memList}></MembersList>
        </div>
        <div>
        <label for='uMemID'>ID: </label>
            <input
                id='uMemID'
                type="number"
                placeholder="Enter ID"
                value={member_id}
                onChange={e => setId(e.target.value)} />
        <label for='uMemName'>Name: </label>
            <input
                id='uMemName'
                type="text"
                placeholder="Update name here"
                value={member_name}
                onChange={e => setName(e.target.value)} />
            <label for='uMemAdd'>Address: </label>
            <input
                id='uMemAdd'
                type="text"
                placeholder="Update address here"
                value={member_address}
                onChange={e => setAddress(e.target.value)} />
            <label for='uMemEmail'>Email: </label>
            <input
                id='uMemEmail'
                type="text"
                placeholder="Update email here"
                value={member_email}
                onChange={e => setEmail(e.target.value)} />
            <label for='uMemPhone'>Phone Number: </label>
            <input
                id='uMemPhone'
                type="text"
                placeholder="Update phone number here"
                value={member_phone_number}
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