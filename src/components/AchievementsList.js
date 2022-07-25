import React from 'react';
import Achievement from './Achievement';


function AchievementList({ achievements, onDelete, onEdit }) {
    return (
        <table id="achievements">
            <thead>
                <tr>
                    <th>Achievement ID</th>
                    <th>Title</th>
                    <th>Criteria</th>
                </tr>
            </thead>
            <tbody>
                {achievements.map((achievement, i) => <Achievement achievement={achievement}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default AchievementList;
