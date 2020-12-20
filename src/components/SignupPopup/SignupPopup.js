import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function SignupPopup({ isOpen, onClose, buttonText, onSignin, onSubmit }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const [isValid, setIsValid] = React.useState({ email: false, password: false, name: false })
    const [validationMessage, setIsValidationMessage] = React.useState({ email: "", password: "", name: '' })

    function handleInputEmailChange(event) {
        const { name, value } = event.target
        setEmail(value);
        setIsValid({
            ...isValid,
            [name]: event.target.validity.valid
        })
        setIsValidationMessage({
            ...validationMessage,
            [name]: event.target.validationMessage
        })
    }

    function handleInputPasswordChange(event) {
        const { name, value } = event.target
        setPassword(value);
        setIsValid({
            ...isValid,
            [name]: event.target.validity.valid
        })
        setIsValidationMessage({
            ...validationMessage,
            [name]: event.target.validationMessage
        })
    }

    function handleInputNameChange(event) {
        const { name, value } = event.target
        setName(value);
        setIsValid({
            ...isValid,
            [name]: event.target.validity.valid
        })
        setIsValidationMessage({
            ...validationMessage,
            [name]: event.target.validationMessage
        })
    }

    const isSubmitDisabled = Object.values(isValid).every(Boolean)


    return (
        <PopupWithForm
            name='popup-signup'
            title='Регистрация'
            buttonText={buttonText}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit} >
            <label className='popup__label'>Email</label>
            <input className='popup__input' onChange={handleInputEmailChange} value={email} id='email' type='email' name='email' placeholder='Введите почту'
                required
                minLength='6'
                maxLength='50' />
            <span id='email-input-error' className={`popup__input-error ${!isValid.email && 'popup__input-error_active'}`}>{validationMessage.email}</span>
            <label className='popup__label'>Пароль</label>
            <input className='popup__input' onChange={handleInputPasswordChange} value={password} id='password' placeholder='Введите пароль' type='password' name='password'
                required
                minLength='6'
                maxLength='50' />
            <span id='password-input-error' className={`popup__input-error ${!isValid.password && 'popup__input-error_active'}`}>{validationMessage.password}</span>
            <label className='popup__label'>Имя</label>
            <input className='popup__input' onChange={handleInputNameChange} value={name} id='name' placeholder='Введите своё имя' type='text' name='name' required
                minLength='2'
                maxLength='50' />
            <span id='password-input-error' className={`popup__input-error ${!isValid.name && 'popup__input-error_active'}`}>{validationMessage.name}</span>
            <button type='submit' className={`popup__button ${!isSubmitDisabled && 'popup__button_inactive'}`} disabled={!isSubmitDisabled}>{buttonText}</button>
            <p className='popup__choice'>или <button type='button' className='popup__button-link' onClick={onSignin}>Войти</button></p>


        </PopupWithForm>
    )
}

export default SignupPopup;