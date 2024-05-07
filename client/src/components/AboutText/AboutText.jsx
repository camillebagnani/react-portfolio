import './AboutText.css'

export default function AboutText(props) {
    return (
        <>
            <div>
                <p className='about-text'>
                    {props.paragraph}
                </p>
            </div>
        </>
    )
}