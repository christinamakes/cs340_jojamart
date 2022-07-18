import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MembersList from '../components/MembersList';

function MembersPage() {
    const memList = [{'name':'Carl','address':'123 Rooster Drive', 'email': 'carl@stardew.com', 'phone':'999-999-9999','id':1},
    {'name':'Pam','address':'456 Bus Stop Lane', 'email': 'pamthebus@gmail.com', 'phone':'281-111-1111','id':2},
    {'name':'Farmer','address':'876 Farm Valley', 'email': 'shane4ever@aol.com', 'phone':'888-888-8888','id':3}]
    return (
        <div>
            <header>
                <h1>All JojaMart Members</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our members</p>
            </div>
            <MembersList members={memList}/>
            <Footer />
        </div>
    );
}

export default MembersPage;