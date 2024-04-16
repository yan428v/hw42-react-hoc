import React, {useState, useEffect, useContext} from 'react';
import {base_url, defaultHero, navItems, period_month} from "../utils/constants.jsx";
import "../css/contact.css";
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../utils/useContext.jsx";
import {characters} from "../utils/characters.jsx";

const Contact = ()=> {
    const [planets, setPlanets] = useState(['wait...']);
    const {heroId} = useParams();
    const {setHero: changeMainHero} = useContext(UserContext);
    const navigate = useNavigate();

    const fillPlanets = async function (url) {
        const response = await fetch(url);
        const json = await response.json();
        const planets = json.map(item => item.name);
        setPlanets(planets);
        const info = {
            payload: planets,
            time: Date.now()
        }
        localStorage.setItem('planets', JSON.stringify(info));
    }

    useEffect(() => {
            if(!Object.keys(characters).includes(heroId)){
                navigate(`/${navItems[3].route}/${defaultHero}`);
            }else{
                changeMainHero(heroId);
                const planetsInfo = JSON.parse(localStorage.getItem("planets"));
                if(planetsInfo && ((Date.now() - planetsInfo.time) < period_month)){
                    setPlanets(
                        planetsInfo.payload
                    )
                }else {
                    fillPlanets(`${base_url}/v1/planets`);
                }
            }
        }, [heroId]);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.."/>
                </label>
                <label>Planet
                    <select name="planet">{
                        planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                </label>
                <label>Subject
                    <textarea name="subject" placeholder="Write something.."/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}

export default Contact; //TODO use withHeroId