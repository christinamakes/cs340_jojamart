import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import AchievementsList from '../components/AchievementsList';

function AchievementsPage() {
    const achList = [{'title':'my first','criteria':'this is the criteria','id':1},
    {'title':'my second','criteria':'this is the criteria','id':2}, {'title':'my third','criteria':'this is the criteria','id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Achievements</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our achievements</p>
            </div>
            <AchievementsList achievements={achList}/>
            <Footer />
        </div>
    );
}

export default AchievementsPage;