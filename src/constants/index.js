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
    meta,
    starbucks,
    tesla,
    shopify,
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
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
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
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
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
  
  export { services, technologies, experiences, testimonials, projects };