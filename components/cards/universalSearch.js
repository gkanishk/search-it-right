import ipldata from '../../assests/universaldata.json';
import TeamCard from "./teamCard";
import PlayerCard from "./playerCards";
import {useState,useEffect} from 'react';

export default function UniversalSearch(){
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
        <div className="search-container">
            <input 
                    onChange={e=>setResult(e.target.value)}
                    placeholder="Type to Search any Data 🔍"
            ></input>
        </div>
        {
            result
            ?
            <div className="player-card-container">
        {
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
            }
        </div>
        :
        <></>
}
        </>
    );
}