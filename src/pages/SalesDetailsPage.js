import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import InvoiceViewsList from '../components/InvoiceViewList';

const URL = 'https://joja-server.herokuapp.com'

function SalesDetailsPage({setSalesDetailToEdit}) {
    // Data hardcoded for now, dynamic later
    const navigate = useNavigate();
    const [salesDetails, setSalesDetails] = useState([])

    // Get sales from /sales
    const loadSalesDetails = async () => {
        const response = await fetch(`${URL}/sales-details`);
        const salesDetails = await response.json();
        setSalesDetails(salesDetails);
    };

    const onEdit = (salesDetail) => {
        setSalesDetailToEdit(salesDetail)
        navigate('/sales-details/update')
    }

    useEffect(() => {
        loadSalesDetails();
    }, []);

    // const saleDetList = [{'sales_details_id': 1, 'product_id': 1, 'order_number': 1, 'quantity': 3, 'order_type': 0},
    //                     {'sales_details_id': 2, 'product_id': 2, 'order_number': 2, 'quantity': 18, 'order_type': 0},
    //                     {'sales_details_id': 3, 'product_id': 3, 'order_number': 2, 'quantity': 18, 'order_type': 0},
    //                     {'sales_details_id': 4, 'product_id': 1, 'order_number': 3, 'quantity': 1, 'order_type': 0}]
    
    // const invoices = [{'order_number': 1, 'member_name': 'Pam', 'product_name': 'Joja Cola', 'product_price': 75, 'quantity': 3, 'invoice_total': 225, 'order_type': 0, 'purchase_date': '2022-03-07'},
    // {'order_number': 2, 'member_name': 'Maxine', 'product_name': 'Parsnip Seeds', 'product_price': 25, 'quantity': 18, 'invoice_total': 2250, 'order_type': 0, 'purchase_date': '2022-03-08'},
    // {'order_number': 2, 'member_name': 'Maxine', 'product_name': 'Cauliflower Seeds', 'product_price': 100, 'quantity': 18, 'invoice_total': 2250, 'order_type': 0, 'purchase_date': '2022-03-08'},
    // {'order_number': 3, 'member_name': 'Carl', 'product_name': 'Joja Cola', 'product_price': 75, 'quantity': 1, 'invoice_total': 75, 'order_type': 0, 'purchase_date': '2022-03-09'}];
    
    return (
        <div>
            <header>
                <h1>All JojaMart Sales Details</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our Sales Details</p>
            </div>
            <InvoiceViewsList invoiceViews={salesDetails} onEdit={onEdit}/>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-line-item"><button className='add'>Add sales detail</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default SalesDetailsPage;