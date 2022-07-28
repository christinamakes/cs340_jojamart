import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberSearch from '../components/MemberSearch';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';;

function MembersPage() {
    // Data hardcoded for now, dynamic later
    const [members, setMembers] = useState([])
    
    // get members from /members
    const loadMembers = async () => {
        const response = await fetch('https://joja-server.herokuapp.com/members');
        const members = await response.json();
        setMembers(members);
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
                <p>hello these are our members</p>
            </div>
            <MemberSearch details={members} />
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