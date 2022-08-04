import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import ProductSearch from '../components/ProductSearch';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

const URL = 'https://joja-server.herokuapp.com'

function ProductsPage({setProductToEdit}) {
    // Data hardcoded for now, dynamic later
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // Get products from /products
    const loadProducts = async () => {
        const response = await fetch(`${URL}/products`);
        const products = await response.json();
        setProducts(products);
    }

    const onEdit = (product) => {
        setProductToEdit(product)
        navigate('/products/update')
    }
    // loadProducts from fetch
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <header>
                <h1>All JojaMart Products</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our products</p>
            </div>
            <ProductSearch details={products} onEdit={onEdit} />
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