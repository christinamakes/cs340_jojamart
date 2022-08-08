import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import EmployeeSearch from '../components/EmployeeSearch';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function EmployeesPage({ setEmployeeToEdit }) {
    EmployeesPage.propTypes = {
        setEmployeeToEdit: PropTypes.func
    }
    // Data hardcoded for now, dynamic later
    const navigate = useNavigate();

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
            <EmployeeSearch onEdit={onEdit} />
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