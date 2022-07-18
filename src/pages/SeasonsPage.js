import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function SeasonsPage() {
    return (
        <div>
            <header>
                <h1>All JojaMart Seasons</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our seasons</p>
            </div>
            <Footer />
        </div>
    );
}

export default SeasonsPage;