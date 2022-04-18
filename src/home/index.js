import React from "react";
import { Link } from "react-router-dom";


export default function Home(props){


    return (
        <article className="card--container">

            <Link to={`/details/${props.id}`}>
                <img className="card--image" src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="Card's main image"/>
            </Link>
            <span className="card--title">{props.title}</span>
        </article>
    )
}