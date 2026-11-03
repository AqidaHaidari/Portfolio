// Every piece of copy on the site lives here, so the page can be updated
// without touching layout code. Mirrors the CV, reverse-chronological.

export const profile = {
  name: 'Aqida Haidari',
  role: 'Full Stack Web Developer',
  location: 'Herat, Afghanistan',
  email: 'aqidahaidari@gmail.com',
  phone: '+93 797 456 324',
  phoneHref: '+93797456324',
  resume: '/Aqida-Haidari.pdf',
  resumeFilename: 'Aqida-Haidari-Resume.pdf',
  availability: 'Open to remote roles',
  // The one line a hiring manager should leave with.
  pitch:
    'I build and maintain production backends with Node.js, Medusa and MongoDB — and I teach Afghan women to write the code behind them.',
  links: [
    { label: 'GitHub', href: 'https://github.com/AqidaHaidari' },
    // Second GitHub account from the CV: add it here once the URL is known.
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aqida-haidari-34785a226/',
    },
  ],
};

// Three facts, set in mono under the hero. Kept short enough to scan.
export const heroFacts = [
  { label: 'Based in', value: 'Herat, AF — remote' },
  { label: 'Building since', value: '2019' },
  { label: 'Core stack', value: 'Node · React · Medusa · Mongo' },
];

export const about = {
  paragraphs: [
    'I am a full stack web developer with more than three years of professional experience across backend services, website management and technical education. Most of my work is remote, with teams spread across several time zones.',
    'At Aseel I worked inside a Medusa.js commerce backend — entity design, query optimisation, scheduled jobs and event subscribers — and at GitStart I shipped features into open source codebases that thousands of people depend on, including OwnCloud, Storybook and Chatwoot.',
    'The other half of my work is teaching. I built and ran a beginner web development curriculum for Afghan students at LEARN Afghan, because the fastest way to put more Afghan women in engineering roles is to get the first project onto their screen.',
  ],
  facts: [
    { label: 'Education', value: 'BSc Computer Science, Herat University' },
    { label: 'Also trained at', value: 'Code to Inspire, Herat' },
    { label: 'Languages', value: 'Persian (native), English (professional)' },
    { label: 'Focus', value: 'Backend services, REST APIs, data modelling' },
  ],
};

// Add `live` or `repo` URLs here and the buttons appear automatically.
export const projects = [
  {
    title: 'LEARN Afghan',
    kind: 'Nonprofit',
    year: '2024 — now',
    description:
      'The public website for an education nonprofit serving Afghan students. I manage and build it in WordPress — redesigns, content structure, performance, accessibility and SEO — alongside the CodeIgniter LMS behind it.',
    stack: ['WordPress', 'Elementor', 'PHP', 'SEO'],
    live: 'https://learnafghan.org',
  },
  {
    title: 'This portfolio',
    kind: 'Personal',
    year: '2025',
    description:
      'A React front end with a Node.js and MongoDB backend for managing project entries, plus a contact pipeline that routes messages to Slack and email through Nodemailer.',
    stack: ['React', 'Tailwind', 'Framer Motion', 'Node.js', 'MongoDB'],
    live: 'https://aqidahaidari.netlify.app',
    repo: 'https://github.com/AqidaHaidari/Portfolio',
  },
  {
    title: 'MIS for AFGAMESTAN',
    kind: 'Client',
    year: '2023',
    description:
      'A management information system covering day-to-day company operations — employee records, payroll inputs and budget tracking — for a team that had been running on spreadsheets.',
    stack: ['CodeIgniter', 'PHP', 'MySQL'],
  },
  {
    title: 'MIS for Code to Inspire',
    kind: 'Education',
    year: '2025',
    description:
      'A tracking system for students, instructors and alumni at Afghanistan’s first coding school for women, built so staff could follow performance across cohorts.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/AqidaHaidari/EduMIS',
  },
  {
    title: 'Noosh Food',
    kind: 'Client',
    year: '2022',
    description:
      'An online ordering and delivery storefront for a US-based restaurant, built on Shopify with a custom theme and a checkout flow tuned for repeat orders.',
    stack: ['Shopify', 'Liquid', 'CSS'],
  },
  {
    title: 'Material Rates',
    kind: 'Mobile',
    year: '2021',
    description:
      'A React Native app for tracking construction material prices, so builders could compare current rates without calling around the market.',
    stack: ['React Native', 'JavaScript'],
  },
  {
    title: 'Cyber Threats',
    kind: 'Education',
    year: '2021',
    description:
      'An informational site explaining common attacks and defences in plain language, written for readers with no security background.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'AFRICA — CCSI',
    kind: 'Client',
    year: '2020',
    description:
      'The site for AFRICA, an affiliate of Compliance and Capacity Skills International. Built from scratch and running on the organisation’s own domain.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://ccsi.global/ccsi-africa/',
    repo: 'https://github.com/AqidaHaidari/AFRICA-CCSI',
  },
  {
    title: 'Gender Violence',
    kind: 'Advocacy',
    year: '2020',
    description:
      'An advocacy site presenting WHO prevalence data on gender-based violence region by region, and making the case for treating it as a matter for international policy.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://aqidahaidari.github.io/Gender-Violence/',
    repo: 'https://github.com/AqidaHaidari/Gender-Violence',
  },
];

