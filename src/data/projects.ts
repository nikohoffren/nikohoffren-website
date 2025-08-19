import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Dead Code Hunter",
    type: "VS Code Extension",
    description:
      "A powerful VS Code extension for tracking and managing unused code in your projects.",
    descriptionFi:
      "Tehokas VS Code -laajennus käyttämättömän koodin jäljittämiseen ja hallintaan projekteissasi.",
    image: "/dead-code-hunter-logo.png",
    links: [
      {
        type: "external",
        url: "https://marketplace.visualstudio.com/items?itemName=niko-hoffren.dead-code-hunter",
        text: "View Project",
        textFi: "Katso Projekti",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/dead-code-hunter",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["TypeScript", "VS Code API"],
  },
  {
    title: "Hunajaholistin Hunaja",
    type: "E-Commerce",
    description:
      "Modern e-commerce platform for honey products with integrated shopping cart and Stripe payments.",
    descriptionFi:
      "Moderni verkkokauppa-alusta hunajatuotteille integroidulla ostoskorilla ja Stripe-maksuilla.",
    image: "/HHlahja.jpg",
    links: [
      {
        type: "external",
        url: "https://www.hunajaholisti.fi",
        text: "Visit Site",
        textFi: "Vieraile Sivustolla",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/hunajaholisti-homepage",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["React", "TypeScript", "Stripe", "Firebase"],
  },
  {
    title: "Fork, Commit, Merge -website",
    titleFi: "Fork, Commit, Merge -verkkosivusto",
    type: "Website",
    description: "Website of Fork, Commit, Merge project.",
    descriptionFi: "Fork, Commit, Merge -projektin verkkosivusto.",
    image: "/fork-commit-merge-web-banner.png",
    links: [
      {
        type: "external",
        url: "https://forkcommitmerge.dev/",
        text: "Visit Site",
        textFi: "Vieraile Sivustolla",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/fork-commit-merge-web",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Fork, Commit, Merge",
    type: "Learning",
    description:
      "A comprehensive platform for learning GitHub contributions and open source development.",
    descriptionFi:
      "Kattava alusta GitHub-kontribuutioiden ja avoimen lähdekoodin kehityksen oppimiseen.",
    image: "/fork-commit-merge-logo.jpg",
    links: [
      {
        type: "github",
        url: "https://github.com/nikohoffren/fork-commit-merge",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Stolen Or Not?",
    type: "Mobile App",
    description:
      "Flutter app for tracking valuable devices and protecting them from theft.",
    descriptionFi:
      "Flutter-sovellus arvokkaiden laitteiden seurantaan ja suojaamiseen varkauksilta.",
    image: "/stolen-gear-logo.jpeg",
    links: [
      {
        type: "github",
        url: "https://github.com/nikohoffren/stolen-or-not-app",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Kuopio Public Transport",
    titleFi: "Kuopion Julkinen Liikenne",
    type: "Web App",
    description:
      "Real-time tracking and route information for Kuopio public transport.",
    descriptionFi:
      "Reaaliaikainen seuranta ja reittitiedot Kuopion julkiselle liikenteelle.",
    image: "/Vilkku_sydan_violetti.png",
    links: [
      {
        type: "external",
        url: "https://kuopio-public-transport.netlify.app",
        text: "Visit Site",
        textFi: "Vieraile Sivustolla",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/kuopio-public-transport",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["React", "Maps API"],
  },
  {
    title: "Niko Hoffrén Music",
    type: "Website",
    description:
      "Website showcasing my music production work, featuring music samples, videos, and gear information.",
    descriptionFi:
      "Verkkosivusto musiikkituotantooni liittyvistä asioista, sisältäen musiikkinäytteitä, videoita ja soitintietoja.",
    image: "/NHbackground.jpg",
    links: [
      {
        type: "external",
        url: "https://nikohoffrenmusic.netlify.app",
        text: "Visit Site",
        textFi: "Vieraile Sivustolla",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/nikohoffrenmusic-homepage",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["Vite", "React", "TypeScript"],
  },
  {
    title: "KISS CSS",
    type: "Framework",
    description:
      "A simple, lightweight CSS framework designed for ease of use, providing reusable CSS classes and components.",
    descriptionFi:
      "Yksinkertainen ja kevyt CSS-kirjasto, joka on suunniteltu helppokäyttöisyyttä ajatellen, tarjoten uudelleenkäytettäviä CSS-luokkia.",
    image: "/kiss-css-logo.jpg",
    links: [
      {
        type: "npm",
        url: "https://www.npmjs.com/package/kiss-css",
        text: "NPM Package",
        textFi: "NPM Paketti",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/kiss-css",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Smart Meeting Scheduler",
    type: "Chrome Extension",
    description:
      "Chrome extension for streamlining meeting scheduling with Google Calendar integration.",
    descriptionFi:
      "Chrome-laajennus kokousten ajanvaraamisen helpottamiseen Google Calendar -integraatiolla.",
    image: "/smart-meeting-scheduler-logo.jpg",
    links: [
      {
        type: "chrome",
        url: "https://chrome.google.com/webstore/detail/smart-meeting-scheduler/icaojehhbdenebdcahljjhnohnjmbpfa",
        text: "Web Store",
        textFi: "Web Store",
      },
      {
        type: "github",
        url: "https://github.com/nikohoffren/smart-meeting-scheduler",
        text: "Source",
        textFi: "Lähdekoodi",
      },
    ],
    technologies: ["JavaScript", "Node.js", "Chrome API"],
  },
];
