import React, { useState } from 'react';
// import { Link} from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddSeasonPage = () => {
    const [season_code, setSeason] = useState('');
    const [description, setDescription] = useState('');


    const addSeason = async () => {
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