

import {CSS, figma, firebase, git, html, javascript, mongodb, nodejs, reactjs, redux, tailwindcss, threejs, typescript, github, Womp, Qwik, Vue, Mysql, Blender, Angular } from "../src/assets/tech";
import { Project11, Project12, Project13, Project21, Project22, Project23, Project31, Project32, Project33, Project34, Googledrive, link, Screen1, Screen2, Screen3, Screen4, Screen6 } from "../src/assets/project";

import { D3, fullstack as full, photography as photo, GraphicDzn } from "../src/assets/Services";
import { keb, kebs, ke } from "../src/assets/testimonials";

import {D2} from "../src/assets/Hero"

const skills = [
    {
        image: Womp,
        name: "Womp",
    },
    {
        image: CSS,
        name: "CSS",
    },
    {
        image: javascript,
        name: "JAVASCRIPT",
    },
    {
        image: Vue,
        name: "vue",
    },
    {
        image: reactjs,
        name: "REACT",
    },
    {
        image: git,
        name: "GIT",
    },
    {
        image: nodejs,
        name: "NODE JS",
    },
    {
        image: Qwik,
        name: "qwik",
    },
    {
        image: mongodb,
        name: "MONGO DB",
    },
    {
        image: tailwindcss,
        name: "TAILWIND",
    },
    {
        image: typescript,
        name: "TYPESCRIPT",
    },
    {
        image: figma,
        name: "FIGMA",
    },
    {
        image: threejs,
        name: "THREEJS",
    },
    {
        image: redux,
        name: "REDUX",
    },
    {
        image: firebase,
        name:"Firebase"
    },
    {
        image: github,
        name: "Gsap"
    },
    {
        image: html,
        name: "HTML"
    },
    {
        image: Angular,
        name: "Angular"
    },
    {
        image: Blender,
        name: "Blender"
    },
    {
        image: Mysql ,
        name: "MySql"
    }
]

const services = [
    {
        title: "Full-Stack",
        icon: full,
        smalltxt: "Full-Stack"
    },
    {
        title: "Photography",
        icon: photo,
        smalltxt: "Photography",
    },
    {
        title: "3D Design",
        icon: D3,
        smalltxt: "3D ",
    },
    {
        title: "Graphic Works",
        icon: GraphicDzn,
        smalltxt: "Graphics",
    },
];


// const Designs = [
//     {
//         title: "Web Developer",
//         description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
//         image: Screen1
//     },

//     {
//         title: "Web Developer",
//         description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
//         image: Screen2
//     },

//     {
//         title: "Web Developer",
//         description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
//         image: Screen3
//     },

//     {
//         title: "Web Developer",
//         description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
//         image: Screen4
//     },
// ]


const projectsData ={
    webworks: [
        {
            vid: "https://squirro.com/hubfs/WEBSITE/Homepage/Pagevideo-Enterprise%20Search%202D-1223-1_update2.webm",
            description: "Unified knowledge hub for insightful decision-making across diverse data sources.",
            link: "https://squirro.com/knowledge-management-solution",
        }
    ],

    mobilework: [
        {
            vid: "https://139651395.fs1.hubspotusercontent-eu1.net/hubfs/139651395/WEBSITE/Homepage/PageVideo-RiskComplianceAndAuditManagement-1023.webm",
            description: "Automate risk assessment, streamline research, minimize manual tasks.",
            link: "https://squirro.com/risk-insights",
        }
    ],

    graphicworks:[
        {
            vid: "https://139651395.fs1.hubspotusercontent-eu1.net/hubfs/139651395/WEBSITE/Homepage/PageVideo-ServiceManagement-1023.webm",
            description: "Enhance customer experience and service management efficiency dramatically.",
            link: "https://squirro.com/service-insights",
        }
    ],

    designworks:[
        {
            vid: "https://squirro.com/hubfs/WEBSITE/Homepage/Pagevideo-Enterprise%20Search%202D-1223-1_update2.webm",
            description: "Optimize CRM with data: seize opportunities, mitigate risks, enhance efficiency.",
            link: "https://squirro.com/knowledge-management-solution",
        }
    ]
}


const testimonials = [
        {
            testimonial:
                "Israel is an excellent team player in my view. We worked in the same unit as a team and he was always open to everyone’s opinion and very collaborative. He’s very smart too.",
            name: "Modesta Aziire",
            designation: "Youth development Advocate",
            company: "Ghana Commodity Exchange",
            image: ke,
        },
        {
            testimonial:
                "Je recommande vivement Kenneth pour des projets exceptionnels d'art en 3D et de conception UI en raison de sa créativité remarquable, de son souci du détail, de ses compétences techniques et de ses capacités de collaboration professionnelles, ce qui en fait un atout précieux pour toute équipe.",
            name: "Latifa Qatrani",
            designation: "Industrial Designer",
            company: "Designer industriel",
            image: kebs,
        },
        {
            testimonial:
                "From our school days, as well as our interaction and project meetings, I’ve gotten to know him as a highly skilled and passionate data mining specialist with a knack for programming and graphic design.",
            name: "Mary Immaculata ",
            designation: "Frontend Development ",
            company: "WALTERGATES GHANA LIMITED",
            image: keb,
        },
    ]

const navLinks = [
    {
      id: 'about',
      title: 'Solutions',
      subMenu: [
        { id: 'SquirroGpt', title: 'SquirroGpt' },
        { id: 'solutions2', title: 'SquirroGpt' },
        { id: 'SquirroGpt1', title: 'SquirroGpt' },
        { id: 'solutions22', title: 'SquirroGpt' },
        
        // Add more submenu items as needed
      ],
    },
    {
      id: 'services',
      title: 'Platform',
      subMenu: [
        { id: 'platform1', title: 'SquirroGpt' },
        { id: 'platform2', title: 'SquirroGpt' },
        { id: 'platform11', title: 'SquirroGpt' },
        { id: 'platform21', title: 'SquirroGpt' },
        // Add more submenu items as needed
      ],
    },
    {
      id: 'testimonials',
      title: 'Pricing',
    },
    {
      id: 'work',
      title: 'Knowledge Hub',
      subMenu: [
        { id: 'hub1', title: 'Hub 1' },
        { id: 'hub2', title: 'Hub 2' },
        // Add more submenu items as needed
      ],
    },
    {
      id: 'contact',
      title: 'About Us',
      subMenu: [
        { id: 'aboutus1', title: 'About Us 1' },
        { id: 'aboutus2', title: 'About Us 2' },
        // Add more submenu items as needed
      ],
    },
  ];
    


export {navLinks, skills, services, projectsData}