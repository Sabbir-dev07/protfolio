// Personal Information
export const personalInfo = {
    name: "MD Sabbir Hossen",
    role: "Full stack web developer",
    roles: ["Full-Stack Developer", "React Specialist", "MERN Stack Developer"], // For typing animation
    bio: "Passionate full-stack developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, and creating exceptional user experiences with cutting-edge technologies.",
    email: "sabbir.contact7@gmail.com",
    phone: "+880 1XXX-XXXXXX",
    location: "Dhaka, Bangladesh",
    resumeUrl: "/resume.pdf"
}

// Social Media Links
export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/Sabbir-dev07",
        icon: "Github"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/sabbir.rahman.769322",
        icon: "Facebook"
    },
    {
        name: "Fiverr",
        url: "https://www.fiverr.com/users/sabbir0711",
        icon: "Fiverr"
    },
    {
        name: "Vercel",
        url: "https://vercel.com/sabbircontact7-4426s-projects",
        icon: "Vercel"
    }
]

// Stats
export const stats = [
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Years Experience", value: 3, suffix: "+" }
]

// Skills
export const skills = {
    frontend: [
        { name: "HTML", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Next.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ],
    backend: [
        { name: "Node.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "PHP", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    tools: [
        { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Firebase", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", level: 80, icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    ]
}

// Projects
export const projects = [
    {
        id: 1,
        title: "CLOTHE – Modern Ecommerce Platform",
        description: "Scalable multi-vendor marketplace handling high-volume transactions. Optimized for performance with 99.9% uptime and sub-second page loads.",
        image: "/assets/images/ecommerce.png",
        tags: ["React", "Tailwind Css", "Django", "PostgresSQL"],
        liveUrl: "https://clothe-xi.vercel.app/",
        githubUrl: "https://github.com/Sabbir-dev07/CLOTHE"
    },
    {
        id: 2,
        title: "Forever E-Commerce Website",
        description: "A modern, responsive e-commerce web application with dynamic product browsing, shopping cart functionality, and smooth user experience. Built with a clean frontend architecture and performance-focused features to ensure fast page loads and intuitive shopping.",
        image: "/assets/images/taskapp.png",
        tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        liveUrl: "https://forever-e-commerce-website.vercel.app/",
        githubUrl: "https://github.com/Sabbir-dev07/Forever_e-commerce-website"
    },
]

// Experience
export const experience = [
    {
        id: 1,
        company: "Freelance",
        position: "Full Stack Developer",
        period: "2025 - Present",
        description: "Developing full-stack web applications using modern frontend and backend technologies. Responsible for building responsive user interfaces, implementing server-side logic, managing databases, and ensuring clean, scalable, and performance-oriented solutions.",
        technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Node.js", "Express.js", "PHP", "Python", "Django", "MongoDB", "MySQL"]
    },
    {
        id: 2,
        company: "Bseba Software",
        position: "Junior Developer",
        period: "2024 - 2025",
        description: "Assisted in developing responsive web applications, implementing structured user interfaces, and integrating backend services. Supported debugging, database management, and performance optimization to ensure reliable application delivery.",
        technologies: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React", "Node.js", "Express.js", "MongoDB", "Firebase"]
    },
    {
        id: 3,
        company: "Softvence",
        position: "Frontend Developer",
        period: "2023 - 2024",
        description: "Developed and maintained responsive web interfaces using modern frontend technologies. Collaborated in feature implementation, participated in code reviews, and contributed to improving UI components and internal tools.",
        technologies: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Javascript", "React", "Redux"]
    }
]


