import { useState } from "react"
import { validateEmail } from "../../utils/helpers"
import './ContactForm.css'

export default function ContactForm() {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [emptyErrorMessage, setEmptyErrorMessage] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const fillOutForm = async (req, res) => {
        try {
            let response = await fetch("http://localhost:3000/", {
                method: "POST",
                body: JSON.stringify({
                    name: nameInput,
                    email: emailInput,
                    message: messageInput
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
                console.log("Request successful!")
                setNameInput('');
                setEmailInput('');
                setMessageInput('');
            } else {
                console.log("Error")
            }
        } catch (err) {
            console.error(err)
        }
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();

        if (!validateEmail(emailInput)) {
            setEmailErrorMessage('Email is invalid');
            return;
        }
        setEmailErrorMessage('');

        if (nameInput === '' || emailInput === '' || messageInput === '') {
            setEmptyErrorMessage('Field cannot be empty!');
            return;
        }
        fillOutForm(nameInput, emailInput, messageInput)
        console.log('sending request')

    };

    return (
        <div>
            <form action="" className="contactForm" onSubmit={(e) => handleSubmitClick(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" onChange={e => setNameInput(e.target.value)} value={nameInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" rows="10" onChange={e => setMessageInput(e.target.value)} value={messageInput} />
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
