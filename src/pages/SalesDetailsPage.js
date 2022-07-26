import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesDetailsList from '../components/SalesDetailsList';
import { Link } from 'react-router-dom';

function SalesDetailsPage() {
    // Data hardcoded for now, dynamic later
    const saleDetList = [{'id': 1, 'productId': 1, 'orderNumber': 1, 'quantity': 3, 'orderType': 0},
                        {'id': 2, 'productId': 2, 'orderNumber': 2, 'quantity': 18, 'orderType': 0},
                        {'id': 3, 'productId': 3, 'orderNumber': 2, 'quantity': 18, 'orderType': 0},
                        {'id': 4, 'productId': 1, 'orderNumber': 3, 'quantity': 1, 'orderType': 0}]
    return (
        <div>
            <header>
                <h1>All JojaMart Sales Details</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our Sales Details</p>
            </div>
            <SalesDetailsList salesDetails={saleDetList}></SalesDetailsList>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-sales-detail"><button className='add'>Add sales detail</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default SalesDetailsPage;