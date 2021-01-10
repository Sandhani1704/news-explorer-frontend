import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews({ articles, handleSaveNews, loggedIn, keyword, saveArticles, save }) {
    
    
    return (
        <section className='saved-news'>
            <NewsCardList>
            { saveArticles.map((article) => (
                <NewsCard
                tagTitle={article.keyword}
                sourceLink={article.url}
                imageLink={article.urlToImage}
                imageAlt={article.keyword}
                date={article.publishedAt}
                title={article.title}
                description={article.description}
                source={article.source.name}
                _id={article._id}
                loggedIn={loggedIn}
                handleSaveNews={handleSaveNews}
                keyword={keyword}
                articles={articles}
                saveArticles={saveArticles}
                save={save}
                /> 
                ))
                }
                
            </NewsCardList>
        </section>
    );
}

export default SavedNews;