import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddAchievementPage = () => {
    const [title, setTitle] = useState('');
    const [criteria, setCriteria] = useState('');

    const addAchievement = async () => {
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