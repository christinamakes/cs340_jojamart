import { Link} from 'react-router-dom';

export const Navigation = () => {

    return (
        <nav className='links'>
            <Link to="/"><button className='nav'>Home</button></Link>
            <Link to="/add-member"><button className='nav'>Add a Member</button></Link>
            <Link to="/members"><button className='nav'>View all members</button></Link>
        </nav>
    );
};

export default Navigation;