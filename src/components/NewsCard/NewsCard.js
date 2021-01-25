import React from 'react';
import './NewsCard.css'
import { useLocation } from 'react-router-dom';

function NewsCard({ tagTitle, imageLink, imageAlt, date, title, description, source, sourceLink, loggedIn, keyword, handleArticleDelete, saveArticles, _id, findMySevedNews, article, myArticle, handleLoginPopupClick }) {
    const location = useLocation();
    const [saved, setSaved] = React.useState(false);

    function handleFormatDate(date) {
        let now = new Date(date);
        const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
            'сентября', 'октября', 'ноября', 'декабря'];
        return `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
    }

    function handleClick() {
        findMySevedNews({
            keyword: keyword,
            title: title,
            text: description,
            date: date,
            source: source,
            link: sourceLink,
            image: imageLink,
            article,
            myArticle
        });
    }

    React.useEffect(() => {
        if (saveArticles) {
            setSaved(saveArticles.find((c) => c.title === title));
        }
    }, [saveArticles, title])


    function handleDelete() {
        handleArticleDelete(_id)
    }

    return (
        <div className='news-card'>
            <div className='news-card__content-container'>
                <div className='news-card__image-container'>
                    {location.pathname === '/saved-news' && <button type='button' className='news-card__delete-button' onClick={handleDelete}>
                        {loggedIn && <span className='news-card__button-tooltip'>Убрать из сохранённых</span>}</button>}
                    {location.pathname === '/' && <button type='button' className={`news-card__save-button ${saved ? 'news-card__save-button_marked' : ''}`}
                        onClick={() => {
                            if (!loggedIn) {
                                handleLoginPopupClick();
                            } else {
                                handleClick();
                            }

                        }}>{!loggedIn && <span className='news-card__button-tooltip'>Войдите, чтобы сохранять статьи</span>}</button>}
                    {location.pathname === '/saved-news' && <div className='news-card__tag'>{tagTitle}</div>}
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