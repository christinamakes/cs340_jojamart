import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import EmployeeSearch from '../components/EmployeeSearch';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const URL = 'https://joja-server.herokuapp.com'

function EmployeesPage({ setEmployeeToEdit }) {
    EmployeesPage.propTypes = {
        setEmployeeToEdit: PropTypes.func
    }
    // Data hardcoded for now, dynamic later
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([])

    const onDelete = async (employee_id) => {
        const response = await fetch(`${URL}/employees/delete/${employee_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            setEmployees(employees.filter(emp => emp.employee_id !== employee_id));
        } else {
            alert(`Failed to delete employee`)
        }
    }

    const onEdit = (employee) => {
        setEmployeeToEdit(employee)
        navigate('/employees/update')
    }

    return (
        <div>
            <header>
                <h1>All JojaMart Employees</h1>
                <Navigation />
            </header>
            <div>
                <p>These are our hard-working employees. Onboard new hires, adjust personal information or wages (Ha!), or offboard terminated employees.</p>
            </div>
            <EmployeeSearch details={employees} onDelete={onDelete} onEdit={onEdit} />
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