import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({ name, title, children, isOpen, onClose }) {

    return (
        <section className={`popup ${name} ${isOpen && 'popup_opened'}`}>
            <div className='popup__overlay'></div>
            <div className='popup__container'>
                <button type='button' className='popup__button-close-icon' onClick={onClose}></button>
                <h3 className='popup__title'>{title}</h3>
                <form className='popup__form' name={name}>
                    {children}
                </form>
            </div>

        </section>
    )
}

export default PopupWithForm;