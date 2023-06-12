import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/all-players'>All Players</Link>
        </nav>
    );
}