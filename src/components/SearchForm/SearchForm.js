import React from 'react';
import './SearchForm.css';

function SearchForm({ handleSerchNews }) {

  const [keyword, setKeyword] = React.useState('');
  const [searchErrorMessage, setSearchErrorMessage] = React.useState('');

  function handleChangeKeyword(e) {
    setKeyword(e.target.value);
  }

    function handleSubmit(e) {
        e.preventDefault();
        if (!keyword) {
          setSearchErrorMessage('Нужно ввести ключевое слово');
          return;
        }
        handleSerchNews(keyword)
        setSearchErrorMessage('');
      }

    return (

        <form className='search-form' name='search-form' noValidate onSubmit={handleSubmit}>
            <h1 className='search-form__title'>Что творится в мире?</h1>
            <p className='search-form__description'>
                Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
                </p>
            <div className='search-form__input-container'>
                <input className='search-form__input' placeholder='Введите тему новости' name='search-text' value={keyword || ''} required  onChange={handleChangeKeyword}/>
                <span id='search-error' className='search__input-error'>{searchErrorMessage}</span>
                <button type='submit' className='search-form__button-find'>Искать</button>
            </div>
        </form>

    )
}

export default SearchForm;