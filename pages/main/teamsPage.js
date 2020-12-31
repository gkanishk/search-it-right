import team from "../../assests/teams.json";
import {useEffect,useState} from 'react';
import TeamCard from "../../components/cards/teamCard";

export default function TeamsPage(){
    const [result, setResult] = useState("");
    const [data, setData] = useState([]);
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
            value={result}
            ></input>
            {
            result?
            <h3>
                Search Data:
            </h3>
            :
            <></>}
            <div className="card-container">
            {/* Search Data */}
            {
                result
                ?
                    data.length!=0
                    ?
                    data.map(data=>{
                        return (
                            <TeamCard 
                            playersData={data}
                            index={team.indexOf(data)}
                            />
                        );
                    })
                    :
                    <h4>
                        No Data found
                    </h4>
                    
                :<></>
            }
        </div>
        <div className="card-container">
            {/* All team's data */}
            {
                team.map(data=>{
                            return (
                                <TeamCard 
                                playersData={data}
                                index={team.indexOf(data)}
                                />
                            );
                        })
            } 
            </div>            
        </section>
    );
}