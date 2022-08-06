import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function HomePage() {
    return (
        <div>
            <header>
                <h1>Welcome to JojaMart</h1>
                <Navigation />
            </header>
            <div id='intro-blurb'>
                <p>Welcome to the Stardew Valley Joja Mart Database. Here, we can track our valued Joja Mart Members (as well as their Achievements), and our hard-working Employees. We can also track our state of the art Products, and our highly profitable Sales (With Details of course!).</p>
                <p>Tracking this data will provide insight into how we can expand our business in the budding town of Stardew Valley.</p>
                <p>If you have any inquiries on best practices using this database... You probably do not need administrative access anyway.</p>
                <p>- Morris</p>
            </div>
        <Footer />
        </div>
    );
}

export default HomePage;