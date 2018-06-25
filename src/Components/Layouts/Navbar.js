import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const Navbar = () =>
    <div id="Navbar">
        <Menu>
            <Menu.Item>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/archives">Archives</Link>
            </Menu.Item>
        </Menu>
    </div>;

export default Navbar;