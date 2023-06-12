import { useState, useEffect } from 'react';
import  SinglePlayer from './SinglePlayer';
import { useNavigate, Link } from 'react-router-dom';
// import  AllPlayers  from './AllPlayers';

const cohortName = '2304-FTB-ET-WEB-FT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


export default function SearchBar() {
    // let players = props.players
    let [players, setPlayers] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");

    let filteredPlayers = players.filter((player) => {
        // console.log(player);
        let lowercasedName = player.name.toLowerCase();
        let lowercasedQuery = searchQuery.toLowerCase();

        if(lowercasedName.includes(lowercasedQuery)) {
            // console.log(player);
            // console.log('match');
            return player;
        }
    });
    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                let response = await fetch(`${APIURL}/players`)
                let translatedData = await response.json();     
                // console.log(translatedData.data.players);       
                setPlayers(translatedData.data.players);
            } catch (error) {
                console.log(error);
            }
        }
            fetchAllPlayers();
    })

    return (
        <div>
            <form>
                <label htmlFor="search-query">Search for a player </label>
                <input
                    name="search-query"
                    type="text"
                    placeholder="search"
                    value={searchQuery}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setSearchQuery(e.target.value)
                    }}
                ></input>
            </form>
            {
            filteredPlayers.length ? filteredPlayers.map((result, index) => {
              return (
                <div>
                    <SinglePlayer key={index} player={result} />
                </div>
              )
            }) : <p>Failed to find a player by that name.</p>
          }
        </div>
    )
}