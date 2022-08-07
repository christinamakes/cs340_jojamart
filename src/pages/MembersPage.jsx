import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberSearch from '../components/MemberSearch';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function MembersPage({ setMemberToEdit }) {
    MembersPage.propTypes = {
        setMemberToEdit: PropTypes.func
    }
    const navigate = useNavigate();

    const onEdit = (member) => {
        setMemberToEdit(member)
        navigate('/members/update')
    }

    return (
        <div>
            <header>
                <h1>All JojaMart Members</h1>
                <Navigation />
            </header>
            <div>
                <p>These are our valued members. Add new members, edit information on existing members, or Remove members from the database.</p>
            </div>
            <MemberSearch onEdit={onEdit} />
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-member"><button className='add'>Add member</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default MembersPage;