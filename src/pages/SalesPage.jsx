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
            {/* CITATION:
                DATE: 8/8/2022
                Adapted from:
                Source: https://css-tricks.com/the-checkbox-hack/  */}
                <div className='hideable'>
                    <input type={'checkbox'} id='simple'/>
                    <button><label htmlFor='simple' className='hideable'>Simple View</label></button>
                    <div className='show' id='simpleView'>
                        <SalesList sales={sales} onEdit={onEdit}/>
                    </div>
                </div>
                <div className='hideable'>
                    <input type={'checkbox'} id='detailed'/>
                    <button><label htmlFor='detailed' className='hideable'>detailed View</label></button>
                    <div className='show' id='detailedView'>
                        <InvoiceViewsList invoiceViews={invoices}/>
                    </div>
                </div>
                
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-line-item"><button className='add'>Add Sales and/or Sales Details</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default SalesPage;