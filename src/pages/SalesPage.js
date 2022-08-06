import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesList from '../components/SalesList';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

const URL = 'https://joja-server.herokuapp.com'

function SalesPage() {
    // Data hardcoded for now, dynamic later
    const [sales, setSales] = useState([])

    const loadSales = async () => {
        const response = await fetch(`${URL}/sales/s`);
        const sales = await response.json();
        setSales(sales);
    }

    useEffect(() => {
        loadSales();
    }, []);

    return (
        <div>
            <header>
                <h1>All JojaMart Sales</h1>
                <Navigation />
            </header>
            <div>
                <p>Here we have records of our highly profitable sales! Add additional transactions.</p>
            </div>
            <SalesList sales={sales}/>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-line-item"><button className='add'>Add sale</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default SalesPage;