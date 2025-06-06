const commandData = {
    help: {
      description: "Available commands: 'about', 'education', 'skills', 'experience', 'projects', 'interests', 'contact', 'links', 'clear', 'go [project-name]','download','/'",
      result: `
    Available commands:
     - 'about': Information about Surajit Maity.
     - 'education': Academic background.
     - 'skills': List of technical skills.
     - 'experience': Work experience.
     - 'projects': Overview of projects.
     - 'interests': Personal interests.
     - 'contact': Contact information.
     - 'links': External links.
     - 'clear': Clears the terminal.
     - 'go [project-name]': Redirects to the project link.
     - 'download': To download my resume.
     - '/': Return to the home section.
      `,
    },
    about: {
      description: "Information about Surajit Maity.",
      result: "I am Surajit Maity, a full stack web developer,love to learn and build new things",
    },
    education: {
      description: "Academic background.",
      result: `
        The Neotia University - B.Tech in Computer Science (Specialized in Cyber Security)
        Grad - 2025 | Kolkata | CGPA: 9.02
  
        Chaipat High School - High Secondary
        2019 - 2021 | Ghatal | Percentage: 87.5
  
        Chaipat High School - Secondary
        2019 | Ghatal | Percentage: 86.86
      `,
    },
    skills: {
      description: "List of technical skills.",
      result: `
        Programming: C, C++, Java, JavaScript, TypeScript, Python
        Front-End Development: HTML, CSS
        Frameworks: React, Preact, Fresh, NextJs, Tailwind
        Back-End Development: Node.js, MongoDB
        Frameworks: Express.js
        Cyber Security | Networking: Linux, Penetration testing, Cisco Packet Tracer
      `,
    },
    experience: {
      description: "Work experience.",
      result: `
        YBI Foundation - Summer Intern
        June 2023 - July 2023 | Online Mode
        Role: Machine Learning Intern
      `,
    },
    projects: {
      description: "Overview of projects.",
      result: 
      `
        Remindify - Client Side Reminder App (Vanilla JS | PWA | IndexDB)
        - Users can add learning concepts and set customized revision reminders.
        - Supports recurring and one-time reminders for flexible scheduling.
        - For live preview type: 'go remindify'
  
        The Next Queue - Movie Recommendation System (Python | Pandas | Scikit-learn)
        - Employed collaborative filtering to analyze user ratings and recommend similar movies.
        - Achieved a 15% increase in recommendation accuracy.
        - For live preview type: 'go the-next-queue'
  
        Mr. Calculator - Web app for arbitrary-precision calculation (Fresh(Meta Framework) | Big.Js)
        - Handles calculations with extremely large numbers beyond JavaScript's limits.
        - For live preview type: 'go mr-calculator'
  
        Mind-Matrix - Mental Health Management Platform (React | ExpressJs | MongoDB)
        - A platform to help users find mental health solutions and interact with a chatbot or a counselor.
        - For live preview type: 'go mind-matrix'
      
        `,
    },
    interests: {
      description: "Personal interests.",
      result: "Cricket, Table Tennis, Memes",
    },
    contact: {
      description: "Contact information.",
      result: `
        Email: maitysurajit0901@gmail.com
        LinkedIn: https://www.linkedin.com/in/surajitmaity3112/
      `,
    },
    links: {
      description: "External links.",
      result: `
        Portfolio: https://surajitmaity.vercel.app/
        Facebook: https://www.facebook.com/surajit3112
        Github: https://github.com/nextpointer
        LinkedIn: https://www.linkedin.com/in/surajitmaity3112/
        X: https://twitter.com/necstpointer
      `,
    },
    go: {
      description: "Redirects to the specified project link.",
      result: (projectName: string) => {
        const projectLinks: Record<string, string> = {
          remindify: "https://r69.vercel.app",
          "the-next-queue": "https://www.kaggle.com/code/lazy34/movie-recommendation",
          "mr-calculator": "https://mr-calculator.deno.dev/",
          "mind-matrix": "https://github.com/lazy34/Mind-Matrix",
        };
        return projectLinks[projectName] || `Project not found: ${projectName}.`;
      },
    },
    download: {
      description: "Download my resume.",
      result: "Downloading resume...",
    },
    "/": {
      description: "Return to the home section.",
      result: "Returning to the home section...",
    },
  };
  
  export default commandData;
  
