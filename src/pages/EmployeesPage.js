import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import EmployeeSearch from '../components/EmployeeSearch';
import { Link } from 'react-router-dom';

function EmployeesPage() {
    // Data hardcoded for now, dynamic later
    const empList = [{'employee_name':'Morris','employee_email':'morris@joja.co', 'employee_phone_number': '555-666-7777', 'employee_hourly_wage':'9999','employee_id':1},
    {'employee_name':'Shane','employee_email':'shane@joja.co', 'employee_phone_number': '555-888-9999', 'employee_hourly_wage':'12','employee_id':2},
    {'employee_name':'Unnamed Cashier','employee_email':'unnamed@joja.co', 'employee_phone_number': '555-000-1111', 'employee_hourly_wage':'12','employee_id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Employees</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our employees</p>
            </div>
            <EmployeeSearch details={empList} />
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-employee"><button className='add'>Add employee</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default EmployeesPage;