import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateMemberPage = ({ memberToEdit }) => {
    UpdateMemberPage.propTypes = {
        memberToEdit: PropTypes.func,
        member_name: PropTypes.string,
        member_email: PropTypes.string,
        member_phone_number: PropTypes.string,
    }
    const navigate = useNavigate();
    const [member_name, setName] = useState(memberToEdit.member_name);
    const [member_address, setAddress] = useState(memberToEdit.member_address);
    const [member_email, setEmail] = useState(memberToEdit.member_email);
    const [member_phone_number, setPhone] = useState(memberToEdit.member_phone_number);

    const updateMember = async () => {
        const response = await fetch(`${URL}/members/update`, {
            method: 'PUT',
            body: JSON.stringify({ member_id: memberToEdit.member_id, member_name: member_name, member_address: member_address, member_phone_number: member_phone_number, member_email: member_email }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            navigate('/members');
        } else {
            alert(`Oops! Something went wrong.`);
        }
    };

    return (
        <div>

            <header>
                <h1>Update a member</h1>
                <Navigation />
            </header>
            <p>Update the member below.</p>
            <div>
                <label htmlFor='uMemName'>Name: </label>
                <input
                    id='uMemName'
                    type="text"
                    placeholder="Update name here"
                    value={member_name}
                    onChange={e => setName(e.target.value)} />
                <label htmlFor='uMemAdd'>Address: </label>
                <input
                    id='uMemAdd'
                    type="text"
                    placeholder="Update address here"
                    value={member_address}
                    onChange={e => setAddress(e.target.value)} />
                <label htmlFor='uMemEmail'>Email: </label>
                <input
                    id='uMemEmail'
                    type="text"
                    placeholder="Update email here"
                    value={member_email}
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor='uMemPhone'>Phone Number: </label>
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