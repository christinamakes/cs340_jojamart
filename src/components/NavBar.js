import { Link} from 'react-router-dom';

export const Navigation = () => {

    return (
        <nav className='links'>
            <Link to="/"><button className='nav'>Home</button></Link>
            <Link to="/members"><button className='nav'>View all members</button></Link>
            <Link to="/add-member"><button className='nav'>Add Member</button></Link>
            <Link to="/achievements"><button className='nav'>View all achievements</button></Link>
            <Link to="/add-achievement"><button className='nav'>Add achievement</button></Link>
        </nav>
    );
};

export default Navigation;