import Link from 'next/link';
import {useEffect, useState} from 'react';
import ipldata from '../../assests/universaldata.json';
import TeamCard from "../../components/cards/teamCard";
import PlayerCard from "../../components/cards/playerCards";

export default function LandingPage(){
    const [result, setResult] = useState("");
    const [data, setData] = useState(ipldata);
    useEffect(() => {
        if(result==""){
            setData([]);
        }else{
            searchIPLData();
        }
    }, [result])

    const searchIPLData=()=>{
        const searchData=ipldata.filter(iplData=>{
            if(iplData.name.toUpperCase().includes(result.toUpperCase()))
            return iplData;
        })
        setData(searchData);
    }

    return (
        <>
        <img src="/images/cricket.svg" style={{width:"15rem"}} alt="Cricket logo"></img>
        <h3>
            "Search it Right" the only app you need to get all your IPL data.    
        </h3>
        <section className="readme-container">
            Check Instructions and README file{" "}
            
            <Link href="/readme">
            <a>
            👉here
            </a>
            </Link>
        </section>
        <div className="search-container">
            <input 
                    onChange={e=>setResult(e.target.value)}
                    placeholder="Type to Search any Data 🔍"
            ></input>
        </div>
        <div className="player-card-container">
        {
                result
                ?
                    data.length!=0
                    ?
                    data.map(data=>{
                        if(data.type==2){
                            return (
                                <PlayerCard 
                                playersData={data}
                                index={ipldata.indexOf(data)}
                                />
                            );
                        }else{
                            return (
                                <TeamCard 
                                teamsData={data}
                                index={ipldata.indexOf(data)}
                                />
                            );
                        }
                    })
                    :
                    <h4>
                        No Data found
                    </h4>
                :<></>
            }
        </div>  
        </>
    );
}