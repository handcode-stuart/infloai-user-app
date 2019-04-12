import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => (
    <div className='nav'>
        <div className='container'>
            <ul>
                <li>
                    <NavLink exact activeClassName='active' to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/users'>
                        Users
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
);

export default Nav;
