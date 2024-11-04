import {
    FaJava, FaJs, FaHtml5, FaReact, FaBootstrap,  FaCss3Alt,
    FaPython
}
    from 'react-icons/fa';

import { SiSpringboot, SiMysql, 
    SiAmazonaws
} from "react-icons/si";



const SkillsData = [
    {
        id: 1,
        skillName: 'Fundamentals',
        listTechnologies: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> },
            { name: 'Python', icon: <FaPython /> },
        ],
    },
    {
        id: 2,
        skillName: 'Frontend',
        listTechnologies: [
            { name: 'React.js', icon: <FaReact /> },
        ],
    },
    {
        id: 3,
        skillName: 'Backend',
        listTechnologies: [
            { name: 'Spring Boot', icon: <SiSpringboot /> },
        ],
    },
    {
        id: 4,
        skillName: 'Databases',
        listTechnologies: [
            { name: 'MySQL', icon: <SiMysql /> },
        ],
    },
    {
        id: 5,
        skillName: 'Cloud',
        listTechnologies: [
            { name: 'AWS', icon: <SiAmazonaws /> }
        ],
    },
    
    
    
];

export default SkillsData;
