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
                <p>This is the front end implementation of our database app. The tables are filled with sample data, and the forms are placeholders. Nothing except for navigation is fully functional, it is simply there to demonstrate how the app will look.</p>
            </div>
        <Footer />
        </div>
    );
}

export default HomePage;