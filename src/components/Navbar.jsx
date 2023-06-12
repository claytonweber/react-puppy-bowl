import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav id="navbar">
            <Link to='/' className="link">Home</Link>
            <Link to='/all-players' className="link">All Players</Link>
        </nav>
    );
}