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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Equipment Condition",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.283",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: [
        "Equipment is old, worn-out, or in poor condition, requiring frequent repairs.",
        "Equipment is functional but may have minor issues or signs of wear.",
        "Equipment is in average condition, maintained regularly, and operates reliably.",
        "Equipment is well-maintained, relatively new, and operates smoothly.",
        "Equipment is brand new, state-of-the-art, and in pristine condition."
    ],
  },
  {
    title: "Number of Equipment",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.283",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Very few pieces of equipment available, causing delays and inefficiencies.",
      "Limited number of equipment, which may require careful scheduling and management.",
      "Moderate number of equipment, sufficient for regular operations.",
      "Adequate number of equipment, ensuring smooth workflow and productivity.",
      "Abundant equipment resources, allowing for flexibility and scalability."
    ],
  },
  {
    title: "Equipment Service Time",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.283",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Equipment has been in service for many years, nearing the end of its usable life.",
      "Equipment has been in service for several years but is still operational.",
      "Equipment has moderate service time, with regular maintenance and occasional repairs.",
      "Equipment is relatively new, with minimal service time and few maintenance issues.",
      "Equipment is brand new, with no service time and no history of maintenance or repairs."
    ],
  },
  {
    title: "Materials quantity",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.283",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Insufficient quantity of materials, causing delays and interruptions in work.",
      "Limited quantity of materials, requiring careful management to avoid shortages.",
      "Adequate quantity of materials for ongoing work without major interruptions.",
      "Sufficient quantity of materials, allowing for smooth and continuous progress.",
      "Abundant quantity of materials, providing a surplus for unexpected demands."
      ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
