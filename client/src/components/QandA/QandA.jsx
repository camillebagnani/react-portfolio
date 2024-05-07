import './QandA.css'
export default function QandA(props) {
    return (
        <>
            <div className="one-q-and-a">
                <div className='question'>Q: {props.question}</div>
                <div className='answer'>A: {props.answer}</div>
            </div>
        </>
    )
}