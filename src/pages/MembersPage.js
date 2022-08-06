import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberSearch from '../components/MemberSearch';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

const URL = 'https://joja-server.herokuapp.com'

function MembersPage({setMemberToEdit}) {
    // Data hardcoded for now, dynamic later
    const navigate = useNavigate();
    const [members, setMembers] = useState([])
    
    // get members from /members
    const loadMembers = async () => {
        const response = await fetch(`${URL}/members`);
        const members = await response.json();
        setMembers(members);
    }

    const onDelete = async (member_id) => {
        const response = await fetch(`${URL}/members/delete/${member_id}`, {method: 'DELETE'});
        if (response.status === 200) {
            setMembers(members.filter(m => m.member_id !== member_id));
        } else {
            alert(`Failed to delete member`)
        }
    }

    const onEdit = (member) => {
        setMemberToEdit(member)
        navigate('/members/update')
    }
    // loadMembers from fetch
    useEffect(() => {
        loadMembers();
    }, []);

    return (
        <div>
            <header>
                <h1>All JojaMart Members</h1>
                <Navigation />
            </header>
            <div>
                <p>These are our valued members. Add new members, edit information on existing members, or Remove members from the database.</p>
            </div>
            <MemberSearch details={members} onDelete={onDelete} onEdit={onEdit}/>
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