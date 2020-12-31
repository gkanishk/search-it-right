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
    <div className="card-container">
        {props.teamdata.map(data=>{
            return (
            <div 
            className="team-card" 
            style={{backgroundColor:getColor(props.teamdata.indexOf(data))}}
            key={data.name}
            >
            <img src="/logo.jpg" alt="logo ipl"></img>
            <h3>{data.name}</h3>
            <button>
                <a
                rel="noopener noreferrer"
                href={`https://www.google.com/search?q=${data.name}`} 
                target="_blank"
                >
                More Info
                </a>                    
            </button>
        </div>  
            )
        })}
    </div>);
}