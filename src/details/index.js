import React from "react";
import { useParams } from "react-router-dom";


export default function Details(){

    const params = useParams()
    console.log(params)

    return (
        <h1>Página de detalhes</h1>
    )
}
