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
            <p className='popup__choice popup-info__choice'><button type='button' onClick={onSignin} className='popup__button-link'>Войти</button></p>
        </PopupWithForm>
    )
}

export default InfoPopup;