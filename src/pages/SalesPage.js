import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SalesList from '../components/SalesList';
import InvoiceViewsList from '../components/InvoiceViewList';
import { Link } from 'react-router-dom';

function SalesPage() {
    // Data hardcoded for now, dynamic later
    const saleList = [{'order_number': 1,'member_id':'2', 'employee_id': '3', 'purchase_date':'2022-03-07', 'invoice_total': '225'},
    {'order_number': 2,'member_id':'3', 'employee_id': '3', 'purchase_date':'2022-03-08', 'invoice_total': '2250'},
    {'order_number': 3,'member_id':'1', 'employee_id': '3', 'purchase_date':'2022-03-09', 'invoice_total': '75'}];

    const invoices = [{'order_number': 1, 'member_name': 'Pam', 'product_name': 'Joja Cola', 'product_price': 75, 'quantity': 3, 'invoice_total': 225, 'order_type': 0, 'purchase_date': '2022-03-07'},
    {'order_number': 2, 'member_name': 'Maxine', 'product_name': 'Parsnip Seeds', 'product_price': 25, 'quantity': 18, 'invoice_total': 2250, 'order_type': 0, 'purchase_date': '2022-03-08'},
    {'order_number': 2, 'member_name': 'Maxine', 'product_name': 'Cauliflower Seeds', 'product_price': 100, 'quantity': 18, 'invoice_total': 2250, 'order_type': 0, 'purchase_date': '2022-03-08'},
    {'order_number': 3, 'member_name': 'Carl', 'product_name': 'Joja Cola', 'product_price': 75, 'quantity': 1, 'invoice_total': 75, 'order_type': 0, 'purchase_date': '2022-03-09'}];

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
                        <Link to="/add-line-item"><button className='add'>Add sale</button></Link>
                    </li>
                </ul>
            </div>
            <div>
                <p>We would like feedback on using this join table for a more useful view of SalesDetails information. We've placed this component on the Sales page and the SalesDetails page in addition to the regular tables for those pages. This table is not yet dynamic.</p>
                <InvoiceViewsList invoiceViews={invoices} />
            </div>
            <Footer />
        </div>
    );
}

export default SalesPage;