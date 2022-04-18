import React , {useState}from "react";
import Home from "./home/index";


export default function App(){

    
    const [filmData, setFilmData] = useState([])

    React.useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d1c1a6d4be12eb98827b466787e5608&language=en-US&page=1")
        .then(res => res.json())
        .then(info => setFilmData(info.results))
    }, [])

    const createAllCards = filmData.map(film => {
        return (
            <Home
                key={film.id}
                id={film.id}
                image={film.poster_path}
                title={film.title}
            />
        )

    })
    return(
        <main>
            <h1 className="main--title">Movies</h1>
            <section className="main--container">
                {createAllCards}
            </section>
        </main>
    )
}
