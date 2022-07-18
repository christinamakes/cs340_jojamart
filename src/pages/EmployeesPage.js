import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

function EmployeesPage() {
    return (
        <div>
            <header>
                <h1>All JojaMart Employees</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our employees</p>
            </div>
            <Footer />
        </div>
    );
}

export default EmployeesPage;