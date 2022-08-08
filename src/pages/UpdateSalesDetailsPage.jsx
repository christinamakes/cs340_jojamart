import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateSalesDetailsPage = ({ salesDetailToEdit }) => {
    UpdateSalesDetailsPage.propTypes = {
        salesDetailToEdit: PropTypes.object,
        sales_details_id: PropTypes.string,
        order_number: PropTypes.string
    }
    const navigate = useNavigate();
    const [product_id, setProductId] = useState(salesDetailToEdit.product_id);
    const [order_number, setOrderNumber] = useState(salesDetailToEdit.order_number);
    const [quantity, setQuantity] = useState(salesDetailToEdit.quantity);
    const [order_type, setOrderType] = useState(salesDetailToEdit.order_type);

    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);

    // Get products from /products
    const loadProducts = async () => {
        const response = await fetch(`${URL}/products`);
        const products = await response.json();
        setProducts(products);
    };

    // Get sales from /sales
    const loadSales = async () => {
        const response = await fetch(`${URL}/sales/s`);
        const sales = await response.json();
        setSales(sales);
    };

    const updateSalesDetail = async () => {
        const response = await fetch(`${URL}/sales-details/update-sd`, {
            method: 'PUT',
            body: JSON.stringify({ sales_details_id: salesDetailToEdit.sales_details_id, product_id: product_id, order_number: order_number, quantity: quantity, order_type: order_type }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            alert(`Sales Details updated successfully.`);
            navigate('/sales-details');
        } else {
            alert(`Oops! Something went wrong with updating Sales Details.`);
        }
    };

    useEffect(() => {
        loadProducts();
        loadSales();
    }, []);

    return (
        <div>

            <header>
                <h1>Update a Sales Details Instance</h1>
                <Navigation />
            </header>
            <p>Update a Sales Details Instance on this page</p>
            <div>
                <div>
                    <label htmlFor='uSaleDetProd'>Product ID: </label>
                    <select id='uSaleDetProd' name='product_id' value={product_id} onChange={e => setProductId(e.target.value)}>
                        <option value='Select a Product'> -- Select a Product -- </option>
                        {products.map((product, i) => <option value={product.product_id} key={i}>{product.product_id + ' -- ' + product.product_name}</option>)}
                    </select>

                    <label htmlFor='uSaleDetOrd'>Order Number: </label>
                    <select id='uSaleDetOrd' name='order_number' value={order_number} onChange={e => setOrderNumber(e.target.value)}>
                        <option value='Select an Order Number'> -- Select an Order Number -- </option>
                        {sales.map((sale, i) => <option value={sale.order_number} key={i}>{sale.order_number}</option>)}
                    </select>
                    <label htmlFor='uSaleDetQuant'>Quantity: </label>
                    <input
                        id='uSaleDetQuant'
                        type="text"
                        placeholder="Enter quantity here"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)} />
                    <label htmlFor='uSaleDetOrdType'>Order Type: </label>
                    <select id='uSaleDetOrdType' name='order_type' value={order_type} onChange={e => setOrderType(e.target.value)}>
                        <option value='0'>0 - In Person</option>
                        <option value='1'>1 - Online</option>
                    </select>
                    <button
                        onClick={updateSalesDetail}
                    >Update</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default UpdateSalesDetailsPage;