import React from 'react';
import Member from './Member';
import PropTypes from 'prop-types';


function MembersList({ members, onDelete, onEdit }) {
    MembersList.propTypes = {
        members: PropTypes.array,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func
    }

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
