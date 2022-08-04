import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddEmployeePage = () => {
    const URL = 'https://joja-server.herokuapp.com'
    const navigate = useNavigate();
    const [employee_name, setName] = useState('');
    const [employee_email, setEmail] = useState('');
    const [employee_phone_number, setPhone] = useState('');
    const [employee_hourly_wage, setWage] = useState('');

    const addEmployee = async () => {
        const response = await fetch(`${URL}/employees/add`, {
            method: 'POST',
            body: JSON.stringify({employee_name:employee_name, employee_email:employee_email, employee_phone_number:employee_phone_number, employee_hourly_wage:employee_hourly_wage}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200){
            alert(`Oops! Something went wrong.`)
        }
        navigate('/employees');
    };

    return (
        <div>

        <header>
            <h1>Add an employee</h1>
            <Navigation />
        </header>
        <div>
            <p>Add an employee on this page.</p>
            <label for='empName'>Name: </label>
            <input
                id='empName'
                type="text"
                placeholder="Enter name here"
                value={employee_name}
                onChange={e => setName(e.target.value)} />
            <label for='empEmail'>Email: </label>
            <input
                id='empEmail'
                type="text"
                placeholder="Enter email here"
                value={employee_email}
                onChange={e => setEmail(e.target.value)} />
            <label for='empPhone'>Phone Number: </label>
            <input
                id='empPhone'
                type="text"
                placeholder="Enter phone number here"
                value={employee_phone_number}
                onChange={e => setPhone(e.target.value)} />
            <label for='empWage'>Hourly Wage: </label>
            <input
                id='empWage'
                type="text"
                placeholder="Enter wage here"
                value={employee_hourly_wage}
                onChange={e => setWage(e.target.value)} />
            <button
                onClick={addEmployee}
            >Add</button>
        </div>
        <Footer />
        </div>
    );
}

export default AddEmployeePage;