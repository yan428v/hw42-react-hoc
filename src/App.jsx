import React, {useEffect, useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {UserContext} from "./utils/useContext.jsx";
import {defaultHero} from "./utils/constants.jsx";

const App = () => {
    const [hero,setHero] = useState(defaultHero);
    return (
        <div>
            <UserContext.Provider value={
                {hero,setHero}
            }>
                <Header/>
                <Main/>
            </UserContext.Provider>
            <Footer/>
        </div>
    );
};

export default App;