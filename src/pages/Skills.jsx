import Header from "../components/Header/Header";
import Skill from "../components/Skill/Skill";

const skillsData = [
    {
        skillSection: "Web Development",
        skillSummary: "In April 2024 I will have completed a professional Full Stack Web Development Boot Camp through the University of Utah. This taught me the inner workings of websites from front-end design and React, to optimizing SEO and website performance, to creating databases and more.",
        skills: [
            {
                name: "HTML & CSS",
                skillDescription: ["Standard web building practices and styling", "Accessibility standards", "Familiar with CSS libraries including Bootstrap and Bulma"]
            },
            {
                name: "JavaScript",
                skillDescription: ["Full stack developer", "Vanilla, JQuery, Node, Express, Jest, SQL, MySQL, NoSQL, Sequelize, MongoDB, Mongoose, MERN Stack, MVC paradigm, Git, Heroku and more"]
            },
            {
                name: "React",
                skillDescription: ["Create Vite applications using React", "React Router DOM"]
            }
        ],
    },
    {
        skillSection: "Marketing",
        skillSummary: "With a Bachelor of Science in Marketing and over five years of experience, I have knowledge on a wide array of marketing principles and practices.",
        skills: [
            {
                name: "Digital Advertising",
                skillDescription: ["Meta Ads Manager", "Google Ads (YouTube)", "Making ad creative for social media (Instagram, Facebook, YouTube, Spotify freemium ads"]
            },
            {
                name: "SEO",
                skillDescription: ["MKTG 4310 - Digital Marketing & Analytics - University of Utah (Study SEO best practices including using tools like SEMRush, Google Keyword Planner)", "Proficient in HTML (Can add relevant title tags and header elements to optimize SEO)"]
            },
            {
                name: "Market Research",
                skillDescription: ["MKTG 4450 - Marketing Research - University of Utah (Study the customer journey, marketing funnel and performed our own case study)", "Familiar with reading analytics and adjusting to improve KPIs"]
            },
            {
                name: "Social Media Management",
                skillDescription: ["MKTG 4520 - Advertising Creative - University of Utah (Study the voice and image of a brand to speak authentically through advertising)", "Managed accounts and created assets for musicians and university level accounts (Instagram, TikTok, Facebook, YouTube, X (Twitter))"]
            }
        ]
    },
    {
        skillSection: "Content Creation",
        skillSummary: "I worked as a freelance photographer for six years. This taught me how to work with clients and how to deeply understand camera settings and composition. I also have a minor in Documentary Studies, where I learned how to film and edit videos.",
        skills: [
            {
                name: "Photography",
                skillDescription: ["Proficient in Adobe Creative Cloud Suite - Photoshop and Lightroom", "Seven years experience with DSLR and three years experience with mirrorless cameras"]
            },
            {
                name: "Videography",
                skillDescription: ["Proficient in Adobe Creative Cloud Suite - Premiere Pro and After Effects", "Freelance videography experience for events and performances", "Study abroad in Italy for Film and Media Arts where I created a short film"]
            },
            {
                name: "Motion Graphics",
                skillDescription: ["Self-taught on how to use Adobe After Effects to create motion graphics", "Can incorporate animations into existing photo, graphic design and video assets"]
            }
        ]
    },
    {
        skillSection: "Soft Skills",
        skillSummary: "I enjoy working in a team setting and can also work effectively on my own. With experience in office and working remotely with a global team, I am flexible and can adapt to fast-paced environments.",
        skills: [
            {
                name: "Communication",
                skillDescription: ["Open to feedback and listening to new ideas", "Asks questions for clarity"]
            },
            {
                name: "Organization",
                skillDescription: ["Use a calendar to plan each day and stay on task", "Take notes in order to work efficiently"]
            },
            {
                name: "Leadership",
                skillDescription: ["Spread positivity and encouragement to team members", "Willing to take the lead on projects", "Can logically delegate tasks and workload"]
            },
            {
                name: "Self-motivated",
                skillDescription: ["Can stay on task and follow deadlines", "Work through challenges independently first"]
            }
        ]
    },
]

export default function Skills() {
    return (
        <>
            <Header title="Skills" />
            <div>
                {skillsData.map((skill, index) => (
                    <Skill
                        key={index}
                        skillSection={skill.skillSection}
                        skillSummary={skill.skillSummary}
                        skills={skill.skills}
                    >
                    </Skill>
                ))}
            </div>
        </>
    )
}