import React, { useState } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ onLogin, loggedIn }) {
    const [humburgerOpened, setHumburgerOpened] = useState(false);
    const location = useLocation();

    return (
        <nav className='header__nav'>
            <button className={`header__nav-hamburger ${location.pathname === '/saved-news' && 'header__nav-hamburger_black'} ${humburgerOpened && 'header__nav-hamburger_clicked'}`}
                onClick={() => {
                    setHumburgerOpened(true);
                }}>
            </button>

            <div className={`header__nav-conteiner ${humburgerOpened ? 'header__nav-conteiner_opened' : ''}`}>
                <div className='header__nav-header'>
                    {humburgerOpened && <Link to='/' className='header__nav-logo'>
                        NewsExplorer
                    </Link>}
                    <button
                        className='header__nav-close'
                        onClick={() => {
                            setHumburgerOpened(false);
                        }}
                    ></button>
                </div>
                <ul className={`header__nav-list ${humburgerOpened && 'header__nav-list_opened'}`}>
                    <li className={`header__nav-list-item ${location.pathname === '/' && 'header__nav-list-item_active'}`}>
                        <Link className={`header__nav-link ${location.pathname === '/saved-news' && 'header__nav-link_black'}`} to='/'>
                            Главная
                        </Link>
                    </li>
                    <li className={`header__nav-list-item ${location.pathname === '/saved-news' && 'header__nav-list-item_active_black'}`}>
                        {!loggedIn ? <button onClick={onLogin} className='header__nav-button'>
                            Авторизоваться
                      </button> : <Link className={`header__nav-link ${location.pathname === '/saved-news' && 'header__nav-link_black'}`} to='/saved-news'>
                                Сохраненные статьи
                        </Link>}
                    </li>

                    <li className='header__nav-list-item'>
                        {loggedIn && <button onClick={onLogin} className={`header__nav-button ${location.pathname === '/saved-news' && 'header__nav-button_black'}`} to='/'>
                            Грета
                            <i className={`header__nav-logout-icon ${location.pathname === '/saved-news' && 'header__nav-logout-icon_black'}`}></i>
                        </button>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;