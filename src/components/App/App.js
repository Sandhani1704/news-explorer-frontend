import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import AboutAuthor from '../AboutAuthor/AboutAuthor'
import Footer from '../Footer/Footer'

function App() {
    return (
        <div className="app">

            <Route exact path="/">
                <div className="header-image">
                    <Header />
                    <Preloader />
                    <SearchForm />
                </div>
                <AboutAuthor />
            </Route>
            <Footer />
        </div>
    )
}

export default App;
