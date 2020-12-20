import React from 'react';
import './SearchForm.css';

function SearchForm() {

    return (

        <form className='search-form' name='search-form'>
            <h1 className='search-form__title'>Что творится в мире?</h1>
            <p className='search-form__description'>
                Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
                </p>
            <div class='search-form__input-container'>
                <input class='search-form__input' placeholder='Введите тему новости' name='search-text' required />
                <button type='submit' class='search-form__button-find'>Искать</button>
            </div>
        </form>

    )
}

export default SearchForm;