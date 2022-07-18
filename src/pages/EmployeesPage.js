import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import EmployeesList from '../components/EmployeesList';

function EmployeesPage() {
    const empList = [{'name':'Morris','email':'morris@joja.co', 'phone': '555-666-7777', 'wage':'9999','id':1},
    {'name':'Shane','email':'shane@joja.co', 'phone': '555-888-9999', 'wage':'12','id':2},
    {'name':'Unnamed Cashier','email':'unnamed@joja.co', 'phone': '555-000-1111', 'wage':'12','id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Employees</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our employees</p>
            </div>
            <EmployeesList employees={empList}/>
            <Footer />
        </div>
    );
}

export default EmployeesPage;