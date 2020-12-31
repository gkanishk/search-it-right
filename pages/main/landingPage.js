import Link from 'next/link'

export default function LandingPage(){
    return (
        <>
        <img src="/images/cricket.svg" style={{width:"20rem"}} alt="Cricket logo"></img>
        <h3>
            Search it right the only app you need to get all your IPL data.    
        </h3>
        <section className="readme-container">
            Check Instructions and README file{" "}
            
            <Link href="/readme">
            <a>
            👉here
            </a>
            </Link>
        </section>      
        </>
    );
}