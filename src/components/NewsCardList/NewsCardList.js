import React from 'react';
import './NewsCardList.css';

function NewsCardList({ children }) {
    return (
        <div className='news-card-list'>
            {children}
        </div>
    );
}

export default NewsCardList;