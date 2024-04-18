

import { D3, fullstack as full, photography as photo, GraphicDzn } from "../src/assets/Services";



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
    


export {navLinks, services, projectsData}