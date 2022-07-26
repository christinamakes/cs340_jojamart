import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { Link } from 'react-router-dom';
import AchievementSearch from '../components/AchievementSearchbar';

function AchievementsPage() {
    // Data hardcoded for now, dynamic later
    const achList = [{'title':'loyal_customer','criteria':'Complete 10 purchases from JojaMart','id':1},
    {'title':'first_dollar','criteria':'Complete first purchase from JojaMart','id':2}, {'title':'early_riser','criteria':'Wait outside JojaMart at opening time','id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Achievements</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our achievements</p>
            </div>
            <AchievementSearch details={achList} />
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