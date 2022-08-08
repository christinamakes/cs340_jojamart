import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import ProductSearch from '../components/ProductSearch';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


function ProductsPage({ setProductToEdit }) {
    ProductsPage.propTypes = {
        setProductToEdit: PropTypes.func
    }
    // Data hardcoded for now, dynamic later
    const navigate = useNavigate();

    const onEdit = (product) => {
        setProductToEdit(product)
        navigate('/products/update')
    }

    return (
        <div>
            <header>
                <h1>All JojaMart Products</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our state of the art products at unbeatable prices! Add new products, or adjust information, including but not limited to price (we can always go lower!) and stock.</p>
            </div>
            <ProductSearch onEdit={onEdit} />
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