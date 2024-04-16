import React, {useContext} from 'react';
import Navigation from "./Navigation.jsx";
import {UserContext} from "../utils/useContext.jsx";
import {characters} from "../utils/characters.jsx";

const Header = () => {
    const {hero} = useContext(UserContext);
    return (
        <header>
            <Navigation/>
            <p className="text-center py-4 h1">{characters[hero].name}</p>
        </header>
    );
};

export default Header;