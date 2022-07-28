import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberSearch from '../components/MemberSearch';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';;

function MembersPage() {
    // Data hardcoded for now, dynamic later
    const [members, setMembers] = useState([])
    const memList = [{'name':'Carl','address':'123 Rooster Drive', 'email': 'carl@stardew.com', 'phone':'999-999-9999','id':1},
    {'name':'Pam','address':'456 Bus Stop Lane', 'email': 'pamthebus@gmail.com', 'phone':'281-111-1111','id':2},
    {'name':'Farmer','address':'876 Farm Valley', 'email': 'shane4ever@aol.com', 'phone':'888-888-8888','id':3}]
    
    const loadMembers = async () => {
        const response = await fetch('https://joja-server.herokuapp.com/');
        const members = await response.json();
        setMembers(members);
    }

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