import React from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import {navItems} from "../utils/constants.jsx";
import {withHeroId} from "../hoc/withHeroId.jsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </div>
    );
};

export default withHeroId(navItems[0].route)(Home);