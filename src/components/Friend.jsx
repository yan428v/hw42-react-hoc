import React from 'react';
import {useNavigate} from "react-router-dom";
import {navItems} from "../utils/constants.jsx";
import {characters} from "../utils/characters.jsx";

const Friend = ({friend,pos}) => {
    const navigate = useNavigate();
    let styles = "col-4 p-1";
    if(pos===7){
        styles = "bottom-left col-4 p-1";
    }
    if(pos === 9 ){
        styles = "bottom-right col-4 p-1";
    }
    return (
        <img onClick={()=> navigate(`/${navItems[0].route}/${friend}`)}
             className={styles} src={characters[friend].img} alt="friend"/>
    );
};

export default Friend;