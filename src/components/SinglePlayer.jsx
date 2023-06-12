import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate, Link } from 'react-router-dom';

export default function SinglePlayer({ player }) {
    const navigate = useNavigate();
    // console.log(player);
    return (
        <div className="player-card">
            <button 
                onClick={() => {
                        navigate(`/players/${player.id}`);
                }} >
                {player.name}
            </button>
            {/* <button>
                <Link to={`/players/${players.id}`}>Puppy Info</Link>
            </button> */}
            <h4>{player.breed}</h4>
            <img src={player.imageUrl} className="player-image" />
            
        </div>
    )
}