
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../utils/useContext.jsx";
import {characters} from "../utils/characters.jsx";
import {defaultHero} from "../utils/constants.jsx";

export const withHeroId = (route) => (Component) => (props) => {
    const {heroId} = useParams();
    const {setHero: changeMainHero} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!Object.keys(characters).includes(heroId)){
            navigate(`/${route}/${defaultHero}`);
        }else 
        {
            changeMainHero(heroId);
        }
    },[heroId])

    return (
        <Component {...props}/>
    )
}