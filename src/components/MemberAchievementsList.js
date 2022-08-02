import React from 'react';
import MemberAchievement from './MemberAchievement';


function MemberAchievementsList({ memberAchievements, onDelete, onEdit }) {
    return (
        <table id="memAch">
            <thead>
                <tr>
                    <th>Achievement ID</th>
                    <th>Member ID</th>
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