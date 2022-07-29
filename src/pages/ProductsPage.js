import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import ProductSearch from '../components/ProductSearch';
import { Link } from 'react-router-dom';

function ProductsPage() {
    // Data hardcoded for now, dynamic later
    const prodList = [{'product_name':'Joja Cola','product_price':'75', 'season_code': 'YEAR', 'number_in_stock':'5000','product_id':1},
    {'product_name':'Parsnip Seeds','product_price':'25', 'season_code': 'SPRING', 'number_in_stock':'8000','product_id':2},
    {'product_name':'Cauliflower Seeds','product_price':'100', 'season_code': 'SPRING', 'number_in_stock':'8000','product_id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Products</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our products</p>
            </div>
            <ProductSearch details={prodList} />
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