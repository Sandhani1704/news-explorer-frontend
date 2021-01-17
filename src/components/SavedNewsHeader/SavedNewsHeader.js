import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ saveArticles }) {
    const currentUser = React.useContext(CurrentUserContext);

    const myArray = saveArticles.map(i => i = i.keyword);
    const keywordsArr = [...new Set(myArray)];

    function handlerMainText(number) {
        if (number >= 5 || number === 0) {
            return 'сохраненных статей';
        } else if (number > 1 && number < 5) {
            return 'сохраненные статьи';
        } else if (number === 1) {
            return 'сохраненная статья';
        }
    }

    // меняем текст в зависимости от количества стататей
    function handlerText(number) {
        if (number >= 2) {
            return 'По ключевым словам';
        } else if (number < 2) {
            return 'По ключевому слову';
        }
    }

    // меняем текст в зависимости от количества стататей
    function handlerSpanText(number) {
        if (number >= 4) {
            return '-м другим';
        } else {
            return ''
        }
    }

    // вывести ключевые слова с большой буквы
    function ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    const firstKeyword = `${ucFirst(keywordsArr[0])}`;
    const secondKeyword = `${ucFirst(keywordsArr[1])}`;
    const thirdKeyword = `${ucFirst(keywordsArr[2])}`;

    const keys = `${keywordsArr.length !== 0 ? `saved-news__keywords` : `saved-news__keywords_none`}`;
    const span = `${keywordsArr.length > 3 ? `saved-news__keywords-span` : `saved-news__keywords-span_none`}`
    const keyword = `${keywordsArr.length === 3 ? ` ${firstKeyword}, ${secondKeyword}, ${thirdKeyword}` : ` ${firstKeyword}, ${secondKeyword}`}`


    return (
        <section className='saved-news'>
            <h2 className='saved-news__title'>Сохранённые статьи</h2>
            <p className='saved-news__subtitle'>{`${currentUser.name}, у вас ${saveArticles.length} ${handlerMainText(saveArticles.length)}`}</p>
            <p className={keys}>{handlerText(keywordsArr.length)}
                <span className='saved-news__keywords-span'> {keywordsArr.length < 2 ? ` ${firstKeyword}` : `${keyword}`}</span>
                <span className={span}> и {keywordsArr.length - 2}{handlerSpanText(keywordsArr.length)}</span></p>

        </section>
    )
}

export default SavedNewsHeader;