import React from 'react';
import './PopupWithForm.css';
import { Link } from 'react-router-dom';

function PopupWithForm() {

    return (
        <section className='popup'>
            <div className='popup__overlay'></div>
            <div className='popup__container'>
                <button type='button' className='popup__button-close-icon'></button>
                <h3 className='popup__title'>Вход</h3>
                <form className='popup__form' name='popup-form'>
                    <input className='popup__input' value='email' id='email' type='text' name='email' placeholder='email' />
                    <span id='email-input-error' className='popup__input-error popup__input-error_active'></span>
                    <input className='popup__input' value='password' id='password' type='text' name='password' placeholder='Пароль' />
                    <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
                    <button type='submit' className='popup__button'>Войти</button>
                    <p className='popup__signup'>или <Link to='signup' className='popup__signup'>Зарегистрироваться</Link></p>
                </form>
            </div>

        </section>
    )
}

export default PopupWithForm;