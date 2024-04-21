import { useState, useRef } from "react"
import { validateEmail } from "../../utils/helpers"
import './ContactForm.css'

export default function ContactForm() {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [emptyErrorMessage, setEmptyErrorMessage] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    const handleSubmitClick = (e) => {
        e.preventDefault();

        if (!validateEmail(emailInput)) {
            setEmailErrorMessage('Email or username is invalid');
            return;
        }
        setEmailErrorMessage('');

        if (nameInputRef.current.value === '' || emailInputRef.current.value === '' || messageInputRef.current.value === '') {
            setEmptyErrorMessage('Field cannot be empty!');
            return;
        }
        setEmptyErrorMessage('');
    };

    return (
        <div>
            <form action="" className="contactForm" onSubmit={(e) => handleSubmitClick(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" ref={nameInputRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email" ref={emailInputRef} onChange={(e) => setEmailInput(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" rows="10" ref={messageInputRef} />
                </div>
                <input type="submit" value="Submit" id="submit-button" />
            </form>
            {emailErrorMessage && (
                <div>
                    <p className="error-text">{emailErrorMessage}</p>
                </div>
            )}
            {emptyErrorMessage && (
                <div>
                    <p className="error-text">{emptyErrorMessage}</p>
                </div>
            )}
        </div>
    )
}