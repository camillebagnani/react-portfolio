import './Skill.css'

export default function Skill(props) {
    return (
        <>
            <div className='skill-component'>
                <h2>{props.skillSection}</h2>
                <p>{props.skillSummary}</p>

                {props.skills.map((oneSkill, index) => (
                    <div className="skill-list-container">
                        <h5 className='skill-name'>{oneSkill.name}</h5>
                        <div>
                            <ul>
                                {oneSkill.skillDescription.map((listItem, index) => (
                                    <li>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}