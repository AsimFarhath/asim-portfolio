/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Internship, Education, Certification, SkillGroup } from "./types";

export const personalInfo = {
  name: "Asim Farhath H",
  title: "Full Stack Web Developer | JavaScript | Java",
  headline: "Crafting robust full-stack applications with elegant frontends and highly efficient backends.",
  phone: "+91 8248461679",
  email: "asimfarhath9@gmail.com",
  location: "Thanjavur, Tamil Nadu, India",
  summary: "Aspiring Web Developer with strong knowledge of Java programming, OOP concepts, and problem-solving techniques. Skilled in logical program design, debugging, and developing efficient solutions using Java. Completed a Software Developer course at Coderead Academy with hands-on experience in full-stack development using React.js, Node.js, and MS SQL. Developed a Turf Online Booking Platform and currently working on an AI-powered financial literacy system as a final-year Computer Science and Engineering university project.",
  github: "https://github.com", // Placeholder, will show clean link
  linkedin: "https://linkedin.com", // Placeholder
};

export const educationList: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Periyar Maniammai Institute of Science and Technology",
    period: "2022 – 2026",
    details: "Focusing on Software Engineering, Object-Oriented Programming, Database Management, and Full-Stack Architectures. Graduating in 2026."
  }
];

export const internshipsList: Internship[] = [
  {
    id: "intern-1",
    role: "Web Development Intern",
    company: "Vebbox Software Solutions",
    location: "Kumbakonam, Tamil Nadu",
    period: "June 2023 – July 2023",
    type: "Web Development",
    certificateUrl: `${import.meta.env.BASE_URL}Certificates/Vebbox intern.pdf`,
    description: [
      "Assisted in crafting responsive layouts and cross-browser compatible interfaces.",
      "Developed interactive UI elements using JavaScript and modern CSS practices.",
      "Collaborated with senior engineers to implement web solutions mapping customer specifications."
    ],
    skillsLearned: ["React.js", "HTML", "CSS", "JavaScript", "Responsive Design"]

  },
  {
    id: "intern-2",
    role: "Data Science Intern",
    company: "Scion Research and Development",
    location: "Thanjavur, Tamil Nadu",
    period: "June 2024 – July 2024",
    type: "Data Science",
   certificateUrl: `${import.meta.env.BASE_URL}Certificates/Scion Intern.pdf`,
    description: [
      "Conducted exploratory data analysis (EDA) on datasets, producing detailed visualizations and statistical insights.",
      "Assisted in developing and evaluating predictive models and data-prep pipelines using Python and SQL.",
      "Presented and documented analytical findings to the research and development teams."
    ],
    skillsLearned: ["Data Analysis", "Predictive Modeling", "SQL", "Data Visualization"]
  },
  {
    id: "intern-3",
    role: "Data Analytics Intern",
    company: "Fantasy Solutions",
    location: "Trichy, Tamil Nadu",
    period: "July 2025 – July 2025",
    type: "Data Analytics",
    certificateUrl: `${import.meta.env.BASE_URL}Certificates/Fantasy Intern.pdf`,
    description: [
      "Designed clean analytics dashboards to monitor and track business performance indicators (KPIs).",
      "Queried databases to extract data trends, ensuring high hygiene and schema consistency.",
      "Contributed to workflow improvements of quantitative data collection and pipeline reporting."
    ],
    skillsLearned: ["Data Analytics", "SQL Databases", "Dashboard Design", "KPI Tracking"]
  }
];

export const projectsList: Project[] = [
  {
    id: "proj-1",
    title: "Turf Slot Booking and Management System",
    period: "June 2025 – November 2025",
    organization: "Coderead Academy",
    location: "Kumbakonam, Tamil Nadu",
    description: [
      "Developed a full-stack Turf Slot Booking platform using React.js, Node.js, and SQL.",
      "Built an admin dashboard to manage turf details, pricing, schedules, and booking slots."
    ],
    techStack: ["React.js", "Node.js", "Express", "MS SQL", "Tailwind CSS"],
    highlights: [
      "Full-stack custom calendar slot grid for real-time turf booking.",
      "Secure role-based dashboard for managers (Manage turf hours, active pricing bands, and slots).",
      "Automated confirmation flows and booking ledger tracking."
    ]
  },
  {
    id: "proj-2",
    title: "AI-Based Stock Price Forecasting & Financial Advisory System",
    period: "August 2025 – June 2026",
    organization: "Periyar Maniammai University",
    location: "Thanjavur, Tamil Nadu",
    description: [
      "Developed a stock price forecasting system using predictive analytics to estimate investment returns.",
      "Implemented a multilingual (Tamil & English) web platform with chatbot support for financial insights and investment guidance."
    ],
    techStack: ["React.js", "Node.js", "Predictive Analytics", "Generative AI", "Dual Language (Tamil/English)"],
    highlights: [
      "Interactive time-series charting showing predictive stock trends.",
      "Multilingual financial assistant support (Tamil and English) using LLM chatbot integration.",
      "Investment scoring system helping users identify low, moderate, or high-risk assets."
    ]
  }
];

export const certificationsList: Certification[] = [
  {
    title: "Software Developer Expert",
    provider: "Coderead Academy",
    period: "July 2025 – December 2025"
  }
];

export const skillsList: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "C", "SQL", "JavaScript (ES6+)", "TypeScript"]
  },
  {
    category: "Frontend Dev",
    skills: ["React.js", "HTML5", "CSS3 / Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Backend Dev",
    skills: ["Node.js", "Express.js", "REST APIs", "Java OOP Core"]
  },
  {
    category: "Databases & Storage",
    skills: ["MS SQL", "SQL", "Database Normalization", "Query Optimization"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git & GitHub", "Visual Studio Code", "NPM", "Figma", "Docker Basics"]
  }
];
