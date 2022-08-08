import React from 'react';
import PropTypes from 'prop-types';

function Season({ season }) {
    Season.propTypes = {
        season: PropTypes.object,
        season_code: PropTypes.string,
        description: PropTypes.string
    }
    return (
        <tr>
            <td>{season.season_code}</td>
            <td>{season.description}</td>
        </tr>
    );
}

export default Season;