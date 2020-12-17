import React from 'react';
import './PopupWithForm.css';
import { Link } from 'react-router-dom';


function SignupPopup({ isOpen, onClose }) {

    return (
        <section className={`popup ${isOpen && 'popup_opened'}`}>
            <div className='popup__overlay'></div>
            <div className='popup__container'>
                <button type='button' className='popup__button-close-icon' onClick={onClose}></button>
                <h3 className='popup__title'>Вход</h3>
                <form className='popup__form' name='popup-form'>
                    <label className='popup__label'>Email</label>
                    <input className='popup__input' id='email' type='email' name='Введите почту' placeholder='Введите почту' />
                    <span id='email-input-error' className='popup__input-error popup__input-error_active'></span>
                    <label className='popup__label'>Пароль</label>
                    <input className='popup__input' id='password' placeholder='Введите пароль' type='password' name='password' />
                    <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
                    <button type='submit' className='popup__button'>Войти</button>
                    <p className='popup__signup'>или <Link to='signin' className='popup__signup-link'>Войти</Link></p>
                </form>
            </div>

        </section>
    )
}

export default SignupPopup;