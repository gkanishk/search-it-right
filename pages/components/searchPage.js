import {useState, useEffect} from 'react';
import team from '../../assests/teams.json';
import player from '../../assests/players.json';
import PlayerCard from './cards/playerCards';
import TeamCard from './cards/teamCard';

export default function SearchPage(){
    const [result, setResult] = useState("");
    const [data, setData] = useState([]);
    const [type,setType]= useState("");

    useEffect(() => {
        if(result==""){
            setData([]);
        }else if(type=="Player"){
            searchPlayer();
        }else{
            searchTeam();
        }
    }, [result])

    const searchTeam=()=>{
        const searchData=team.filter(teams=>{
            if(teams.name.toUpperCase().includes(result.toUpperCase()))
            return teams;
        })
        setData(searchData);
    }

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
                Search IPL's Data
            </h1>
            <div className="search-container">
                <input 
                onChange={e=>setResult(e.target.value)}
                placeholder="Type to Search Data 🔍"
                ></input>
                <select value={type} onChange={e=>setType(e.target.value)}>
                <option value="Team">Teams</option>
                <option value="Player">Players</option>
                </select>
            </div>
            {
                result
                ?
                    type=="Player"
                    ?
                    <PlayerCard playersData={data}/>
                    :
                    <TeamCard teamdata={data}/>
                :
                <img 
                src="/images/search.svg" 
                className="searchImg"
                alt="Search Image"
                ></img>
            }      
        </section>
    );
}