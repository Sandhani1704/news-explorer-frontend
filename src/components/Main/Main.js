import React from 'react';
import './Main.css';
import NewsCard from '../NewsCard/NewsCard'
import NewsCardList from '../NewsCardList/NewsCardList'


function Main({ articles, keyword }) {
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
                {newArticles.map((articles, key) => (
                    <NewsCard
                        // key={key}
                        tagTitle={keyword}
                        sourceLink={articles.url}
                        imageLink={articles.urlToImage}
                        imageAlt={keyword}
                        date={articles.publishedAt}
                        title={articles.title}
                        description={articles.description}
                        source={articles.source.name}
                    />
                ))
                }

            </NewsCardList>
            { showButton && <button className='main__showmore-button' onClick={handleShowButtonClick}>Показать еще</button>}

        </main>
    )
}

export default Main;