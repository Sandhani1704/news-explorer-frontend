import React from 'react';
import './Main.css';
import NewsCard from '../NewsCard/NewsCard'
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList'


function Main({ articles, keyword }) {
    const [newArticles, setNewArticles] = React.useState([]);

    React.useEffect(() => {
        setNewArticles(articles.slice(0, 3));
        // if (articles.length <= 3) {
        //   setShowBth(false);
        // } else {
        //   setShowBth(true);
        // }
    
      }, [articles]);


    return (
        <main className='main'>
            <Preloader />
            <h1 className='main__title'>Результаты поиска</h1>
            <NewsCardList>
            {newArticles.map((articles, key) => (
                <NewsCard
                    key={key}
                    tagTitle={keyword}
                    imageLink={articles.urlToImage}
                    imageAlt={keyword}
                    date={articles.publishedAt}
                    title={articles.title}
                    description={articles.description}
                    source={articles.source}
                />
            ))
}
                {/* articles={articles} keyword={keyword} */}
                {/* <NewsCard
                    tagTitle='Природа'
                    imageLink='https://cdn.pixabay.com/photo/2020/12/12/13/07/bird-5825414__340.jpg'
                    imageAlt='Природа'
                    date='2 августа, 2019'
                    title='Лесные огоньки: история одной фотографии'
                    description='Фотограф отвлеклась от освещения суровой политической реальности Мексики, 
                    чтобы запечатлеть ускользающую красоту одного 
                    из местных чудес природы.'
                    source='Афиша'
                />
                <NewsCard
                    tagTitle='Тайга'
                    imageLink='https://cdn.pixabay.com/photo/2020/12/08/14/27/winter-5814578_960_720.jpg'
                    imageAlt='Тайга'
                    date='2 августа, 2019'
                    title='«Первозданная тайга»: новый фотопроект Игоря Шпиленка'
                    description='Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. 
                    В этот раз он отправился в Двинско-Пинежскую тайгу, где...'
                    source='Медиазона'
                />
                <NewsCard
                    tagTitle='Зима'
                    imageLink='https://media.istockphoto.com/photos/winter-landscape-birch-forest-at-sunset-freshly-clean-snow-picture-id1180434600'
                    imageAlt='Зима'
                    date='2 августа, 2019'
                    title='«Первозданная тайга»: новый фотопроект Игоря Шпиленка'
                    description='Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. 
                    В этот раз он отправился в Двинско-Пинежскую тайгу, где...'
                    source='Медиазона'
                />
                <NewsCard
                    tagTitle='Тайга'
                    imageLink='https://cdn.pixabay.com/photo/2020/12/14/13/51/jasper-national-park-5830929__340.jpg'
                    imageAlt='Тайга'
                    date='2 августа, 2019'
                    title='«Первозданная тайга»: новый фотопроект Игоря Шпиленка'
                    description='Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. 
                    В этот раз он отправился в Двинско-Пинежскую тайгу, где...'
                    source='Медиазона'
                /> */}
            </NewsCardList>
            <button className='main__showmore-button'>Показать еще</button>

        </main>
    )
}

export default Main;