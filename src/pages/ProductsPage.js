import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import ProductsList from '../components/ProductsList';
import { Link } from 'react-router-dom';

function ProductsPage() {
    // Data hardcoded for now, dynamic later
    const prodList = [{'name':'Joja Cola','price':'75', 'season': 'YEAR', 'stockNum':'5000','id':1},
    {'name':'Parsnip Seeds','price':'25', 'season': 'SPRING', 'stockNum':'8000','id':2},
    {'name':'Cauliflower Seeds','price':'100', 'season': 'SPRING', 'stockNum':'8000','id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Products</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our products</p>
            </div>
            <ProductsList products={prodList}/>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-product"><button className='add'>Add product</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default ProductsPage;