// Shipped through GitStart, into other people's production codebases.
export const openSource = [
  'OwnCloud',
  'Notesnook',
  'Storybook',
  'Sourcegraph',
  'Betashares',
  'Chatwoot',
];

export const experience = [
  {
    company: 'Aseel',
    role: 'Backend Junior Professional',
    mode: 'Remote',
    period: 'March 2025 — April 2026',
    points: [
      'Developed and maintained a commerce backend on Medusa.js and TypeORM.',
      'Improved database performance and data integrity through query optimisation and entity design.',
      'Built scheduled jobs, event subscribers and custom services to automate manual operations work.',
      'Worked with the frontend and data teams to keep integrations and data consistent across systems.',
    ],
  },
  {
    company: 'LEARN Afghan',
    role: 'Website Manager',
    mode: 'Part time · Remote',
    period: '2024 — Present',
    points: [
      'Own the organisation’s website: performance, security, accessibility and SEO.',
      'Led redesigns, content restructures and navigation changes to make the site easier to use.',
      'Manage and customise a CodeIgniter-based LMS covering courses, instructors, students and learning resources.',
      'Partner with internal teams on digital tools that support education programmes for Afghan students.',
    ],
  },
  {
    company: 'GitStart',
    role: 'Full Stack Web Developer',
    mode: 'Remote',
    period: 'October 2022 — December 2024',
    points: [
      'Shipped features and fixes into open source and client codebases including OwnCloud, Notesnook, Storybook, Sourcegraph, Betashares and Chatwoot.',
      'Held to each project’s own review standards and release deadlines.',
      'Collaborated with international teams on scalable, accessible solutions.',
    ],
  },
  {
    company: 'LEARN Afghan',
    role: 'Web Development Teacher · Social Media Manager',
    mode: 'Remote',
    period: 'January 2021 — August 2024',
    points: [
      'Taught online web development to Afghan students: HTML, CSS, JavaScript and modern tooling.',
      'Designed a beginner curriculum that got every student to a finished first project and portfolio.',
      'Ran social media strategy, content and engagement, and tracked analytics to improve reach.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    mode: 'Global clients',
    period: '2019 — 2022',
    points: [
      'Designed and built custom websites and applications for clients abroad.',
      'Delivered responsive e-commerce storefronts on Shopify.',
      'Built a React Native app for tracking construction material prices.',
    ],
  },
];

export const skills = [
  {
    group: 'Languages & frameworks',
    items: [
      'JavaScript (ES6)',
      'React.js',
      'Vue.js',
      'React Native',
      'Node.js',
      'Express.js',
      'PHP',
      'Medusa.js',
      'Jest',
      'Pug',
      'MDX',
    ],
  },
  {
    group: 'Front end',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    group: 'Back end & data',
    items: ['REST APIs', 'CodeIgniter', 'TypeORM', 'MongoDB', 'MySQL'],
  },
  {
    group: 'Platforms & tools',
    items: ['Shopify', 'WordPress', 'Squarespace', 'Git', 'GitHub'],
  },
  {
    group: 'AI tooling',
    items: ['Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Gemini'],
  },
];

export const certifications = [
  { title: 'Certificate of Fellowship Completion', issuer: 'Aseel', year: '2026' },
  {
    title: 'Node.js, Express & MongoDB — complete bootcamp',
    issuer: 'Udemy',
    year: '2025',
  },
  { title: 'Certificate of Experience', issuer: 'GitStart', year: '2024' },
  { title: 'Cyber Security Essentials', issuer: '', year: '2024' },
  { title: 'Quality Assurance (QA) Fundamentals', issuer: '', year: '2024' },
  { title: 'Phishing Awareness and Prevention', issuer: '', year: '2024' },
  { title: 'SOC 2 Compliance Fundamentals', issuer: '', year: '2024' },
  {
    title: 'Full Stack Web App Development — two year programme',
    issuer: 'Code to Inspire',
    year: '2020',
  },
  { title: 'Women’s Leadership Development (WLD)', issuer: '', year: '2018' },
];

export const education = [
  {
    qualification: 'BSc Computer Science — Database Department',
    school: 'Herat University, Afghanistan',
    period: '2017 — 2021',
  },
  {
    qualification: 'Full Stack Web Development Programme',
    school: 'Code to Inspire, Herat',
    period: '2017 — 2020',
    note: 'Hands-on training in modern web development through coursework and real client projects.',
  },
];
