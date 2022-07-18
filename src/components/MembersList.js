import React from 'react';
import Member from './Member';


function MembersList({ members, onDelete, onEdit }) {
    return (
        <table id="members">
            <thead>
                <tr>
                    <th>member_id</th>
                    <th>member_name</th>
                    <th>member_address</th>
                    <th>member_email</th>
                    <th>member_phone</th>
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
