import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ onLogin }) {

    return (
        <section className='saved-news'>
            <h2 className='saved-news__title'>Сохранённые статьи</h2>
            <p className='saved-news__subtitle'>Грета, у вас 5 сохранённых статей</p>
            <p className='saved-news__keywords'>По ключевым словам:
            <span className='saved-news__span'> Природа, Тайга</span> и <span className='saved-news__span'>2-м другим</span></p>

        </section>
    )
}

export default SavedNewsHeader;