import { useState, useRef } from "react"
import { validateEmail } from "../../utils/helpers"
import './ContactForm.css'

export default function ContactForm() {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [emptyErrorMessage, setEmptyErrorMessage] = useState('');
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [messageInput, setMessageInput] = useState('')


    const handleSubmitClick = async (e) => {
        e.preventDefault();

        if (!validateEmail(emailInput)) {
            setEmailErrorMessage('Email is invalid');
            return;
        }
        setEmailErrorMessage('');

        if (nameInput=== '' || emailInput === '' || messageInput === '') {
            setEmptyErrorMessage('Field cannot be empty!');
            return;
        }

        console.log('sending request')

       const response = await fetch("http://127.0.0.1:3000/", {
            method: "POST",
            body: JSON.stringify({
                name: nameInput,
                email: emailInput,
                message: messageInput
            }),
            headers: {
                "Content-type": "application/json"
            }
        });

        console.log(response)

        setEmptyErrorMessage('');
    };

    return (
        <div>
            <form action="" className="contactForm" onSubmit={(e) => handleSubmitClick(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" onChange={e => setNameInput(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email" onChange={(e) => setEmailInput(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" rows="10" onChange={e => setMessageInput(e.target.value)} />
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
            {/* <p className="disclaimer">This form is not fully functional yet! Please email me using the email icon in the footer. Thank you!</p> */}
        </div>
    )
}