import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function SigninPopup({ isOpen, onClose, buttonText, onSignup }) {

    return (
        <PopupWithForm
            name='popup-signin'
            title='Войти'
            buttonText={buttonText}
            isOpen={isOpen}
            onClose={onClose} >
            <label className='popup__label'>Email</label>
            <input className='popup__input' id='email' type='email' name='Введите почту' placeholder='Введите почту' />
            <span id='email-input-error' className='popup__input-error popup__input-error_active'></span>
            <label className='popup__label'>Пароль</label>
            <input className='popup__input' id='password' placeholder='Введите пароль' type='password' name='password' />
            <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
            <button type='submit' className='popup__button'>{buttonText}</button>
            <span className='popup__signup'>или <button type='button' className='popup__signup-link' onClick={onSignup}>Зарегистрироваться</button></span>
        </PopupWithForm>
    )
}

export default SigninPopup;