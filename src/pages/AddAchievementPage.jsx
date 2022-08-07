import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddAchievementPage = () => {
    const URL = 'https://joja-server.herokuapp.com'
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [criteria, setCriteria] = useState('');

    const addAchievement = async () => {
        const response = await fetch(`${URL}/achievements/add`, {
            method: 'POST',
            body: JSON.stringify({achievement_title:title, achievement_criteria:criteria}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200){
            alert(`Oops! Something went wrong.`)
        }
        navigate('/achievements');
    };

    return (
        <div>

        <header>
            <h1>Add an achievement</h1>
            <Navigation />
        </header>
        <div>
            <p>Add an achievement on this page</p>
            <label for='addTitle'>Title: </label>
            <input
                id='addTitle'
                type="text"
                placeholder="Enter achievement title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <label for='addDesc'>Description: </label>
            <input
                id='addDesc'
                type="textarea"
                placeholder="Enter criteria here"
                value={criteria}
                onChange={e => setCriteria(e.target.value)} />
            <button
                onClick={addAchievement}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddAchievementPage;