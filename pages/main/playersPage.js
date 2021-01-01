import player from "../../assests/players.json";
import PlayerCard from "../../components/cards/playerCards";
import {useEffect, useState} from 'react';

export default function PlayersPage(){
    const [result, setResult] = useState("");
    const [data, setData] = useState([]);
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
            <div className="player-card-container">
            {/* Search Data */}
            {
                result
                ?
                    data.length!=0
                    ?
                    <>
                    {data.map(data=>{
                        return (
                            <PlayerCard 
                            playersData={data}
                            index={player.indexOf(data)}
                            />
                        );
                    })}
                    <hr/>
                    </>
                    :
                    <>
                    <h4>
                        No Data found
                    </h4>
                    <hr/>
                    </>
                :<></>
            }
            </div>
            <div className="player-card-container">
            {/* All player's data */}
            {
                player.map(data=>{
                            return (
                                <PlayerCard 
                                playersData={data}
                                index={player.indexOf(data)}
                                />
                            );
                        })
            } 
            </div>            
        </section>
    );
}