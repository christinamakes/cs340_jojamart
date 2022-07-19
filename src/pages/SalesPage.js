import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesList from '../components/SalesList';

function SalesPage() {
    const saleList = [{'id': 1,'member':'2', 'employee': '3', 'date':'2022-03-07', 'total': '225'},
    {'id': 2,'member':'3', 'employee': '3', 'date':'2022-03-08', 'total': '2250'},
    {'id': 3,'member':'1', 'employee': '3', 'date':'2022-03-09', 'total': '75'}]
    return (
        <div>
            <header>
                <h1>All JojaMart Sales</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our sales</p>
            </div>
            <SalesList sales={saleList}/>
            <Footer />
        </div>
    );
}

export default SalesPage;