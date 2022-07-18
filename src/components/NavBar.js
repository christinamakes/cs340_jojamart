import { Link} from 'react-router-dom';

export const Navigation = () => {

    return (
        <nav className='links'>
            <Link to="/"><button className='nav'>Home</button></Link>
            <Link to="/members"><button className='nav'>View all members</button></Link>
            <Link to="/employees"><button className='nav'>View all employees</button></Link>
            <Link to="/products"><button className='nav'>View all products</button></Link>
            <Link to="/sales"><button className='nav'>View all sales</button></Link>
            <Link to="/achievements"><button className='nav'>View all achievements</button></Link>
            <Link to="/seasons"><button className='nav'>View all seasons</button></Link>
            <Link to="/add-member"><button className='add'>Add Member</button></Link>
            <Link to="/add-employee"><button className='add'>Add employee</button></Link>
            <Link to="/add-product"><button className='add'>Add product</button></Link>
            <Link to="/add-sale"><button className='add'>Add sale</button></Link>
            <Link to="/add-achievement"><button className='add'>Add achievement</button></Link>
            <Link to="/add-season"><button className='add'>Add season</button></Link>
        </nav>
    );
};

export default Navigation;