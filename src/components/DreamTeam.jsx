import React, {useContext} from 'react';
import {friends} from "../utils/constants.jsx";
import Friend from "./Friend.jsx";
import {characters} from "../utils/characters.jsx";
import {UserContext} from "../utils/useContext.jsx";

const DreamTeam = () => {
    const {hero} = useContext(UserContext);
    return (
        <section className="float-end w-50 row border mx-1 mt-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {Object.keys(characters).filter(f => f!== hero)
                .map((f,i)=><Friend key={i} pos={i+1} friend={f}/>)}
        </section>
    );
};

export default DreamTeam;