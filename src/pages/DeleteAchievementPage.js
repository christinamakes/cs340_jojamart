import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function DeleteAchievementPage() {
    return (
        <div>
            <header>
            </header>
            <Navigation />
            <div>
                <p>Item will be deleted</p>
                <Link to="/achievements"><button className='back'>go back</button></Link>
            </div>
        <Footer />
        </div>
    );
}

export default DeleteAchievementPage;