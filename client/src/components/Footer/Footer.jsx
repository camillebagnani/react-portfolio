import '../../../public/images/linkedin.png'
import '../../../public/images/github.png'
import '../../../public/images/email.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-details'>
                    <div>© Camille Bagnani 2024</div>
                </div>
                <div className="footer-icon-container">
                    <a href="https://www.linkedin.com/in/camillebagnani/" target="_blank" rel="noopener noreferrer">
                        <img src='../../../public/images/linkedin.png' alt="LinkedIn-logo" className="footer-icon" />
                    </a>
                    <a href="https://github.com/camillebagnani" target="_blank" rel="noopener noreferrer">
                        <img src='../../../public/images/github.png' alt="GitHub-logo" className="footer-icon" />
                    </a>
                    <a href="mailto:camillebagnani@gmail.com">
                        <img src='../../../public/images/email.png' alt="email-icon" className="footer-icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
};