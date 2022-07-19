import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import ProductsList from '../components/ProductsList';

function ProductsPage() {
    const prodList = [{'name':'Joja Cola','price':'75', 'season': 'YEAR', 'stockNum':'5000','id':1},
    {'name':'Parsnip Seeds','price':'25', 'season': 'SPRING', 'stockNum':'8000','id':2},
    {'name':'Cauliflower Seeds','price':'100', 'season': 'SPRING', 'stockNum':'8000','id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Products</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our products</p>
            </div>
            <ProductsList products={prodList}/>
            <Footer />
        </div>
    );
}

export default ProductsPage;