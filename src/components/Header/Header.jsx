import '/images/camille-bagnani-icon.png'
import './Header.css'
import { TypeAnimation } from "react-type-animation";

export default function Header(props) {
    return (
        <>
            <div className="header-container">
                <img src="/images/camille-bagnani-icon.png" alt="camille-bagnani-icon" className='logo'/>
                <TypeAnimation
                sequence={[
                    props.title,
                    2000,
                ]}
                wrapper="span"
                speed={10}
                style={{fontSize: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'pink'}}
            />
            </div>
        </>
    )
}