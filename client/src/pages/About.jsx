import Header from "../components/Header/Header";
import AboutText from "../components/AboutText/AboutText";
import '/images/camille-bagnani-photo.jpeg'
import '../App.css'
import QandA from "../components/QandA/QandA";

const biographyData = [
    {
        paragraph: "I'm passionate about all things creating! Whether building a website or directing a music video, I am always excited to get my hands on creative projects that will help me improve my skills, learn new things and stay curious!"
    },
    {
        paragraph: "My specialties are made up of many synergetic disciplines. This sets me apart because I can see projects through from a mockup on a notepad, to a fully produced, professional asset with my skills in video production and editing, photography, motion graphics, content marketing and web development."
    },
    {
        paragraph: "I'm a team player and can adapt to critique quickly and efficiently. I graduated from the University of Utah in May 2021 with a Bachelor of Science in Marketing and a minor in Documentary Studies. In April 2024 I received a certificate from the University of Utah Professional Education Boot Camps for Full Stack Web Development."
    }
]

const aboutData = [
    {
        question: "What are your Letterboxd Four Favorites?",
        answer: "Howl's Moving Castle, Jurassic Park, Star Wars Episode IV and Pride and Prejudice!"
    },
    {
        question: "What did you want to be when you grew up?",
        answer: "Everyone knew I wanted to be a chef on Food Network! I think my love for video began with my admiration for cooking TV shows. Cooking is just a hobby now, but I'm still known as a chef among my friends and family."
    },
    {
        question: " What's one of the most spontaneous things you've done?",
        answer: "I will never forget the first time I crowd surfed. It was the final year of Vans Warped Tour. My favorite band, Movements, was performing their last song. My heart was racing and in the moment I took a chance and it was magical."
    },
    {
        question: "What are you up to right now?",
        answer: "I just finished my Full Stack Web Development Boot Camp through the University of Utah! Learning how to code has always been something I've wanted to do. I believe coding is an art and I love it!"
    }
]

export default function About() {
    return (
        <>
            <Header title="About" />
            <div className="about-container">
                <img src="/images/camille-bagnani-photo.jpeg" alt="camille-headshot" className="headshot" />
                <div className='about-text-container'>
                    <h3 className="hello">Hello! My name is <span style={{ color: '#f26bac' }}>Camille</span>.</h3>
                    {biographyData.map((paragraph, index) => (
                        <AboutText
                            key={index}
                            paragraph={paragraph.paragraph}
                        />
                    ))}
                </div>

                <h4 className='get-to-know-me' style={{ color: '#f26bac' }}>Get to know me!</h4>
                <div className="q-and-a-container">
                    {aboutData.map((about, index) => (
                        <QandA
                            key={index}
                            question={about.question}
                            answer={about.answer}
                        />
                    ))}
                </div>


            </div>
        </>
    )
}