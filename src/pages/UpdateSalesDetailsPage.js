import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateSalesDetailsPage = ({salesDetailToEdit}) => {
    const navigate = useNavigate();
    const [product_id, setProductId] = useState('');
    const [order_number, setOrderNumber] = useState('');
    const [quantity, setQuantity] = useState('');
    const [order_type, setOrderType] = useState('');
    // For Sales
    const [member_id, setMember] = useState('');
    const [employee_id, setEmployee] = useState('');
    const [purchase_date, setDate] = useState('');
    const [invoice_total, setTotal] = useState('');

    // For Dropdowns
    const [members, setMembers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);

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
            const response = await fetch(`${URL}/sales/s`);
            const sales = await response.json();
            setSales(sales);
        };

    const updateSalesDetail = async () => {
        const response = await fetch(`${URL}/update-s`, {
            method: 'PUT',
            body: JSON.stringify({sales_details_id:salesDetailToEdit.sales_details_id, product_id:product_id, order_number:order_number, quantity:quantity, order_type:order_type}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200){
            alert(`Sales Details updated successfully.`);
            navigate('/sales-details');
        } else {
            alert(`Oops! Something went wrong with updating Sales Details.`);
        }
    };

    const updateSale = async () => {
        const response = await fetch(`${URL}/update-s`, {
            method: 'PUT',
            body: JSON.stringify({order_number:salesDetailToEdit.order_number, member_id:member_id, employee_id:employee_id, purchase_date:purchase_date, invoice_total:invoice_total}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200){
            alert(`Sale updated successfully.`);
        } else {
            alert(`Oops! Something went wrong with updating Sale.`);
        }
    };

    const updateLineItem = () => {
        updateSale();
        updateSalesDetail();
    }

    useEffect(() => {
        loadMembers();
        loadEmployees();
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
                <p>Add a sale on this page.</p>
                <label htmlFor='uSaleMember'>Member ID: </label>
                <select id='uSaleMember' name='member_id' onChange={e => setMember(e.target.value)}>
                    <option value='Select a Member'> -- Select a Member -- </option>
                    {members.map((member) => <option value={member.member_id}>{member.member_id + ' -- ' + member.member_name}</option>)}
                </select>
                <label htmlFor='uSaleEmployee'>Employee ID: </label>
                <select id='uSaleEmployee' name='employee_id' onChange={e => setEmployee(e.target.value)}>
                    <option value='Select an Employee'> -- Select an Employee -- </option>
                    <option value={undefined}>None</option>
                    {employees.map((employee) => <option value={employee.employee_id}>{employee.employee_id + ' -- ' + employee.employee_name}</option>)}
                </select>
                <label htmlFor='uSaleDate'>Date: </label>
                <input
                    id='uSaleDate'
                    type="text"
                    placeholder="Enter date here"
                    value={purchase_date}
                    onChange={e => setDate(e.target.value)} />
                <label htmlFor='uSaleTotal'>Invoice Total: </label>
                <input
                    id='uSaleTotal'
                    type="text"
                    placeholder="Enter invoice total here"
                    value={invoice_total}
                    onChange={e => setTotal(e.target.value)} />
                <label htmlFor='uSaleDetProd'>Product ID: </label>
                <select id='uSaleDetProd' name='product_id' onChange={e => setProductId(e.target.value)}>
                    <option value='Select a Product'> -- Select a Product -- </option>
                    {products.map((product) => <option value={product.product_id}>{product.product_id + ' -- ' + product.product_name}</option>)}
                </select>
                <label htmlFor='uSaleDetOrd'>Order Number: </label>
                <select id='uSaleDetOrd' name='order_number' onChange={e => setOrderNumber(e.target.value)}>
                <option value='Select an Order Number'> -- Select an Order Number -- </option>
                {sales.map((sale) => <option value={sale.order_number}>{sale.order_number}</option>)}
                </select>
                <label htmlFor='uSaleDetQuant'>Quantity: </label>
                <input
                    id='uSaleDetQuant'
                    type="text"
                    placeholder="Enter quantity here"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)} />
                <label htmlFor='uSaleDetOrdType'>Order Type: </label>
                <select id='uSaleDetOrdType' name='order_type' onChange={e => setOrderType(e.target.value)}>
                    <option value='0'>0 - In Person</option>
                    <option value='1'>1 - Online</option>
                </select>
                <button
                    onClick={updateLineItem}
                    >Add</button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default UpdateSalesDetailsPage;