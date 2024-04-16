import React, {useContext, useEffect, useState} from 'react';
import {defaultHero, navItems, period} from "../utils/constants.jsx";
import "../css/aboutMe.css";
import {useNavigate, useParams} from "react-router-dom";
import {characters} from "../utils/characters.jsx";
import {UserContext} from "../utils/useContext.jsx";
import {withHeroId} from "../hoc/withHeroId.jsx";

const AboutMe = () => {
    const [hero, setHero] = useState();
    const navigate = useNavigate();
    const {heroId} = useParams();
    const {setHero: changeMainHero} = useContext(UserContext);

    useEffect(() => {
            const hero = JSON.parse(localStorage.getItem(heroId));
            if (hero && ((Date.now() - hero.time) < period)) {
                setHero(hero.payload);
            } else {
                fetch(characters[heroId].url)
                    .then(response => response.json())
                    .then(data => {
                        const hero = {
                            "id": data.id,
                            "name": data.name,
                            "height": data.height,
                            "mass": data.mass,
                            "hair_color": data.hair_color,
                            "skin_color": data.skin_color,
                            "eye_color": data.eye_color,
                            "birth_year": data.birth_year,
                            "gender": data.gender
                        };
                        setHero(hero)
                        const info = {
                            payload: hero,
                            time: Date.now()
                        }
                        localStorage.setItem(heroId, JSON.stringify(info));
                    });
            }
            return () => console.log('AboutMe unmounted');
    }, [heroId])

    return (
        <div>
            {(hero) &&
                <div className={"farGalaxy hero_box"}>
                    <p><span className={"hero_text"}>Name:</span>{hero.name}</p>
                    <p><span className={"hero_text"}>Id:</span>{hero.id}</p>
                    <p><span className={"hero_text"}>Height:</span> {hero.height}</p>
                    <p><span className={"hero_text"}>Birth Year:</span> {hero.birth_year}</p>
                    <p><span className={"hero_text"}>Eye color:</span> {hero.eye_color}</p>
                    <p><span className={"hero_text"}>Gender:</span> {hero.gender}</p>
                    <p><span className={"hero_text"}>Mass:</span> {hero.mass}</p>
                </div>
            }
        </div>
    );
}

export default withHeroId(navItems[1].route)(AboutMe);