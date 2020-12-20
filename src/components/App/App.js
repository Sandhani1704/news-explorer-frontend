import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import AboutAuthor from '../AboutAuthor/AboutAuthor'
import Footer from '../Footer/Footer'
import SigninPopup from '../SigninPopup/SigninPopup'
import SignupPopup from '../SignupPopup/SignupPopup'
import InfoPopup from '../InfoPopup/InfoPopup'
import SavedNews from '../SavedNews/SavedNews'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import Main from '../Main/Main'

function App() {

    // const [popupOpen, setIsPopupOpen] = React.useState(false);
    const [popupSigninOpen, setIsSigninPopupOpen] = React.useState(false);
    const [popupSignupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [popupInfoOpen, setIsPopupInfoOpen] = React.useState(false);
    const [loggedIn, setloggedIn] = React.useState(false);

    function handleLoginPopupClick() {
        setIsSigninPopupOpen(true);
    }

    function closeAllPopups() {
        // setIsPopupOpen(false);
        setIsSignupPopupOpen(false);
        setIsPopupInfoOpen(false);
        setIsSigninPopupOpen(false);
    }

    function handleSignupPopupClick() {
        setIsSigninPopupOpen(false);
        setIsSignupPopupOpen(true);
    }

    function handleSigninPopupClick() {
        setIsSignupPopupOpen(false);
        setIsSigninPopupOpen(true);
        setIsPopupInfoOpen(false);
    }

    function handleRegisterSubmit(evt) {
        evt.preventDefault();
        setIsPopupInfoOpen(true);
        setIsSignupPopupOpen(false)
    }

    function handleLoginSubmit(evt) {
        evt.preventDefault();
        setIsSigninPopupOpen(false);
        setloggedIn(true);
    }

    React.useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        }

        function closeByOverlayClick(evt) {
            if (evt.target.classList.contains('popup__overlay')) {
                closeAllPopups();
            }
        }

        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('click', closeByOverlayClick);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
            document.removeEventListener('click', closeByOverlayClick);
        };
    });

    return (
        <div className='app'>

            <Switch>
                <Route path="/saved-news">
                    <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} />
                    <SavedNewsHeader />
                    <SavedNews />
                    <Footer />
                </Route>

                <Route path='/'>
                    <div className='header-image'>
                        <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} />
                        <SearchForm />
                    </div>
                    <Main />
                    <AboutAuthor />
                    {/* <SigninPopup isOpen={popupSigninOpen} onSignup={handleSignupPopupClick} onClose={closeAllPopups} buttonText='Войти' /> */}
                    <SigninPopup isOpen={popupSigninOpen} onClose={closeAllPopups} onSignup={handleSignupPopupClick} onSubmit={handleLoginSubmit} buttonText='Войти' />
                    <SignupPopup isOpen={popupSignupOpen} onClose={closeAllPopups} onSignin={handleSigninPopupClick} onSubmit={handleRegisterSubmit} buttonText='Зарегистрироваться' />
                    <InfoPopup isOpen={popupInfoOpen} onSignin={handleSigninPopupClick} onClose={closeAllPopups} />
                    <Footer />
                </Route>

            </Switch>
        </div>
    )
}

export default App;
