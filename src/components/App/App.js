import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import AboutAuthor from '../AboutAuthor/AboutAuthor'
import Footer from '../Footer/Footer'
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function App() {

    const [popupOpen, setIsPopupOpen] = React.useState(false);

    function handleLoginPopupClick() {
        setIsPopupOpen(true);
    }

    function closeAllPopups() {
        setIsPopupOpen(false);
    }

    React.useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        }

        function closeByOverlayClick(evt) {
            if (evt.target.classList.contains('popup_opened')) {
                closeAllPopups();
            }
        }
        // const popup = document.querySelector('.popup')
        document.addEventListener('keydown', handleEscClose);
        // popup.querySelector('.popup__overlay').addEventListener('click', closeByOverlayClick);
        document.addEventListener('click', closeByOverlayClick);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
            document.removeEventListener('click', closeByOverlayClick);
        };
    }, [popupOpen]);

    return (
        <div className='app'>

            <Route exact path='/'>
                <div className='header-image'>
                    <Header onLogin={handleLoginPopupClick} />
                    <Preloader />
                    <SearchForm />
                </div>
                <AboutAuthor />
                <PopupWithForm isOpen={popupOpen} onClose={closeAllPopups} />
            </Route>
            <Footer />

        </div>
    )
}

export default App;
