import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import About from '../About/About'
import Footer from '../Footer/Footer'
import SigninPopup from '../SigninPopup/SigninPopup'
import SignupPopup from '../SignupPopup/SignupPopup'
import InfoPopup from '../InfoPopup/InfoPopup'
import SavedNews from '../SavedNews/SavedNews'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound'
import * as news from '../../utils/NewsApi'
import Preloader from '../Preloader/Preloader';
import ServerError from '../ServerError/ServerError';
// 4d20677ef0194e41b36c1126d9b92ea8

function App() {

    const [popupSigninOpen, setIsSigninPopupOpen] = React.useState(false);
    const [popupSignupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [popupInfoOpen, setIsPopupInfoOpen] = React.useState(false);
    const [loggedIn, setloggedIn] = React.useState(false);
    const [articles, setArticles] = React.useState([]);
    const [preloader, setPreloader] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);
    const [serverError, setServerError] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');

    function handleLoginPopupClick() {
        setIsSigninPopupOpen(true);
    }

    function closeAllPopups() {
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

    // обработчик поиска новостей
    function handleSerchNews(keyword) {
        setArticles([]);
        localStorage.removeItem('articles');
        localStorage.removeItem('keyword');
        setPreloader(true);
        setNotFound(false);
        setServerError(false);
        return news.getNews(keyword)
            .then((data) => {
                console.log(data.articles)
                localStorage.setItem('articles', JSON.stringify(data.articles));
                localStorage.setItem('keyword', keyword);
                setPreloader(false);
                setArticles(data.articles);
                setKeyword(keyword);
                setNotFound(false);

                if (data.articles.length === 0) {
                    setNotFound(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setServerError(true);
            })
            .finally(() => {
                setPreloader(false);
            });
    }

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
                        <SearchForm handleSerchNews={handleSerchNews} />
                    </div>
                    <Main
                        articles={articles}
                        keyword={keyword}
                        preloader={preloader}
                    />
                    {notFound && <NotFound /> }
                    {preloader && <Preloader /> }
                    {serverError && <ServerError /> }
                    <About />
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
