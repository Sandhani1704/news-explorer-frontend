import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews() {
    return (
        <section className='saved-news'>
            <NewsCardList>
                <NewsCard
                    tagTitle='Природа'
                    imageLink='https://cdn.pixabay.com/photo/2020/12/13/16/22/snow-5828736_960_720.jpg'
                    imageAlt='парк'
                    date='2 августа, 2019'
                    title='Национальное достояние – парки'
                    description='В 2016 году Америка отмечала важный юбилей: 
                    сто лет назад здесь начала складываться система национальных парков – 
                    охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
                    source='ДЗЕН'
                />
                <NewsCard
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
                />
            </NewsCardList>
        </section>
    );
}

export default SavedNews;