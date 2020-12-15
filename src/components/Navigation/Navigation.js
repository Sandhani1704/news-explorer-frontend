import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav className='header__nav'>
            {/* <div className="header__nav-header">
                <Link to="/" className="header__nav-logo">
                    NewsExplorer
                </Link>
            </div> */}
            <ul className='header__nav-list'>
                <li className='header__nav-list-item'>
                    <Link className='header__nav-link' to='/'>
                        Главная
                    </Link>
                </li>
                <li className='header__nav-list-item'>
                    <button className='header__nav-button' to='/'>
                        Авторизоваться
                    </button>
                </li>
                <li className='header__nav-list-item'>
                    <Link className='header__nav-link' to='/saved-news'>
                        Сохраненные статьи
                    </Link>
                </li>
            </ul>
            <button className='header__nav-hamburger'></button>

        </nav>
    )
}

export default Navigation;