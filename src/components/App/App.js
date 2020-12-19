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

    function handleLoginPopupClick() {
        setIsPopupInfoOpen(true);
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
    }

    // React.useEffect(() => {
    //     function handleEscClose(evt) {
    //         if (evt.key === 'Escape') {
    //             closeAllPopups();
    //         }
    //     }

    //     // function closeByOverlayClick(evt) {
    //     //     if (evt.target.classList.contains('popup_opened')) {
    //     //         closeAllPopups();
    //     //     }
    //     // }
    //     // const popup = document.querySelector('.popup')
    //     document.addEventListener('keydown', handleEscClose);
    //     // popup.querySelector('.popup__overlay').addEventListener('click', closeByOverlayClick);
    //     // document.addEventListener('click', closeByOverlayClick);

    //     return () => {
    //         document.removeEventListener('keydown', handleEscClose);
    //         // document.removeEventListener('click', closeByOverlayClick);
    //     };
    // });

    return (
        <div className='app'>

            <Switch>
                <Route path="/saved-news">
                    <Header onLogin={handleLoginPopupClick} />
                    <SavedNewsHeader />
                    <SavedNews />
                    <Footer />
                </Route>

                <Route path='/'>
                    <div className='header-image'>
                        <Header onLogin={handleLoginPopupClick} />
                        <SearchForm />
                    </div>
                    <Main />
                    <AboutAuthor />
                    {/* <SigninPopup isOpen={popupSigninOpen} onSignup={handleSignupPopupClick} onClose={closeAllPopups} buttonText='Войти' /> */}
                    <SigninPopup isOpen={popupSigninOpen} onClose={closeAllPopups} onSignup={handleSignupPopupClick} buttonText='Войти' />
                    <SignupPopup isOpen={popupSignupOpen} onClose={closeAllPopups} onSignin={handleSigninPopupClick} buttonText='Зарегистрироваться' />
                    {/* <InfoPopup isOpen={popupInfoOpen} onClose={closeAllPopups} /> */}
                    <Footer />
                </Route>

            </Switch>
        </div>
    )
}

export default App;
