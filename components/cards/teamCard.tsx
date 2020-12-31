export default function TeamCard(props:any){
    const getColor=(index)=>{
        if(index%4==0)
        return "#0DA9F4";
        else if(index%4==1)
        return "#8BC34A";
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
                href={`https://www.google.com/search?q=${data.name}`} 
                target="_blank"
                rel="noopener noreferrer"
                >
                More Info
                </a>                    
            </button>
        </div>  
            )
        })}
    </div>);
}