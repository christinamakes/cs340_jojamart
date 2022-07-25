import React from 'react';
import Member from './Member';


function MembersList({ members, onDelete, onEdit }) {
    return (
        <table id="members">
            <thead>
                <tr>
                    <th>Member ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member, i) => <Member member={member}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default MembersList;
