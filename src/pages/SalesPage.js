import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesList from '../components/SalesList';
import { Link } from 'react-router-dom';

function SalesPage() {
    // Data hardcoded for now, dynamic later
    const saleList = [{'id': 1,'member':'2', 'employee': '3', 'date':'2022-03-07', 'total': '225'},
    {'id': 2,'member':'3', 'employee': '3', 'date':'2022-03-08', 'total': '2250'},
    {'id': 3,'member':'1', 'employee': '3', 'date':'2022-03-09', 'total': '75'}]
    return (
        <div>
            <header>
                <h1>All JojaMart Sales</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our sales</p>
            </div>
            <SalesList sales={saleList}/>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-sale"><button className='add'>Add sale</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default SalesPage;