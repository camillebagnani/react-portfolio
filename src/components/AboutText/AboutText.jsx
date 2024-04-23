import './AboutText.css'

export default function AboutText() {
    return (
        <>
            <div className='about-text-container'>
                <h3>Hello! My name is <span style={{color: 'pink'}}>Camille</span>.</h3>

                <p className='about-text'>
                    I'm passionate about all things creating! Whether building a website or directing a music video, I am always excited to get my hands 
                    on creative projects that will help me improve my skills, learn new things and stay curious! 
                    My specialties are made up of many synergetic disciplines. This sets me apart because I can see projects through
                    from a mockup on a notepad, to a fully produced, professional asset with my skills in video production and editing, photography, motion graphics,
                    content marketing and web development.  I'm a team player and can adapt to critique quickly and efficiently. I graduated from
                    the University of Utah in May 2021 with a Bachelor of Science in Marketing and a minor in Documentary Studies.
                    In April 2024 I received a certificate from the University of Utah Professional Education Boot Camps
                    for Full Stack Web Development.</p>
                    
                    <button>Click for Fun Fact</button>
            </div>
        </>
    )
}