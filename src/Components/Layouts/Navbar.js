import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () =>
    <div id="Navbar">
        <Link to="/">Home</Link>
        <Link to="/archives">Archives</Link>
    </div>;

export default Navbar;