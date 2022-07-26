import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddMemberAchievementPage = () => {
    const [setAchievementId] = useState('');
    const [setMemberId] = useState('');

    const addMemberAchievement = async () => {
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
            <h1>Add a Member Achievement</h1>
            <Navigation />
        </header>
        <div>
            <p>Add a member achievement on this page</p>
            <label for='memAchA'>Achievement ID: </label>
            <select id='memAchA' name='achievementId' onChange={e => setAchievementId(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <label for='memAchM'>Member ID: </label>
            <select id='memAchM' name='memberId' onChange={e => setMemberId(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <button
                onClick={addMemberAchievement}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddMemberAchievementPage;