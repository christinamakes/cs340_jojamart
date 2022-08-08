import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const URL = 'https://joja-server.herokuapp.com'

export const UpdateSalesPage = ({saleToEdit}) => {
    UpdateSalesPage.propTypes = {
        saleToEdit: PropTypes.func,
        member_id: PropTypes.string,
        employee_id: PropTypes.string,
        purchase_date: PropTypes.string,
        invoice_total: PropTypes.string
    }
    const navigate = useNavigate();
    // For Sales
    const [member_id, setMember] = useState(saleToEdit.member_id);
    const [employee_id, setEmployee] = useState(saleToEdit.employee_id);
    const [purchase_date, setDate] = useState(saleToEdit.purchase_date);
    const [invoice_total, setTotal] = useState(saleToEdit.invoice_total);

    // For Dropdowns
    const [members, setMembers] = useState([]);
    const [employees, setEmployees] = useState([]);

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

    const updateSale = async () => {
        const response = await fetch(`${URL}/sales/update-s`, {
            method: 'PUT',
            body: JSON.stringify({order_number:saleToEdit.order_number, member_id:member_id, employee_id:employee_id, purchase_date:purchase_date, invoice_total:invoice_total}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200){
            alert(`Sale updated successfully.`);
            navigate('/sales');
        } else {
            alert(`Oops! Something went wrong with updating Sale.`);
        }
    };

    useEffect(() => {
        loadMembers();
        loadEmployees();

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
                    <label htmlFor='uSaleMember'>Member ID: </label>
                    <select id='uSaleMember' name='member_id' value={member_id} onChange={e => setMember(e.target.value)}>
                        <option value='Select a Member'> -- Select a Member -- </option>
                        {members.map((member, i) => <option value={member.member_id} key={i}>{member.member_id + ' -- ' + member.member_name}</option>)}
                    </select>
                    <label htmlFor='uSaleEmployee'>Employee ID: </label>
                    <select id='uSaleEmployee' name='employee_id' value={employee_id} onChange={e => setEmployee(e.target.value)}>
                        <option value='Select an Employee'> -- Select an Employee -- </option>
                        <option value='0'>None</option>
                        {employees.map((employee, i) => <option value={employee.employee_id} key={i}>{employee.employee_id + ' -- ' + employee.employee_name}</option>)}
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
                    <button
                        onClick={updateSale}
                        >Update</button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default UpdateSalesPage;