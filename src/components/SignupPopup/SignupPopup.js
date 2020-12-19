import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function SignupPopup({ isOpen, onClose, buttonText, onSignin }) {

    return (
        <PopupWithForm
            name='popup-signup'
            title='Регистрация'
            buttonText={buttonText}
            isOpen={isOpen}
            onClose={onClose} >
            <label className='popup__label'>Email</label>
            <input className='popup__input' id='email' type='email' name='Введите почту' placeholder='Введите почту' />
            <span id='email-input-error' className='popup__input-error popup__input-error_active'></span>
            <label className='popup__label'>Пароль</label>
            <input className='popup__input' id='password' placeholder='Введите пароль' type='password' name='password' />
            <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
            <label className='popup__label'>Имя</label>
            <input className='popup__input' id='name' placeholder='Введите своё имя' type='text' name='name' />
            <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
            <button type='submit' className='popup__button'>{buttonText}</button>
            <span className='popup__signup'>или <button type='button' className='popup__signup-link' onClick={onSignin}>Войти</button></span>


        </PopupWithForm>
    )
}

export default SignupPopup;