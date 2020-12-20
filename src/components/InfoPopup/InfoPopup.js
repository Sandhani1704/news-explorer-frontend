import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function InfoPopup({ isOpen, onClose, onSignin }) {

    return (
        <PopupWithForm
            name='popup-info'
            title='Пользователь успешно зарегистрирован!'
            isOpen={isOpen}
            onClose={onClose} >
            {/* <form className='popup__form' name='popup-form'>
                <label className='popup__label'>Email</label>
                <input className='popup__input' id='email' type='email' name='Введите почту' placeholder='Введите почту' />
                <span id='email-input-error' className='popup__input-error popup__input-error_active'></span>
                <label className='popup__label'>Пароль</label>
                <input className='popup__input' id='password' placeholder='Введите пароль' type='password' name='password' />
                <span id='password-input-error' className='popup__input-error popup__input-error_active'></span>
                
            </form> */}
            <p className='popup__choice popup-info__choice'><button type='button' onClick={onSignin} className='popup__button-link'>Войти</button></p>

        </PopupWithForm>
    )
}

export default InfoPopup;