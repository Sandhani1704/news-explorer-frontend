import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ onLogin }) {
    const location = useLocation();

    return (
        <header className={`header ${location.pathname === '/saved-news' && 'header_black'}`}>
            <Link to="/" className={`header__nav-logo ${location.pathname === '/saved-news' && 'header__nav-logo_black'}`}>NewsExplorer</Link>
            <Navigation onLogin={onLogin} />
        </header>
    )
}

export default Header;