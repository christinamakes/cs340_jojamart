import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function AchievementsPage() {
    return (
        <div>
            <header>
                <h1>All JojaMart Achievements</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our achievements</p>
            </div>
            <Footer />
        </div>
    );
}

export default AchievementsPage;