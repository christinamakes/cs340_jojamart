import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import SeasonsList from '../components/SeasonsList';
import { Link } from 'react-router-dom';

function SeasonsPage() {
    // Data hardcoded for now, dynamic later
    const seaList = [{'season_code':'YEAR','description':'Product sold year-round'},
    {'season_code':'SPRING','description':'Product sold Mar-May'},
    {'season_code':'SUMMER','description':'Product sold Jun-Aug'},
    {'season_code':'FALL','description':'Product sold Sep-Nov'},]
    return (
        <div>
            <header>
                <h1>All JojaMart Seasons</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our seasons</p>
            </div>
            <SeasonsList seasons={seaList}/>
            <div className='add'>
                <ul>
                    <li>
                        <Link to="/add-season"><button className='add'>Add season</button></Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default SeasonsPage;