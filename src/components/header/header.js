import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header(props) {
    return (
        <header>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/settings">Settings</Link>
        </header>
    )
}

export default Header;