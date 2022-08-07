import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// import ProductsList from '../components/ProductsList';
const URL = 'https://joja-server.herokuapp.com'

export const UpdateProductPage = ({ productToEdit }) => {
    UpdateProductPage.propTypes = {
        productToEdit: PropTypes.func,
        product_name: PropTypes.string,
        product_price: PropTypes.string,
        number_in_stock: PropTypes.string,
        season_code: PropTypes.string
    }
    const navigate = useNavigate();
    const [product_name, setName] = useState(productToEdit.product_name);
    const [product_price, setPrice] = useState(productToEdit.product_price);
    const [season_code, setSeason] = useState(productToEdit.season_code);
    const [number_in_stock, setStockNum] = useState(productToEdit.number_in_stock);

    const [seasons, setSeasons] = useState([])

    const loadSeasons = async () => {
        const response = await fetch(`${URL}/seasons`);
        const seasons = await response.json();
        setSeasons(seasons);
    };

    const updateProduct = async () => {
        const response = await fetch(`${URL}/products/update`, {
            method: 'PUT',
            body: JSON.stringify({ product_id: productToEdit.product_id, product_name: product_name, product_price: product_price, season_code: season_code, number_in_stock: number_in_stock }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            navigate('/products');
        } else {
            alert(`Oops! Something went wrong.`);
        }

    };

    useEffect(() => {
        loadSeasons();
    }, []);

    return (
        <div>

            <header>
                <h1>update a product</h1>
                <Navigation />
            </header>
            <p>update a product on this page.</p>
            <div>
                {/* <p>This is a sample page, if these values don't match the row you clicked to update, it is because they are hard-coded.</p>
            <ProductsList products={products}></ProductsList> */}
            </div>
            <div>
                <label htmlFor='uProdName'>Name: </label>
                <input
                    id='uProdName'
                    type="text"
                    placeholder="Update name here"
                    value={product_name}
                    onChange={e => setName(e.target.value)} />
                <label htmlFor='uProdPrice'>Price: </label>
                <input
                    id='uProdPrice'
                    type="text"
                    placeholder="Update price here"
                    value={product_price}
                    onChange={e => setPrice(e.target.value)} />
                <label htmlFor='uProdSea'>Season Code: </label>
                <select id='uProdSea' name='season_code' value ={season_code} onChange={e => setSeason(e.target.value)}>
                {seasons.map((season, i) => <option value={season.season_code} key={i}>{season.season_code}</option>)}
                </select>
                <label htmlFor='uProdStock'>Number in Stock: </label>
                <input
                    id='uProdStock'
                    type="text"
                    placeholder="Update number in stock"
                    value={number_in_stock}
                    onChange={e => setStockNum(e.target.value)} />
                <button
                    onClick={updateProduct}
                >update</button>
            </div>
            <Footer />
        </div>
    );
}

export default UpdateProductPage;