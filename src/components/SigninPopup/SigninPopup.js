import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function SigninPopup({ isOpen, onClose, buttonText, onSignup, onSubmit }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [isValid, setIsValid] = React.useState({ email: false, password: false })
    const [validationMessage, setIsValidationMessage] = React.useState({ email: "", password: "" })

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

    React.useEffect(() => {
        setPassword('')
        setEmail('')
        setIsValidationMessage({ email: '', password: '' })
        setIsValid({ email: false, password: false })
    }, [isOpen]);

    const isSubmitDisabled = Object.values(isValid).every(Boolean)


    return (
        <PopupWithForm
            name='popup-signin'
            title='Вход'
            buttonText={buttonText}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}>
            <label className='popup__label'>Email</label>
            <input className='popup__input' onChange={handleInputEmailChange} value={email} id='email-input' type='email' name='email' placeholder='Введите почту'
                required
                minLength='6'
                maxLength='50' />
            <span id='email-input-error' className={`popup__input-error ${!isValid.name && 'popup__input-error_active'}`}>{validationMessage.email}</span>
            <label className='popup__label'>Пароль</label>
            <input className='popup__input' onChange={handleInputPasswordChange} value={password} id='password-input' placeholder='Введите пароль' type='password' name='password'
                required
                minLength='6'
                maxLength='50' />
            <span id='password-input-error' className='popup__input-error popup__input-error_active'>{validationMessage.password}</span>
            <button type='submit' className={`popup__button ${!isSubmitDisabled && 'popup__button_inactive'}`} disabled={!isSubmitDisabled}>{buttonText}</button>
            <p className='popup__choice'>или <button type='button' className='popup__button-link' onClick={onSignup}>Зарегистрироваться</button></p>
        </PopupWithForm>
    )
}

export default SigninPopup;