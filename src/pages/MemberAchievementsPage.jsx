import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import MemberAchievementsList from '../components/MemberAchievementsList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MemberAchievementsPage() {
    const [memAchs, setMemAchs] = useState([])
    const URL = 'https://joja-server.herokuapp.com'

    // get members from /members
    const loadMemAchs = async () => {
        const response = await fetch(`${URL}/member-achievements`);
        const memAchs = await response.json();
        setMemAchs(memAchs);
    }

    const onDelete = async (member_id) => {
        const response = await fetch(`${URL}/member-achievements/delete/${member_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const fetchData = async () => {
                const response = await fetch(`${URL}/member-achievements/`, { method: 'GET' });
                const json = await response.json();
                setMemAchs(json)
            }
            fetchData();
        } else {
            alert(`Failed to delete member`)
        }
    }


    useEffect(() => {
        loadMemAchs();
    }, []);

    return (
        <div>
            <header>
                <h1>All JojaMart Member Achievements</h1>
                <Navigation />
            </header>
            <div>
                <p>These are the achievements of our valued members. Members with more achievements are, of course, more valued by me. I mean the company.</p>
            </div>
            <MemberAchievementsList memberAchievements={memAchs} onDelete={onDelete} />
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-member-achievement"><button className='add'>Add member achievement</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default MemberAchievementsPage;