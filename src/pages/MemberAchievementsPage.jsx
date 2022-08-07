import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberAchievementsList from '../components/MemberAchievementsList';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

function MemberAchievementsPage() {
    // Data hardcoded for now, dynamic later
 

    const [memAchs, setMemAchs] = useState([])

    const URL = 'https://joja-server.herokuapp.com'

    // get members from /members
    const loadMemAchs = async () => {
        const response = await fetch(`${URL}/member-achievements`);
        const memAchs = await response.json();
        setMemAchs(memAchs);
    }

    useEffect(() => {
        loadMemAchs();
    }, []);

    return (
        <div>
            <header>
                <h1>All JojaMart Member Achievements</h1>
                <Navigation />
            </header>
            <div>
                <p>These are the achievements of our valued members. Members with more achievements are, of course, more valued by me. I mean the company.</p>
            </div>
            <MemberAchievementsList memberAchievements={memAchs}></MemberAchievementsList>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-member-achievement"><button className='add'>Add member achievement</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default MemberAchievementsPage;