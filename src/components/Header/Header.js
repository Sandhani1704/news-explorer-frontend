import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ onLogin }) {

    return (
        <header className="header">
            <Link to="/" className="header__nav-logo">NewsExplorer</Link>
            <Navigation onLogin={onLogin} />
        </header>
    )
}

export default Header;