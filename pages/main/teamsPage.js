import team from "../../assests/teams.json";
import {useEffect,useState} from 'react';
import TeamCard from "../../components/cards/teamCard";

export default function TeamsPage(){
    const [result, setResult] = useState("");
    const [data, setData] = useState(team);
    useEffect(() => {
        if(result==""){
            setData([]);
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

    return (
        <section className="container">
            <h1>
                Team's Page
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
            {/* Show Search Data */}
            {
                result
                ?
                    data.length!=0
                    ?
                    <TeamCard teamdata={data}/>
                    :
                    <h4>
                        No Data found
                    </h4>
                :<></>
            }
            {/* Show All Data */}
            <TeamCard teamdata={team}/>
        </section>
    );
}