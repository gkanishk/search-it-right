export default function PlayerCard(props){
    const getColor=(index)=>{
        if(index%4==0)
        return "#1A87BB";
        else if(index%4==1)
        return "#599415";
        else if(index%4==2)
        return "#C75B0D";
        else
        return "#FEC23D";
    }

    return (
        <div className="player-card-container">
                {
                    props.playersData.map(data=>{
                        return (
                            <div className="players-card" style={{backgroundColor:getColor(props.playersData.indexOf(data))}}>
                                <div className="players-img-container">
                                    <img src="/man.svg" alt="person"/>
                                    <h3>
                                        {data.name}
                                    </h3>
                                </div>
                                <div className="players-info">
                                    <strong>
                                        Information
                                    </strong>
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
                                </div>
                                <div className="button-container">
                                <button className="player-button">
                                        <a 
                                        href={`https://www.google.com/search?q=${data.name}`} 
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