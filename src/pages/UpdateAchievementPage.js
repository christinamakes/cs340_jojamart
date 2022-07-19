import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const UpdateAchievementPage = () => {
    const [title, setTitle] = useState('');
    const [criteria, setCriteria] = useState('');

    const updateAchievement = async () => {
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
            <h1>update an achievement</h1>
            <p>update an achievement on this page</p>
        </header>
        <Navigation />
        <div>
            <input
                type="text"
                placeholder="Enter achievement title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="textarea"
                placeholder="Enter criteria here"
                value={criteria}
                onChange={e => setCriteria(e.target.value)} />
            <button
                onClick={updateAchievement}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateAchievementPage;