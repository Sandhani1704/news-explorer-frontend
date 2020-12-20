import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function SignupPopup({ isOpen, onClose, buttonText, onSignin, onSubmit }) {

    return (
        <PopupWithForm
            name='popup-signup'
            title='Регистрация'
            buttonText={buttonText}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit} >
            <label className='popup__label'>Email</label>
            <input className='popup__input' id='email' type='email' name='email' placeholder='Введите почту'
                required
                minLength='6'
                maxLength='50' />
            <span id='email-input-error' className='popup__input-error popup__input-error_active'></span>
            <label className='popup__label'>Пароль</label>
            <input className='popup__input' id='password' placeholder='Введите пароль' type='password' name='password'
                required
                minLength='6'
                maxLength='50' />
            <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
            <label className='popup__label'>Имя</label>
            <input className='popup__input' id='name' placeholder='Введите своё имя' type='text' name='name' required
                minLength='2'
                maxLength='50' />
            <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
            <button type='submit' className='popup__button'>{buttonText}</button>
            <p className='popup__choice'>или <button type='button' className='popup__button-link' onClick={onSignin}>Войти</button></p>


        </PopupWithForm>
    )
}

export default SignupPopup;