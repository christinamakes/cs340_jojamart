import React from 'react';

function Achievement({ achievement}) {
    return (
        <tr>
            <td>{achievement.achievement_id}</td>
            <td>{achievement.achievement_title}</td>
            <td>{achievement.achievement_criteria}</td>
        </tr>
    );
}

export default Achievement;