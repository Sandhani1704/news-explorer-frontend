import React from 'react';
import './Main.css';
import NewsCard from '../NewsCard/NewsCard'
import NewsCardList from '../NewsCardList/NewsCardList'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main({ articles, keyword, loggedIn, handleSaveNews, saveArticles }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [newArticles, setNewArticles] = React.useState([]);
    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        setNewArticles(articles.slice(0, 3));
        if (articles.length <= 3) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }

    }, [articles]);

    function handleShowButtonClick() {
        setNewArticles(articles.slice(0, newArticles.length + 3));
        if (newArticles.length >= articles.length - 3) {
            setShowButton(false);
        }
    }


    return (
        <main className={`main ${newArticles.length > 0 ? '' : 'main_none'}`}>
            <h1 className='main__title'>Результаты поиска</h1>
            <NewsCardList>
                {newArticles.map((article, key) => (
                    <NewsCard
                        key={key}
                        tagTitle={keyword}
                        sourceLink={article.url}
                        imageLink={article.urlToImage}
                        imageAlt={keyword}
                        date={article.publishedAt}
                        title={article.title}
                        description={article.description}
                        source={article.source.name}
                        loggedIn={loggedIn}
                        handleSaveNews={handleSaveNews}
                        saveArticles={saveArticles}
                        keyword={keyword}
                        currentUser={currentUser}
                        
                    />
                ))
                }

            </NewsCardList>
            { showButton && <button className='main__showmore-button' onClick={handleShowButtonClick}>Показать еще</button>}

        </main>
    )
}

export default Main;