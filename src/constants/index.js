import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    csharp,
    dotnet,
    //meta,
    //starbucks,
    //tesla,
    //shopify,
    aphogeschool,
    kdg,
    sintlodewijk,
    companysolutions,
    moviecollection,
    btpservice,
    speedboatracing,
    threejs,
    mohamedazdad,
    azdineeljattari,
    hichambouzian,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "school",
      title: "Skills",
    },
    /*
    {
      id: "work",
      title: "Work",
    },
    */
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: ".NET Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: ".NET",
      icon: dotnet,
    },
  ];

  const schoolexperiences = [
    {
      title: "Bachelor Applied Informatics",
      company_name: "Artesis Plantijn University College",
      icon: aphogeschool,
      iconBg: "#FFFFFF",
      date: "2018 - 2023",
      points: [
        "Minor .NET",
        "I learned about Programming languages such as Java, React, Angular, .NET Framework, SpringBoot, MongoDB, MsSQL and more,",
        "User Interface such as Classdiagrams, Sequencediagrams, DataFlow-diagrams and more, ",
        "Classes about Unity3D, Design Patterns, Software Security & Testing, Database Administration, Normalization and Software Engineering"
      ],
    },
    {
      title: "Bachelor Applied Informatics",
      company_name: "Karel de Grote University of Applied Sciences and Arts",
      icon: kdg,
      iconBg: "#000000",
      date: "2017 - 2018",
      points: [
        "I learned about the first practices in Object Oriented Programming,",
        "First time learning about HTML5&CSS3 and JavaScript,",
        "Classes about UML, Databases, Java and JavaFX, Networking with Cisco Packet Tracer and,",
        "User Interfaces & Design using AdobeXD and Wireframe.cc",
      ],
    },
    {
      title: "Internship: Software Maintenance",
      company_name: "Company Solutions",
      icon: companysolutions,
      iconBg: "#FFFFFF",
      date: "2017",
      points: [
        "Tasks and responsibilities in:",
        "Installing Care-Ace software and helpful extensions on numerous tablets",
        "Maintain network management at various customers",
        "Maintain cash register systems at various customers",
      ],
    },
    {
      title: "Applied Informatics",
      company_name: "Secondary Education Sint-Lodewijk Antwerpen",
      icon: sintlodewijk,
      iconBg: "#FFFFFF",
      date: "2016 - 2017",
      points: [
        "5th & 6th grade",
        "My first time studying Applied Informatics starting in 2016",
        "First time using Visual Studio, learning with ConsoleApplication, WinForms and Webapplications",
      ],
    },
    {
      title: "Commerce",
      company_name: "Secondary Education Sint-Lodewijk Antwerpen",
      icon: sintlodewijk,
      iconBg: "#FFFFFF",
      date: "2015 - 2016",
      points: [
        "4th grade",
        "Studying Business IT and Commerce",
        "First time using Microsoft Small Basic (a programming language for transitioning from block-based coding to text-based coding)",
      ],
    },
  ];

  /*
  const experiences = [
    {
      title: "",
      company_name: "",
      icon: "",
      iconBg: "#383E56",
      date: "",
      points: [
        "",
      ],
    },
    {
      title: "",
      company_name: "",
      icon: "",
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "",
      ],
    },
    {
      title: "",
      company_name: "",
      icon: "",
      iconBg: "#383E56",
      date: "",
      points: [
        "",
      ],
    },
    {
      title: "",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "",
      ],
    },
  ];
  */
  
  const testimonials = [
    {
      testimonial:
        "The website is very informative and it looks great, well done! I was impressed with how well the website works and how easy it was to find the information I was looking for.",
      name: "Mohamed Azdad",
      designation: "Student",
      company: "AP Hogeschool",
      image: mohamedazdad,
    },
    {
      testimonial:
        "The website's functionality is top-notch. It loaded quickly, and the responsive design made it equally accessible on both desktop and mobile devices.",
      name: "Hicham Bouzian",
      designation: "Student",
      company: "AP Hogeschool",
      image: hichambouzian,
    },
    {
      testimonial:
        "Nabil's website is a fantastic blend of creativity, information, and interactivity. I highly recommend visiting the website to anyone seeking a delightful online experience. Kudos to Nabil for creating such an outstanding virtual haven!",
      name: "Azdine El Jattari",
      designation: "Projectconsultent ICT",
      company: "USG Professionals",
      image: azdineeljattari,
    },
  ];
  
  const projects = [
    {
      name: "Movie Collection",
      description:
        "This is a simple webapplication (for personal use) where we display, download and consult our movie collection.",
      tags: [
        {
          name: "ASP.NET",
          color: "blue-text-gradient",
        },
        {
          name: "MsSQL",
          color: "green-text-gradient",
        },
        {
          name: "EF Core",
          color: "yellow-text-gradient",
        },
      ],
      image: moviecollection,
      source_code_link: "https://github.com/NabilEMAP/MovieCollection",
    },
    {
      name: "BTP Service",
      description:
        "BTP (Boomkwekerij Taak Planner) also known as Arboriculture Task Planner is a software application or tool designed to help arborists, tree care professionals, or even homeowners plan and organize their arboricultural tasks more efficiently. ",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Ionic",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "blue-text-gradient",
        },
        {
          name: "MsSQL",
          color: "green-text-gradient",
        },
        {
          name: "EF Core",
          color: "yellow-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: btpservice,
      source_code_link: "https://github.com/AP-IT-GH/22-23-ASP-22-23-asp-groep-l",
    },
    {
      name: "Speedboat Racing Game in VR",
      description:
        "Speedboat Racing Game is a game where you have to race against the AI trained boats using your VR Controllers as paddles. Your goal is to complete a sprint. A sprint is a type of circuit that contains no laps, where you have to get from the start to the finish line. In this race, the idea is to hit first against the AI trained boats.",
      tags: [
        {
          name: "C-Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity3D",
          color: "yellow-text-gradient",
        },        
      ],
      image: speedboatracing,
      source_code_link: "https://github.com/AP-IT-GH/groepswerk-WhiteBeard",
    },
  ];
  
  export { services, technologies, schoolexperiences, /*experiences,*/ testimonials, projects };