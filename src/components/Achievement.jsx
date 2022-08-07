import React from 'react';
import PropTypes from 'prop-types';

function Achievement({ achievement }) {
    Achievement.propTypes = {
        achievement: PropTypes.array,
        achievement_id: PropTypes.string,
        achievement_title: PropTypes.string,
        achievement_criteria: PropTypes.string
    }
    return (
        <tr>
            <td>{achievement.achievement_id}</td>
            <td>{achievement.achievement_title}</td>
            <td>{achievement.achievement_criteria}</td>
        </tr>
    );
}

export default Achievement;