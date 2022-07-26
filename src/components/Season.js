import React from 'react';

function Season({ season}) {
    return (
        <tr>
            <td>{season.code}</td>
            <td>{season.description}</td>
        </tr>
    );
}

export default Season;