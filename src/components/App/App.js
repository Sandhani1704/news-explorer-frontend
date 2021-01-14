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
import { register, login, getContent, saveArticle, getAllArticles, deleteArticle } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {

    const [currentUser, setСurrentUser] = React.useState({});
    const [popupSigninOpen, setIsSigninPopupOpen] = React.useState(false);
    const [popupSignupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [popupInfoOpen, setIsPopupInfoOpen] = React.useState(false);
    const [loggedIn, setloggedIn] = React.useState(false);
    const [articles, setArticles] = React.useState([]);
    const [saveArticles, setSaveNewArticles] = React.useState([]);
    const [preloader, setPreloader] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);
    const [serverError, setServerError] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const history = useHistory();

    console.log(loggedIn)
    console.log(currentUser)

    function handleRegister(password, email, name) {
        register(password, email, name)
            .then((res) => {
                if (res.data) {
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
                if (res.token) {
                    // localStorage.setItem('token', JSON.stringify(res.token))
                    localStorage.setItem('token', res.token)
                    tokenCheck();
                    closeAllPopups()

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
        setLoading(true);
        // console.log(token)

        if (!token) {
            return;
        }

        getContent(token)
            .then((res) => {
                if (res) {
                    setLoading(false);
                    setСurrentUser({
                        id: res._id,
                        name: res.name,
                    });
                    setloggedIn(true);
                }
            });
    }

    React.useEffect(() => {
        tokenCheck();
        const articles = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];
        setArticles(articles);
        const keyword = localStorage.getItem('keyword')
        setKeyword(keyword)
    }, []);

    function handleLogout() {
        localStorage.removeItem('token');
        setloggedIn(false);
        history.push('/');
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
        if (loggedIn) {
            return getAllArticles()
                .then((news) => {
                    const arrayMyNews = news.filter((c) => (c.owner === currentUser.id));
                    setSaveNewArticles(arrayMyNews);
                    // setSaveNewArticles([arrayMyNews, ...saveArticles]);
                    console.log(arrayMyNews)
                    console.log(saveArticles)
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    function handleSaveNews({ keyword, title, text, date, source, link, image }) {
        return saveArticle({ keyword, title, text, date, source, link, image })
            .then((res) => {
                console.log(res);
                setSaveNewArticles([res, ...saveArticles]);
            })
            .catch((error) => console.log('Ошибка запроса - ' + error))
    }

    const handleArticleDelete = (articleId) => {
        // Отправляем запрос в API и получаем обновлённые данные карточки
        deleteArticle(articleId)
            .then(() => {
                const newCards = saveArticles.filter((item) => item._id !== articleId);
                setSaveNewArticles(newCards);
            })
            .catch((error) => console.log('Ошибка удаления карточки : ', error))

    }

    function findMySevedNews({ article, myArticle, keyword, title, text, date, source, link, image }) {
        const mySavedArticle = saveArticles.find((c) => {
            if (myArticle) {
                return c.title === myArticle.title && c.text === myArticle.text;
            }

            if (article) {
                return c.title === article.title && c.text === article.description;
            }

        });

        if (mySavedArticle) {
            handleArticleDelete(mySavedArticle._id);
        }
        else {
            handleSaveNews({ keyword, title, text, date, source, link, image });
        }
    }

    React.useEffect(() => {
        getMySaveNews()
    }, [currentUser.id, loggedIn]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='app'>

                <Switch>

                    <ProtectedRoute handleLoginPopupClick={handleLoginPopupClick} loggedIn={loggedIn} preloader={preloader} currentUser={currentUser} loading={loading} path='/saved-news'>
                        <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} loggedOut={handleLogout} />
                        <SavedNewsHeader saveArticles={saveArticles} />
                        <SavedNews
                            articles={articles}
                            keyword={keyword}
                            handleSaveNews={handleSaveNews}
                            loggedIn={loggedIn}
                            saveArticles={saveArticles}
                            getMySaveNews={getMySaveNews}
                            handleArticleDelete={handleArticleDelete}
                        />
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
                            handleArticleDelete={handleArticleDelete}
                            findMySevedNews={findMySevedNews}
                            saveArticles={saveArticles}
                            handleLoginPopupClick={handleLoginPopupClick}
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
