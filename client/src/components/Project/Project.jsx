import './Project.css'
// import "/gifs/weatherdashboard.gif"
// import "/gifs/thetechblog.gif"
// import "/gifs/hellsgatepr.gif"
// import "/gifs/socialnetworkapi.gif"
// import "/gifs/workdayscheduler.gif"
// import "/gifs/ecommercebackend.gif"
// import "/gifs/textbooktrade.gif"

// export const projectsData = [
//     {
//         title: 'Textbook Trade',
//         imageLink: "/gifs/textbooktrade.gif",
//         highlights: 'React, MongoDB, GraphQL, JSON Web Tokens',
//         deployedApp: 'https://textbook-trade.onrender.com/',
//         repo: 'https://github.com/camillebagnani/textbook-trade'
//     },
//     {
//         title: 'Weather Dashboard',
//         imageLink: "/gifs/weatherdashboard.gif",
//         highlights: 'Third-party APIs, Bootstrap, jQuery',
//         deployedApp: 'https://camillebagnani.github.io/weather-dashboard/',
//         repo: 'https://github.com/camillebagnani/weather-dashboard'
//     },
//     {
//         title: 'Tech Blog',
//         imageLink: "/gifs/thetechblog.gif",
//         highlights: 'Node, Express, MySQL, Sequelize, Bcrypt',
//         deployedApp: 'https://obscure-hollows-81993-50a0068ee144.herokuapp.com/',
//         repo: 'https://github.com/camillebagnani/tech_blog'
//     },
//     {
//         title: 'Gym Lift Tracker',
//         imageLink: "../../public/gifs/hellsgatepr.gif",
//         highlights: 'Node, Express, MySQL, Sequelize, Bcrypt, Chart.js',
//         deployedApp: 'https://secret-spire-07174-9e0cafb948bb.herokuapp.com/',
//         repo: 'https://github.com/camillebagnani/Hells-Gate-PR'
//     },
//     {
//         title: 'Social Network API',
//         imageLink: "../../public/gifs/socialnetworkapi.gif",
//         highlights: 'Node, Express, NoSQL, MongoDB, Mongoose',
//         repo: 'https://github.com/camillebagnani/nosql-social-network-api'
//     },
//     {
//         title: 'Work Day Scheduler',
//         imageLink: "../../public/gifs/workdayscheduler.gif",
//         highlights: 'Third-party APIs, Day.js, jQuery',
//         deployedApp: 'https://camillebagnani.github.io/work-day-scheduler/',
//         repo: 'https://github.com/camillebagnani/work-day-scheduler'
//     },
//     {
//         title: 'E-Commerce Back End',
//         imageLink: "../../public/gifs/ecommercebackend.gif",
//         highlights: 'Node, Express, MySQL, Sequelize, dotenv',
//         repo: 'https://github.com/camillebagnani/e-commerce_back_end'
//     }
// ];

export default function Project(props) {
    return (
        <div className="individual-project-container">
            <p className="project-title">{props.title}</p>
            <div className="project-image-container">
                <a href={props.deployedApp} target="_blank" rel="noopener noreferrer">
                    <img src={props.imageLink} alt="" className="project-image" />
                </a>
            </div>
            <div className="project-description">
                <p className="project-highlights">{props.highlights}</p>
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className="project-links">GitHub Repository</a>
            </div>
        </div>
    )
};