import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function MembersPage() {
    return (
        <div>
            <header>
                <h1>View all JojaMart Members Here</h1>
            </header>
            <Navigation />
            <div>
                <p>hello</p>
            </div>
            <Footer />
        </div>
    );
}

export default MembersPage;