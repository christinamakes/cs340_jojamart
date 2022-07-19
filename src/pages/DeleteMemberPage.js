import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function DeleteMemberPage() {
    return (
        <div>
            <header>
            </header>
            <Navigation />
            <div>
                <p>Item will be deleted</p>
                <Link to="/members"><button className='back'>go back</button></Link>
            </div>
        <Footer />
        </div>
    );
}

export default DeleteMemberPage;