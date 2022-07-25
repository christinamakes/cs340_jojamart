import React from 'react';

function Achievement({ achievement}) {
    return (
        <tr>
            <td>{achievement.id}</td>
            <td>{achievement.title}</td>
            <td>{achievement.criteria}</td>
        </tr>
    );
}

export default Achievement;