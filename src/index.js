import React from "react";
import ReactDom from "react-dom";
import { Routes, Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { Pokedex } from "./Components/index.js"

const App = () => {
    return <>
        <h1> Pokedex </h1>
        <Routes>
            <Route path="/" element={<Pokedex />}/>
        </Routes>
        </>
}

ReactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
)