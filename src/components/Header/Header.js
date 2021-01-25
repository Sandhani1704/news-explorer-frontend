import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header({ onLogin, loggedIn, loggedOut }) {

const currentUser = React.useContext(CurrentUserContext);

    const location = useLocation();

    return (
        <header className={`header ${location.pathname === '/saved-news' && 'header_black'}`}>
            <Link to='/' className={`header__nav-logo ${location.pathname === '/saved-news' && 'header__nav-logo_black'}`}>NewsExplorer</Link>
            <Navigation onLogin={onLogin} loggedIn={loggedIn} loggedOut={loggedOut} currentUser={currentUser}/>
        </header>
    )
}

export default Header;