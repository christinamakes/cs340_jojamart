import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function DeleteMemberPage() {
    return (
        <div>
            <header>
                <h1>Delete a Member</h1>
                <Navigation />
            </header>
            <div>
                <p>Item will be deleted</p>
                <Link to="/members"><button className='back'>go back</button></Link>
            </div>
        <Footer />
        </div>
    );
}

export default DeleteMemberPage;