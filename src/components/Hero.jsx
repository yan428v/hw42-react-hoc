import React, {useContext} from 'react';
import main from "../images/main.jpg";
import {UserContext} from "../utils/useContext.jsx";
import {characters} from "../utils/characters.jsx";

const Hero = () => {
    const {hero} = useContext(UserContext);
    return (
        <section className="float-start w-25">
            <img className="w-100" src={characters[hero].img} alt="hero"/>
        </section>
    );
};

export default Hero;