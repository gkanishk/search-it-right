import player from "../../assests/players.json";
import PlayerCard from "../../components/cards/playerCards";
import {useEffect, useState} from 'react';

export default function PlayersPage(){
    const [result, setResult] = useState("");
    const [data, setData] = useState(player);
    useEffect(() => {
        if(result==""){
            setData([]);
        }else{
            searchPlayer();
        }
    }, [result])

    const searchPlayer=()=>{
        const searchData=player.filter(playerData=>{
            if(playerData.Player_Name.toUpperCase().includes(result.toUpperCase()))
            return playerData;
        })
        setData(searchData);
    }
    return (
        <section className="container">
            <h1>
                Player's Page
            </h1>
            <input 
            onChange={e=>setResult(e.target.value)}
            placeholder="Search Data 🔍"
            ></input>
            {
            result?
            <h3>
                Search Data:
            </h3>
            :
            <></>}
            {/* Search Data */}
            <PlayerCard playersData={data}/>
            {/* All player's data */}
            <PlayerCard playersData={player}/>     
        </section>
    );
}