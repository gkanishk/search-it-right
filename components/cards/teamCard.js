export default function TeamCard(props){
    const getColor=(index)=>{
        if(index%4==0)
        return "#1A87BB";
        else if(index%4==1)
        return "#599415";
        else if(index%4==2)
        return "#F4443E";
        else
        return "#FEC23D";
    }
    return (
        <div 
            className="team-card" 
            style={{backgroundColor:getColor(props.index)}}
            key={props.playersData.name}
            >
            <img src="/logo.jpg" alt="logo ipl"></img>
            <h3>{props.playersData.name}</h3>
            <button className="button-main">
                <a
                rel="noopener noreferrer"
                href={`https://www.google.com/search?q=${props.playersData.name}`} 
                target="_blank"
                >
                More Info
                </a>                    
            </button>
        </div>
    );
}