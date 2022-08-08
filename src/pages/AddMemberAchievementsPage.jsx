import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';

export const AddMemberAchievementPage = () => {
    const URL = 'https://joja-server.herokuapp.com'
    const navigate = useNavigate();
    // for request
    const [member_id, setMember] = useState('');
    const [ach_id, setAch] = useState('');
    // for dropdowns
    const [members, setMembers] = useState([]);
    const [achievements, setAchievements] = useState([])

    const addMemberAchievement = async () => {
        const response = await fetch(`${URL}/member-achievements/add`, {
            method: 'POST',
            body: JSON.stringify({ member_id: member_id, achievement_id: ach_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200) {
            alert(`Oops! Something went wrong.`)
        } else {
            navigate('/member-achievements')
        }

    };

    /* CITATION for Dynamic Dropdown Menu logic
            DATE: 8/1/2022
            Code adapted from: 
            source: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0 */

    // get members from /members
    const loadMembers = async () => {
        const response = await fetch(`${URL}/members`);
        const members = await response.json();
        setMembers(members);
    };

    // get achievements from /achievements
    const loadAchievements = async () => {
        const response = await fetch(`${URL}/achievements`);
        const members = await response.json();
        setAchievements(members);
    };

    useEffect(() => {
        loadMembers();
        loadAchievements();
    }, []);

    return (
        <div>

            <header>
                <h1>Add a Member Achievement</h1>
                <Navigation />
            </header>
            <div>
                <p>Add a member achievement on this page</p>
                <label htmlFor='AchAchA'>Achievement ID: </label>
                <select id='mem-ach-achievement' name='ach_id' onChange={e => setAch(e.target.value)}>
                    <option value='Select an Achievement'> -- Select an Achievement -- </option>
                    {achievements.map((ach, i) => <option value={ach.achievement_id} key={i}>{ach.achievement_id + ' -- ' + ach.achievement_title}</option>)}
                </select>

                <label htmlFor='saleMember'>Member ID: </label>
                <select id='mem-ach-member' name='member_id' onChange={e => setMember(e.target.value)}>
                    <option value='Select a Member'> -- Select a Member -- </option>
                    {members.map((member, i) => <option value={member.member_id} key={i}>{member.member_id + ' -- ' + member.member_name}</option>)}
                </select>
                <button
                    onClick={addMemberAchievement}
                >Add</button>
            </div>
            <Footer />
        </div>
    );
}

export default AddMemberAchievementPage;