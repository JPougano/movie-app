import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './global.css';
import Details from "./details/index"


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App />}/>
            <Route path='/details/:id' element={ <Details />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'));