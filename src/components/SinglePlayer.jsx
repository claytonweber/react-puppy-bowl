import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

export default function SinglePlayer({ player }) {
    const navigate = useNavigate();
    // console.log(player);
    return (
        <div className="player-card">
            <h2>{player.name}</h2>
            <button 
            onClick={() => {
                    navigate(`/players/${player.id}`);
            }} >
                {player.name}
            </button>
            <h4>{player.breed}</h4>
            <img src={player.imageUrl} />
            
        </div>
    )
}