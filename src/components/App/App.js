import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import AboutAuthor from '../AboutAuthor/AboutAuthor'
import Footer from '../Footer/Footer'
import SignupPopup from '../SignupPopup/SignupPopup'
import SigninPopup from '../SigninPopup/SigninPopup'
import InfoPopup from '../InfoPopup/InfoPopup'
import SavedNews from '../SavedNews/SavedNews'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'

function App() {

    const [popupOpen, setIsPopupOpen] = React.useState(false);
    const [popupSigninOpen, setIsSigninPopupOpen] = React.useState(false);
    const [popupSignupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [popupInfoOpen, setIsPopupInfoOpen] = React.useState(false);

    function handleLoginPopupClick() {
        setIsPopupInfoOpen(true);
        setIsSignupPopupOpen(true);
        setIsSigninPopupOpen(true);
    }

    function closeAllPopups() {
        setIsPopupOpen(false);
        setIsSignupPopupOpen(false);
        setIsPopupInfoOpen(false);
        setIsSigninPopupOpen(false);
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

            <Switch>
                <Route path="/saved-news">
                    <Header onLogin={handleLoginPopupClick} />
                    <SavedNewsHeader />
                    <SavedNews />
                </Route>

                <Route exact path='/'>
                    <div className='header-image'>
                        <Header onLogin={handleLoginPopupClick} />
                        <Preloader />
                        <SearchForm />
                    </div>
                    <AboutAuthor />
                    <SignupPopup isOpen={popupSignupOpen} onClose={closeAllPopups} buttonText='Зарегистрироваться' />
                    <InfoPopup isOpen={popupInfoOpen} onClose={closeAllPopups} />
                    <SigninPopup isOpen={popupSigninOpen} onClose={closeAllPopups} buttonText='Войти' />
                </Route>
                <Footer />
            </Switch>
        </div>
    )
}

export default App;
