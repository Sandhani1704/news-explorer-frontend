import React from 'react';
import './NewsCard.css'
import { useLocation } from 'react-router-dom';

function NewsCard({ tagTitle, imageLink, imageAlt, date, title, description, source, sourceLink }) {
    const location = useLocation();

    function handleFormatDate (date) {
        let now = new Date(date);
        const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август',
        'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        return `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
      }

    return (
        <div className='news-card'>
            <div className='news-card__content-container'>
                <div className='news-card__image-container'>
                    {location.pathname === '/saved-news' && <button type='button' className='news-card__delete-button'></button>}
                    {location.pathname === '/' && <button type='button' className='news-card__save-button'>
                        <span className='news-card__button-tooltip'>Войдите, чтобы сохранять статьи</span>
                    </button>}
                    <div className='news-card__tag'>{tagTitle}</div>
                    <a href={sourceLink} target='_blank' rel='noopener noreferrer' className='news-card__source-link'><img className='news-card__image' src={imageLink} alt={imageAlt} /></a>
                </div>
                <p className='news-card__date'>{handleFormatDate(date)}</p>
                <h3 className='news-card__title'>{title}</h3>
                <p className='news-card__description'>{description}</p>
            </div>
            <p className='news-card__source'>{source}</p>
        </div>
    )

}

export default NewsCard;