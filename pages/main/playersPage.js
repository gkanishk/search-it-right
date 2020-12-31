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
            if(playerData.name.toUpperCase().includes(result.toUpperCase()))
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
            value={result}
            ></input>
            {
            result?
            <h3>
                Search Data:
            </h3>
            :
            <></>}
            {/* Search Data */}
            {
                result
                ?
                    data.length!=0
                    ?
                    <PlayerCard playersData={data}/>
                    :
                    <h4>
                        No Data found
                    </h4>
                :<></>
            }
            {/* All player's data */}
            <PlayerCard playersData={player}/>     
        </section>
    );
}