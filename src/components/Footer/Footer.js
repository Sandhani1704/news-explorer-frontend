import React from 'react';
import './Footer.css';
import FacebookIcon from '../../images/facebook-icon.png'
import GithubIcon from '../../images/github-icon.png'

function Footer() {
    return (

        <footer className='footer'>
            <p className='footer__copyright'>&copy; 2020 Supersite, Powered by News API</p>
            <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                    <li className='footer__nav-list-item'>
                        <a href="/" className='footer__link'>
                            Главная
                        </a>
                    </li>
                    <li className='footer__nav-list-item'>
                        <a href="https://praktikum.yandex.ru/" className='footer__link'>
                            Яндекс.Практикум
                        </a>
                    </li>
                </ul>
                <ul className='footer__social-list'>
                    <li className='footer__nav-list-item'>
                        <a href="https://www.facebook.com/NyushaGalkina" className='footer__link'>
                            <img className='footer__icon-image' src={FacebookIcon} alt='Facebook' />
                        </a>
                    </li>
                    <li className='footer__nav-list-item'>
                        <a href="https://github.com/Sandhani1704" className='footer__link'>
                            <img className='footer__icon-image' src={GithubIcon} alt='Github' />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>


    );
}

export default Footer;