import { Link} from 'react-router-dom';

export const Navigation = () => {

    return (
        <nav className='links'>
            <div className='home'>
                <ul>
                    <li><Link to="/"><button className='home'>Home</button></Link></li>
                </ul>
            </div>
            <div className='all'>
                <ul>
                    <li><Link to="/members"><button className='all'>View all members</button></Link></li>
                    <li><Link to="/employees"><button className='all'>View all employees</button></Link></li>
                    <li><Link to="/products"><button className='all'>View all products</button></Link></li>
                    <li><Link to="/sales"><button className='all'>View all sales</button></Link></li>
                    <li><Link to="/achievements"><button className='all'>View all achievements</button></Link></li>
                    <li><Link to="/seasons"><button className='all'>View all seasons</button></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;