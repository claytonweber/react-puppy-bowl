import { useEffect, useState } from 'react';
import SinglePlayer from './SinglePlayer';

const cohortName = '2304-FTB-ET-WEB-FT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                let response = await fetch(`${APIURL}/players`)
                let translatedData = await response.json();     
                console.log(translatedData.data.players);       
                setPlayers(translatedData.data.players);
            } catch (error) {
                console.log(error);
            }
        }
            fetchAllPlayers();
    }, [])

    return (
      <>
        {/* {
          players.length ? players.map((player) => {
            return (
              <SinglePlayer
                // key={player.id} 
                // player={player}
                // allPlayers={players}
              />
            )
          }) : <p>Loading...</p>
        } */}
      </>
    )
}
