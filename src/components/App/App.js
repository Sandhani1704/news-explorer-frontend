import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'

function App() {
    return (

        <Route exact path="/">
            <div className="header-image">
                <Header />
                <SearchForm />
                <Preloader />
            </div>

        </Route>
    )
}

export default App;
