import React from 'react';
import SeasonsList from '../components/SeasonsList';
import Footer from '../components/Footer';
import Navigation from '../components/NavBar';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

const URL = 'https://joja-server.herokuapp.com'

function SeasonsPage() {
    const [seasons, setSeasons] = useState([])

    // get seasons from /seasons
    const loadSeasons = async () => {
        const response = await fetch(`${URL}/seasons`);
        const seasons = await response.json();
        setSeasons(seasons);
    }

    // loadSeasons from fetch
    useEffect(() => {
        loadSeasons();
    }, []);

    return (
        <div>
            <header>
                <h1>All JojaMart Seasons</h1>
                <Navigation />
            </header>
            <div>
                <p>hello these are our seasons</p>
            </div>
            <SeasonsList seasons={seasons}/>
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