import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews({ articles, handleSaveNews, loggedIn, keyword, saveArticles, currentUser, getMySaveNews }) {

    // React.useEffect(() => {
    // getMySaveNews()
    // }, [currentUser]);
    
    console.log(saveArticles);
    return (
        <section className='saved-news'>
            <NewsCardList>
            
            { saveArticles.map((article) => (
                <NewsCard
                tagTitle={article.keyword}
                sourceLink={article.url}
                imageLink={article.image}
                imageAlt={article.keyword}
                date={article.date}
                title={article.title}
                description={article.text}
                source={article.source}
                _id={article._id}
                loggedIn={loggedIn}
                handleSaveNews={handleSaveNews}
                keyword={keyword}
                articles={articles}
                currentUser={currentUser}
                // saveArticles={saveArticles}
                
                /> 
                ))
                }
                
            </NewsCardList>
        </section>
    );
}

export default SavedNews;