import React from 'react';
import Season from './Season';


function SeasonsList({ seasons, onDelete, onEdit }) {
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
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default SeasonsList;
