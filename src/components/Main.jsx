import React from 'react';
import {navItems} from "../utils/constants.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";

const Main = () => {
    return (
        <Routes>
            {['/',`${navItems[0].route}/:heroId`].map(p=>
                <Route key={p} path={p} element={<Home/>}></Route>
            )}
            {[navItems[1].route, `${navItems[1].route}/:heroId`].map(p =>
                <Route key={p} path={p} element={<AboutMe/>}></Route>
            )}
            <Route path={`${navItems[2].route}/:heroId`} element={<StarWars/>}></Route>
            <Route path={`${navItems[3].route}/:heroId`} element={<Contact/>}></Route>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;