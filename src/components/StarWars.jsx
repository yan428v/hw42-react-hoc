import React from 'react';
import styles from '../css/farGalaxy.module.css';
import {navItems} from "../utils/constants.jsx";
import {withHeroId} from "../hoc/withHeroId.jsx";

const StarWars = () => {
    const starWarsInfo = sessionStorage.getItem('opening_crawl');
    return (
        <div className={styles.farGalaxy}>
            {starWarsInfo}
        </div>
    );
};

export default withHeroId(navItems[2].route)(StarWars);