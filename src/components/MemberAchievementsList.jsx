import React from 'react';
import MemberAchievement from './MemberAchievement';
import PropTypes from 'prop-types';


function MemberAchievementsList({ memberAchievements, onDelete }) {
    MemberAchievementsList.propTypes = {
        memberAchievements: PropTypes.array,
        onDelete: PropTypes.func,
    }
    return (
        <table id="memAch">
            <thead>
                <tr>
                    <th>Achievement</th>
                    <th>Member</th>
                </tr>
            </thead>
            <tbody>
                {memberAchievements.map((memberAchievement, i) => <MemberAchievement memberAchievement={memberAchievement}
                    onDelete={onDelete}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default MemberAchievementsList;