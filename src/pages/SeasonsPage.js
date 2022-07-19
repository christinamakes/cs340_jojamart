import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SeasonsList from '../components/SeasonsList';

function SeasonsPage() {
    const seaList = [{'code':'YEAR','description':'Product sold year-round'},
    {'code':'SPRING','description':'Product sold Mar-May'},
    {'code':'SUMMER','description':'Product sold Jun-Aug'},
    {'code':'FALL','description':'Product sold Sep-Nov'},]
    return (
        <div>
            <header>
                <h1>All JojaMart Seasons</h1>
            </header>
            <Navigation />
            <div>
                <p>hello these are our seasons</p>
            </div>
            <SeasonsList seasons={seaList}/>
            <Footer />
        </div>
    );
}

export default SeasonsPage;