import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberAchievementsList from '../components/MemberAchievementsList';
import { Link } from 'react-router-dom';

function MemberAchievementsPage() {
    // Data hardcoded for now, dynamic later
    const memAchList = [{'id': 22, 'achievementId': 2, 'memberId': 2},
                    {'id': 32, 'achievementId': 3, 'memberId': 2},
                    {'id': 31, 'achievementId': 3, 'memberId': 1}]
    return (
        <div>
            <header>
                <h1>All JojaMart Member Achievements</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our Member Achievements</p>
            </div>
            <MemberAchievementsList memberAchievements={memAchList}></MemberAchievementsList>
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