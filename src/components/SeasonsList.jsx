import React from 'react';
import Season from './Season';
import PropTypes from 'prop-types';


function SeasonsList({ seasons }) {
    SeasonsList.propTypes = {
        seasons: PropTypes.array,
    }
    return (
        <table id="seasons">
            <thead>
                <tr>
                    <th>Season Code</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {seasons.map((season, i) => <Season season={season}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default SeasonsList;
