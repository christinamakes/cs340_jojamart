import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import EmployeesList from '../components/EmployeesList';

export const UpdateEmployeePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [wage, setWage] = useState('');

    const updateEmployee = async () => {
        // const response = await fetch('/exercises', {
        //     method: 'POST',
        //     body: JSON.stringify({name:name, reps:reps, weight:weight, unit:unit, date:date}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        // if (response.status === 200){
        //     alert('updateed exercise!');
        // } else {
        //     alert(`Oops, exercise creation failed!`);
        // }
        // history.push("/");
    };

    const empList = [{'name':'Morris','email':'morris@joja.co', 'phone': '555-666-7777', 'wage':'9999','id':1}]

    return (
        <div>

        <header>
            <h1>update an employee</h1>
            <p>update an employee on this page.</p>
            <Navigation />
        </header>
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
                value={name}
                onChange={e => setName(e.target.value)} />
            <label for='uEmpEmail'>Email: </label>
            <input
                id='uEmpEmail'
                type="text"
                placeholder="Update email here"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <label for='uEmpPhone'>Phone Number: </label>
            <input
                id='uEmpPhone'
                type="text"
                placeholder="Update phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)} />
            <label for='uEmpWage'>Hourly Wage: </label>
            <input
                id='uEmpWage'
                type="text"
                placeholder="Update wage here"
                value={wage}
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