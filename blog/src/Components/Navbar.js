import React from 'react';
import { Link, NavLink,withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;