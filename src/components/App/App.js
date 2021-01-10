import './App.css';
import React from 'react';
// import MainApi from '../../utils/MainApi';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import { register, login, getContent, saveArticle, getAllArticles } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
// 4d20677ef0194e41b36c1126d9b92ea8

function App() {

    const [currentUser, setСurrentUser] = React.useState({});
    const [popupSigninOpen, setIsSigninPopupOpen] = React.useState(false);
    const [popupSignupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [popupInfoOpen, setIsPopupInfoOpen] = React.useState(false);
    const [loggedIn, setloggedIn] = React.useState(false);
    const [articles, setArticles] = React.useState([]);
    const [saveArticles, setSaveNewArticles] = React.useState([]);
    const [save, setSave] = React.useState(false);
    const [preloader, setPreloader] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);
    const [serverError, setServerError] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const history = useHistory();

    function handleRegister(password, email, name) {
        register(password, email, name)
            .then((res) => {
                if (res.data) {
                    // console.log(res.data.name)
                    // localStorage.setItem('name', JSON.stringify(res.data.name))
                    setIsPopupInfoOpen(true);
                    setIsSignupPopupOpen(false);
                    setUserName(res.data.name)
                }
                else if (res.message) {
                    setMessage(res.message);

                }
                else {
                    setMessage('Что-то пошло не так! Попробуйте ещё раз.');
                }
            })
            .catch((err) => {
                console.log(err)
                //  if (err.status === 409) {
                //     setMessage('Пользователь с таким email уже зарегистрирован');
                // } else {
                //     setMessage('Что-то пошло не так! Попробуйте ещё раз');
                // }
            })
    }

    function handleLogin(password, email) {
        login(password, email)
            .then((res) => {
                // console.log(res)
                if (res.token) {
                    // localStorage.setItem('token', JSON.stringify(res.token))
                    localStorage.setItem('token', res.token)
                    tokenCheck();
                    // setloggedIn(true);
                    // setIsSigninPopupOpen(false);
                    closeAllPopups()
                    // history.push('/saved-news');
                }
                else if (res.message) {
                    setMessage(res.message);

                }
                else {
                    setMessage('Что-то пошло не так! Попробуйте ещё раз.');
                }
            })
            .catch((err) => {
                console.log(err)

            })
    }

    const tokenCheck = () => {
        const token = localStorage.getItem('token');
        console.log(token)

        if (!token) {
            return;
        }

        getContent(token)
            .then((res) => {
                if (res) {
                    console.log(res)
                    setСurrentUser({
                        id: res._id,
                        name: res.name,
                    });
                    setloggedIn(true);
                    history.push('/')
                }
            });
    }

    React.useEffect(() => {
        tokenCheck();
        const articles = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];
        setArticles(articles);
    }, []);

    function handleLogout() {
        localStorage.removeItem('token');
        setloggedIn(false);
        history.push('/signin');
    }

    function handleLoginPopupClick() {
        setIsSigninPopupOpen(true);
        setMessage('');
    }

    function closeAllPopups() {
        setIsSignupPopupOpen(false);
        setIsPopupInfoOpen(false);
        setIsSigninPopupOpen(false);
    }

    function handleSignupPopupClick() {
        setIsSigninPopupOpen(false);
        setIsSignupPopupOpen(true);
        setMessage('');
    }

    function handleSigninPopupClick() {
        setIsSignupPopupOpen(false);
        setIsSigninPopupOpen(true);
        setIsPopupInfoOpen(false);
    }

    // React.useEffect(() => {
    //     if (loggedIn) {
    //         Promise.all([getContent()])
    //             .then(([userInfo]) => {
    //                 setСurrentUser(userInfo)
    //             })
    //             .catch((error) => console.log('Ошибка запроса - ' + error))
    //     }
    // }, [loggedIn]);

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

    // получить сохраненные новости
  function getMySaveNews() {
    if (loggedIn){
      return getAllArticles()
        .then((news) => {
          const arrayMyNews = news.filter((c) => (c.owner === currentUser.id));
          setSaveNewArticles(arrayMyNews);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }

    function handleSaveNews(article) {
        return saveArticle(article)
            .then((res) => {
                setSaveNewArticles([res, ...saveArticles]);
                setSave(true);
                // getMySaveNews();
                console.log(res);
            })
            .catch((error) => console.log('Ошибка запроса - ' + error))
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='app'>

                <Switch>

                    <ProtectedRoute handleLoginPopupClick={handleLoginPopupClick} loggedIn={loggedIn} path="/saved-news">
                        <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} loggedOut={handleLogout} />
                        <SavedNewsHeader />
                        <SavedNews
                            articles={articles}
                            keyword={keyword}
                            handleSaveNews={handleSaveNews}
                            loggedIn={loggedIn}
                            saveArticles={saveArticles}
                            save={save} />
                        <Footer />
                    </ProtectedRoute>

                    <Route path='/'>
                        <div className='header-image'>
                            <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} userName={userName} loggedOut={handleLogout} />
                            <SearchForm handleSerchNews={handleSerchNews} />
                        </div>
                        <Main
                            loggedIn={loggedIn}
                            articles={articles}
                            keyword={keyword}
                            preloader={preloader}
                            handleSaveNews={handleSaveNews}
                        />
                        {notFound && <NotFound />}
                        {preloader && <Preloader />}
                        {serverError && <ServerError />}
                        <About />
                        <SigninPopup isOpen={popupSigninOpen} onClose={closeAllPopups} onSignup={handleSignupPopupClick} onLogin={handleLogin} message={message} buttonText='Войти' />
                        <SignupPopup isOpen={popupSignupOpen} onClose={closeAllPopups} onSignin={handleSigninPopupClick} onRegister={handleRegister} message={message} buttonText='Зарегистрироваться' />
                        <InfoPopup isOpen={popupInfoOpen} onSignin={handleSigninPopupClick} onClose={closeAllPopups} />
                        <Footer />
                    </Route>

                </Switch>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
