import React from "react";

export default function Home(props){

    function resizeCard(){
        console.log(props.title)
    }


    return (
        <article onMouseOver={resizeCard} className="card--container">
            <img className="card--image" src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="Card's main image"/>
            <span className="card--title">{props.title}</span>
        </article>
    )
}