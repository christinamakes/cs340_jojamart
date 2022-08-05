import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { Link } from 'react-router-dom';

export const AddLineItemPage = () => {
    const URL = 'https://joja-server.herokuapp.com'
    const navigate = useNavigate();
    // For Sales
    const [member_id, setMember] = useState('');
    const [employee_id, setEmployee] = useState('');
    const [purchase_date, setDate] = useState('');
    const [invoice_total, setTotal] = useState('');
    // For Sales Details
    const [product_id, setProductId] = useState('');
    const [order_number, setOrderNumber] = useState('');
    const [quantity, setQuantity] = useState('');
    const [order_type, setOrderType] = useState('');

    // For Dropdowns
    const [members, setMembers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);

    const addSale = async () => {
        const response = await fetch(`${URL}/sales/add`, {
            method: 'POST',
            body: JSON.stringify({member_id:member_id, employee_id:employee_id, purchase_date:purchase_date, invoice_total:invoice_total}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200) {
            alert(`Oops! Something went wrong.`)
        } else {
            alert(`Success!`)
            navigate('/add-line-item')
        }

    };

    // get members from /members
    const loadMembers = async () => {
        const response = await fetch(`${URL}/members`);
        const members = await response.json();
        setMembers(members);
    };

    // get employees from /employees
    const loadEmployees = async () => {
        const response = await fetch(`${URL}/employees`);
        const employees = await response.json();
        setEmployees(employees);
    };

    // Get products from /products
    const loadProducts = async () => {
        const response = await fetch(`${URL}/products`);
        const products = await response.json();
        setProducts(products);
    };

    // Get sales from /sales
    const loadSales = async () => {
        const response = await fetch(`${URL}/sales`);
        const sales = await response.json();
        setSales(sales);
    };

    const addSalesDetail = async () => {
        const response = await fetch(`${URL}/sales-details/add`, {
            method: 'POST',
            body: JSON.stringify({product_id:product_id, order_number:order_number, quantity:quantity, order_type:order_type}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200) {
            alert(`Oops! Something went wrong.`)
        } else {
            alert(`Success!`)
            navigate('/add-line-item')
        }
    };

    useEffect(() => {
        loadMembers();
        loadEmployees();
        loadProducts();
        loadSales();
    }, []);

    return (
        <div>

        <header>
            <h1>Add a sale</h1>
            <Navigation />
        </header>
        <div id='AddS'>
            <p>Add a sale on this page.</p>
            <label htmlFor='saleMember'>Member ID: </label>
            <select id='saleMember' name='member_id' onChange={e => setMember(e.target.value)}>
                <option value='Select a Member'> -- Select a Member -- </option>
                {members.map((member) => <option value={member.member_id + ' - ' + member.member_name}>{member.member_id}</option>)}
            </select>
            <label htmlFor='saleEmployee'>Employee ID: </label>
            <select id='saleEmployee' name='employee_id' onChange={e => setEmployee(e.target.value)}>
                <option value='Select an Employee'> -- Select an Employee -- </option>
                <option value={undefined}>None</option>
                {employees.map((employee) => <option value={employee.employee_id}>{employee.employee_id}</option>)}
            </select>
            <label htmlFor='saleDate'>Date: </label>
            <input
                id='saleDate'
                type="text"
                placeholder="Enter date here"
                value={purchase_date}
                onChange={e => setDate(e.target.value)} />
            <label htmlFor='saleTotal'>Invoice Total: </label>
            <input
                id='saleTotal'
                type="text"
                placeholder="Enter invoice total here"
                value={invoice_total}
                onChange={e => setTotal(e.target.value)} />
            <button
                onClick={addSale}
            >Add</button>
        </div>
        <div id='AddSD'>
            <p>The following inputs are for Sales Details</p>
            <label htmlFor='saleDetProd'>Product ID: </label>
            <select id='saleDetProd' name='product_id' onChange={e => setProductId(e.target.value)}>
                <option value='Select a Product'> -- Select a Product -- </option>
                {products.map((product) => <option value={product.product_id}>{product.product_id}</option>)}
            </select>
            <label htmlFor='saleDetOrd'>Order Number: </label>
            <select id='saleDetOrd' name='order_number' onChange={e => setOrderNumber(e.target.value)}>
            <option value='Select an Order Number'> -- Select an Order Number -- </option>
            {sales.map((sale) => <option value={sale.order_number}>{sale.order_number}</option>)}
            </select>
            <label htmlFor='saleDetQuant'>Quantity: </label>
            <input
                id='saleDetQuant'
                type="text"
                placeholder="Enter quantity here"
                value={quantity}
                onChange={e => setQuantity(e.target.value)} />
            <label htmlFor='saleDetOrdType'>Order Type: </label>
            <select id='saleDetOrdType' name='order_type' onChange={e => setOrderType(e.target.value)}>
                <option value='0'>0 - In Person</option>
                <option value='1'>1 - Online</option>
            </select>
            <button
                onClick={addSalesDetail}
            >Add</button>
        </div>
        <div className='links' >
            <ul >
                <li><Link className='return' to={'/sales'}><button>Back to Sales</button></Link></li>
                <li><Link className='return' to={'/sales-details'}><button>Back to Sales Details</button></Link></li>
            </ul>
        </div>
        <Footer />
        </div>
    );
}

export default AddLineItemPage;