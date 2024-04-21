import Header from "../components/Header/Header";
import AboutText from "../components/AboutText/AboutText";
import '/images/camille-bagnani-photo.jpeg'
import '../App.css'

export default function About() {
    return (
        <>
            <Header title="About" />
            <div className="about-container">
            <img src="/images/camille-bagnani-photo.jpeg" alt="camille-headshot" className="headshot"/>
            <AboutText />
            </div>
        </>
    )
}