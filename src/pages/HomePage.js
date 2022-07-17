import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function HomePage() {
    return (
        <div>
            <header>
                <h1>Welcome to JojaMart</h1>
            </header>
            <Navigation />
            <div>
                <p>hello</p>
            </div>
        <Footer />
        </div>
    );
}

export default HomePage;