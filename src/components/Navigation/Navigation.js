import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ onLogin }) {
    const [humburgerOpened, setHumburgerOpened] = useState(false);

    return (
        <nav className='header__nav'>
            <button className={`header__nav-hamburger ${humburgerOpened && 'header__nav-hamburger_clicked'}`} onClick={() => {
                setHumburgerOpened(true);
            }}></button>

            <div className={`header__nav-conteiner ${humburgerOpened && 'header__nav-conteiner_opened'}`}>
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
                    <li className='header__nav-list-item'>
                        <Link className='header__nav-link' to='/'>
                            Главная
                    </Link>
                    </li>
                    <li className={`header__nav-list-item ${humburgerOpened && 'header__nav-list-item_is-active'}`}>
                        <button onClick={onLogin} className='header__nav-button' to='/'>
                            Авторизоваться
                    </button>
                    </li>
                    <li className='header__nav-list-item'>
                        <Link className='header__nav-link' to='/saved-news'>
                            Сохраненные статьи
                    </Link>
                    </li>
                </ul>
            </div>



        </nav>
    )
}

export default Navigation;