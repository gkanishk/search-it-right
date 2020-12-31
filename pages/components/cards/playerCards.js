export default function PlayerCard(props){
    const getColor=(index)=>{
        if(index%4==0)
        return "#0DA9F4";
        else if(index%4==1)
        return "#8BC34A";
        else if(index%4==2)
        return "coral";
        else
        return "#FEC23D";
    }

    return (
        <div className="player-card-container">
                {
                    props.playersData.map(data=>{
                        return (
                            <div 
                            className="player-card" 
                            style={{backgroundColor:getColor(props.playersData.indexOf(data))}}
                            key={data.Player_Name}
                            >
                                <div className="player-img-container">
                                <img src="/man.svg"/>
                                <h3>
                                        {data.Player_Name}
                                </h3>
                                </div>
                                <div className="player-info">
                                    <span>
                                        Date Of Birth: {data.DOB||"Not Available"}
                                    </span>
                                    <span>
                                        Bowling Style: {data.Bowling_Skill||"Not Available"}
                                    </span>
                                    <span>
                                        Batting Style: {data.Batting_Hand||"Not Availble"}
                                    </span>
                                    <span>
                                        Country: {data.Country||"Not Available"}
                                    </span>
                                    <button>
                                        <a 
                                        href={`https://www.google.com/search?q=${data.Player_Name}`} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        More Info
                                        </a>                    
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

    );

}