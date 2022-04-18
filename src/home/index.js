import React from "react";

export default function Home(props){


    return (
        <article className="card--container">
            <a href="#">
                <img className="card--image" src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="Card's main image"/>
            </a>
            <span className="card--title">{props.title}</span>
        </article>
    )
}