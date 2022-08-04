import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import EmployeesList from '../components/EmployeesList';
import { useNavigate } from 'react-router-dom';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateEmployeePage = ({employeeToEdit}) => {
    const navigate = useNavigate();
    const [employee_name, setName] = useState(employeeToEdit.employee_name);
    const [employee_email, setEmail] = useState(employeeToEdit.employee_email);
    const [employee_phone_number, setPhone] = useState(employeeToEdit.employee_phone_number);
    const [employee_hourly_wage, setWage] = useState(employeeToEdit.employee_hourly_wage);

    const updateEmployee = async () => {
        const response = await fetch(`${URL}/employees/update`, {
            method: 'PUT',
            body: JSON.stringify({employee_id: employeeToEdit.employee_id, employee_name: employeeToEdit.employee_name, employee_phone_number:employeeToEdit.employee_phone_number, employee_hourly_wage:employeeToEdit.employee_hourly_wage, employee_email:employeeToEdit.employee_email}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200){
            navigate('/employees');
        } else {
            alert(`Oops! Something went wrong.`);
        }
        history.push("/");
    };

    const empList = [{'name':'Morris','email':'morris@joja.co', 'phone': '555-666-7777', 'wage':'9999','id':1}]

    return (
        <div>

        <header>
            <h1>update an employee</h1>
            <Navigation />
        </header>
        <p>update an employee on this page.</p>
        <div>
            <p>This is a sample page, if these values don't match the row you clicked to update, it is because they are hard-coded.</p>
            <EmployeesList employees={empList}></EmployeesList>
        </div>
        <div>
        <label for='uEmpName'>Name: </label>
            <input
                id='uEmpName'
                type="text"
                placeholder="Update name here"
                value={employee_name}
                onChange={e => setName(e.target.value)} />
            <label for='uEmpEmail'>Email: </label>
            <input
                id='uEmpEmail'
                type="text"
                placeholder="Update email here"
                value={employee_email}
                onChange={e => setEmail(e.target.value)} />
            <label for='uEmpPhone'>Phone Number: </label>
            <input
                id='uEmpPhone'
                type="text"
                placeholder="Update phone number here"
                value={employee_phone_number}
                onChange={e => setPhone(e.target.value)} />
            <label for='uEmpWage'>Hourly Wage: </label>
            <input
                id='uEmpWage'
                type="text"
                placeholder="Update wage here"
                value={employee_hourly_wage}
                onChange={e => setWage(e.target.value)} />
            <button
                onClick={updateEmployee}
            >update</button>
        </div>
        <Footer />
        </div>
    );
}

export default UpdateEmployeePage;