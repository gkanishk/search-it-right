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
    <div 
    className="players-card" 
    style={{backgroundColor:getColor(props.index)}}
    key={props.playersData.name}
    >
        <div className="players-img-container">
            <img src="/man.svg" alt="person"/>
            <h3>
                {props.playersData.name}
            </h3>
            </div>
            <div className="players-info">
                <strong>
                    Information
                </strong>
                <span>
                    Date Of Birth: {props.playersData.DOB||"Not Available"}
                </span>
                <span>
                    Bowling Style: {props.playersData.Bowling_Skill||"Not Available"}
                </span>
                <span>
                    Batting Style: {props.playersData.Batting_Hand||"Not Availble"}
                </span>
                <span>
                    Country: {props.playersData.Country||"Not Available"}
                </span>
            </div>
            <div className="button-container">
                <button className="player-button">
                     <a 
                        href={`https://www.google.com/search?q=${props.playersData.name}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        More Info
                    </a>                    
                </button>
            </div>
        </div>
    );

}