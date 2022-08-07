import React from 'react';
import { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { Link } from 'react-router-dom';
import AchievementsList from '../components/AchievementsList'

function AchievementsPage() {
    const URL = 'https://joja-server.herokuapp.com'
    const [achievements, setAchievements] = useState([])

    const loadAchievements = async () => {
        const response = await fetch(`${URL}/achievements`);
        const achievements = await response.json();
        setAchievements(achievements);
    };

    useEffect(() => {
        loadAchievements()
    },[]);


    return (
        <div>
            <header>
                <h1>All JojaMart Achievements</h1>
                <Navigation />
            </header>
            <div>
                <p>These are achievements that our members are eligible to earn (primarily by spending money at Joja Mart!).</p>
            </div>
            <AchievementsList achievements={achievements}/>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-achievement"><button className='add'>Add achievement</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default AchievementsPage;