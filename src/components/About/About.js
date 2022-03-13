import React from 'react';
import './About.css';
import aboutAvatar from '../../images/avatar-2.jpg'

function About() {
    return (
        <section className='about'>
            <div className='about__avatar-conteiner'>
                <img className='about__avatar' src={aboutAvatar} alt='Аватар' />
            </div>
            <div className='about__text-conteiner'>
                <h1 className='about__title'>Aнна</h1>
                <p className='about__description'>Фронтенд-разработчик
                </p>
                <p className='about__description'>Прошла обучение в Яндекс.Практикуме на веб-разработчика.
                </p>

                <p className='about__description'>Много времени уделяю совершенствованию своих навыков в написании кода.
                    Когда появляется свободное время, предпочитаю уделять его книгам и интересным фильмам.
                    Люблю бегать и проводить время на природе. Раньше занималась танцами.</p>
            </div>
        </section>
    )
}

export default About