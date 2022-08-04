import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddSeasonPage = () => {
    const URL = 'https://joja-server.herokuapp.com'
    const navigate = useNavigate();
    const [season_code, setSeason] = useState('');
    const [description, setDescription] = useState('');

    const addSeason = async () => {
        const response = await fetch(`${URL}/seasons/add`, {
            method: 'POST',
            body: JSON.stringify({season_code:season_code, description:description}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status !== 200) {
            alert(`Oops! Something went wrong.`);
        }
        navigate('/seasons');
    };

    return (
        <div>

        <header>
            <h1>Add a season</h1>
            <Navigation />
        </header>
        <div>
            <p>Add a season on this page.</p>
            <label for='seaCode'>Season Code: </label>
            <input
                id='seaCode'
                type="text"
                placeholder="Enter Season Code here"
                value={season_code}
                onChange={e => setSeason(e.target.value)} />
            <label for='seaDesc'>Description: </label>
            <input
                id='seaDesc'
                type="text"
                placeholder="Enter description here"
                value={description}
                onChange={e => setDescription(e.target.value)} />
            <button
                onClick={addSeason}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddSeasonPage;