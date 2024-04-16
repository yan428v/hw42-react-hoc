import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../utils/useContext.jsx";

const NavItem = ({item}) => {
    const {hero} = useContext(UserContext);
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1"
                to={`${item.route}/${hero}`}>{item.title}</Link>
        </li>
    );
};

export default NavItem;