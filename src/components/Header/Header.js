import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    // const location = useLocation();
    return (
        <header className="header">
            <Link to="/" className="header__nav-logo">NewsExplorer</Link>
        </header>
    )
}

export default Header;