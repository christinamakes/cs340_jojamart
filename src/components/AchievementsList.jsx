import React from 'react';
import Achievement from './Achievement';
import PropTypes from 'prop-types';


function AchievementList({ achievements }) {
    AchievementList.propTypes = {
        achievements: PropTypes.array,
    }
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
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default AchievementList;
