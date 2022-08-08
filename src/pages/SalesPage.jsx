import React from 'react';

import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesList from '../components/SalesList';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import InvoiceViewsList from '../components/InvoiceViewList';

const URL = 'https://joja-server.herokuapp.com'

function SalesPage({setSaleToEdit}) {
    SalesPage.propTypes = {
        setSaleToEdit: PropTypes.func
    }
    // Data hardcoded for now, dynamic later

    const navigate = useNavigate();
    const [sales, setSales] = useState([])
    const [invoices, setInvoices] = useState([])

    const loadSales = async () => {
        const response = await fetch(`${URL}/sales/s`);
        const sales = await response.json();
        setSales(sales);
    }

    const loadInvoices = async () => {
        const response = await fetch(`${URL}/invoices`);
        const invoices = await response.json();
        setInvoices(invoices);
    }

    const onEdit = (sale) => {
        setSaleToEdit(sale)
        navigate('/sales/update-s')
    }

    useEffect(() => {
        loadSales();
        loadInvoices();
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
                <button className='hide' id='hideButton'>Simple View</button>
                <button className='show' id='showButton'>Detailed View</button>
            <div className='hideable' id='detailedView'>
                <InvoiceViewsList invoiceViews={invoices}/>
            </div>
            <div className='hideable' id='simpleView'>
                <SalesList sales={sales} onEdit={onEdit}/>
            </div>
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