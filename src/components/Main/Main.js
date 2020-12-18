import React from 'react';
import './Main.css';
import NewsCard from '../NewsCard/NewsCard'
import Preloader from '../Preloader/Preloader';


function Main() {


    return (
        <main className='main'>
            <Preloader />
            <h1 className='main__title'>Результаты поиска</h1>
            <NewsCard />
            <button className='main__showmore-button'>Показать еще</button>

        </main>
    )
}

export default Main;