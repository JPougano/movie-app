import React from "react";
import Home from "./index";

export default function App(){

    
    const [filmData, setFilmData] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d1c1a6d4be12eb98827b466787e5608&language=en-US&page=1")
        .then(res => res.json())
        .then(info => setFilmData(info.results))
    }, [])

    const createAllCards = filmData.map(film => {
        return (
            <Home
                key={film.id}
                image={film.backdrop_path}
                title={film.title}
            />
        )

    })
    return(
        <main className="main--container">
            {createAllCards}
        </main>
    )
}
