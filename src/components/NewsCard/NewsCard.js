import React from 'react';

import './NewsCard.css'
import imageCard from '../../images/card-image.png';

function NewsCard() {

    return (
        <div className='news-card'>
            <div className='news-card__content-container'>
                <div className='news-card__image-container'>
                    <button type='button' className='news-card__delete-button'></button>
                    <div class='news-card__tag'>Яблоко</div>
                    <img className='news-card__image' src={imageCard} alt='' />
                </div>
                <time className='news-card__date'>17 декабря, 2020</time>
                <h3 className='news-card__title'>Лесные огоньки: история одной фотографии</h3>
                <p className='news-card__description'>Фотограф отвлеклась от освещения суровой
                политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
                из местных чудес природы.</p>
            </div>
            <p className='news-card__source'>Афиша</p>
        </div>
    )

}

export default NewsCard;