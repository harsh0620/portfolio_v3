import type {
  HeroData,
  AboutData,
  Skill,
  Project,
  Experience,
  Education,
  NavSection,
  ContactInfo,
  NowData,
} from './definitions'

export const heroData: HeroData = {
  name: 'Harsh Chandravanshi',
  greeting: "Hey, I'm",
  roles: ['Software Developer', 'Indie Builder', 'Explorer'],
  bio: "Frontend Engineer who obsesses over learning deeply and building indie apps that serve real people. Currently going deep on LLD and Flutter while building a life OS for India. I ship fast, leverage AI tooling, and care about products that feel great to use.",
  social: {
    github: 'https://github.com/harsh0620',
    linkedin: 'https://www.linkedin.com/in/harshchandravanshi1',
    twitter: 'https://twitter.com/haxpl0rer',
    instagram: 'https://www.instagram.com/harshchandravanshi/',
    resume:
      'https://drive.google.com/file/d/1-kn7BtnmFHOxf1oxoWUFF0WMtfSiNx7x/view?usp=sharing',
  },
  image: '/images/hero.png',
}

export const aboutData: AboutData = {
  title: 'I love being a developer and coder!',
  description:
    "Since day one after college, I've been all-in on frontend — web and mobile. React.js, Next.js, React Native, Flutter, Android, and WebView integrations are my everyday tools. Currently at FamApp, building webview products embedded inside the FamPay app. My real goal is to learn deeply — system design, new frameworks, how great products are built — and use that knowledge to ship indie apps that serve people and generate passive income. When I'm not coding, I'm studying how startups grow, listening to podcasts, and watching series.",
  stats: [
    { value: '10+', label: 'projects' },
    { value: '30k+', label: 'lines of code' },
    { value: '1500+', label: 'coding questions' },
  ],
  image: '/images/about.png',
  imageDark: '/images/about-dark.png',
}

export const skillsData: Skill[] = [
  { id: 1, name: 'HTML', icon: '/skills/html.svg', category: 'Frontend' },
  { id: 2, name: 'CSS', icon: '/skills/css.svg', category: 'Frontend' },
  { id: 3, name: 'Bootstrap', icon: '/skills/bootstrap.svg', category: 'Frontend' },
  { id: 4, name: 'Tailwind', icon: '/skills/tailwind.svg', category: 'Frontend' },
  { id: 5, name: 'JavaScript', icon: '/skills/javascript.svg', category: 'Frontend' },
  { id: 6, name: 'TypeScript', icon: '/skills/typescript.png', category: 'Frontend' },
  { id: 7, name: 'React', icon: '/skills/react.svg', category: 'Frontend' },
  { id: 8, name: 'React Native', icon: '/skills/react.svg', category: 'Mobile' },
  { id: 9, name: 'Flutter', icon: '/skills/flutter.svg', category: 'Mobile' },
  { id: 26, name: 'Android', icon: '/skills/android.svg', category: 'Mobile' },
  { id: 27, name: 'iOS', icon: '/skills/ios.svg', category: 'Mobile' },
  { id: 25, name: 'Expo', icon: '/skills/expo.png', category: 'Mobile' },
  { id: 28, name: 'Redux', icon: '/skills/redux.svg', category: 'Frontend' },
  { id: 10, name: 'Next.js', icon: '/skills/nextjs.svg', category: 'Frontend' },
  { id: 11, name: 'Electron.js', icon: '/skills/electron.svg', category: 'Frontend' },
  { id: 12, name: 'Node.js', icon: '/skills/nodejs.svg', category: 'Backend' },
  { id: 13, name: 'Express.js', icon: '/skills/expressjs.svg', category: 'Backend' },
  { id: 14, name: 'Firebase', icon: '/skills/firebase.svg', category: 'Backend' },
  { id: 15, name: '.NET', icon: '/skills/dotnet.svg', category: 'Backend' },
  { id: 16, name: 'MongoDB', icon: '/skills/mongodb.svg', category: 'Database' },
  { id: 17, name: 'PostgreSQL', icon: '/skills/postgresql.svg', category: 'Database' },
  { id: 18, name: 'Problem Solving', icon: '/skills/problemsolving.png', category: 'CS' },
  { id: 19, name: 'Data Structure', icon: '/skills/datastructure.png', category: 'CS' },
  { id: 20, name: 'Algorithm', icon: '/skills/algorithm.png', category: 'CS' },
  { id: 21, name: 'C', icon: '/skills/c.svg', category: 'Language' },
  { id: 22, name: 'C++', icon: '/skills/cplusplus.svg', category: 'Language' },
  { id: 23, name: 'C#', icon: '/skills/csharp.svg', category: 'Language' },
  { id: 24, name: 'Python', icon: '/skills/python.svg', category: 'Language' },
]

export const toolsData: Skill[] = [
  { id: 1, name: 'VSCode', icon: '/skills/vscode.svg', category: 'Tool' },
  { id: 2, name: 'Git', icon: '/skills/git.svg', category: 'Tool' },
  { id: 3, name: 'GitHub', icon: '/skills/github.svg', category: 'Tool' },
  { id: 4, name: 'Chrome', icon: '/skills/chrome.svg', category: 'Tool' },
  { id: 5, name: 'AWS', icon: '/skills/aws.svg', category: 'Tool' },
  { id: 6, name: 'Vercel', icon: '/skills/vercel.svg', category: 'Tool' },
]

export const projectsData: Project[] = [
  {
    slug: 'anshyati',
    index: 1,
    title: 'Anshyati',
    shortDescription: 'Bill Splitting App',
    image: '/projects/anshyati.png',
    liveLink: 'https://anshyati.harshchandravanshi.com',
    codeLink: 'https://github.com/harsh0620/anshyati',
    isWIP: false,
    tags: ['React.js', 'Firebase', 'Tailwind CSS', 'Recharts'],
    longDescription: {
      introduction:
        'It is a clone of the Splitwise, built using Firebase and React.js.',
      problemStatement:
        'No dedicated application and tool to split the bills among friends and colleagues after a get-together or party. No such app to instantly split and share the bill and pay after a meal at a restaurant or in any such situations.',
      description:
        'The app named ANSHYATI is built to split the bills and pay the share instantly after an eat-out or any other event. Users can create groups, add expenses, view who owes who, and settle up. It provides graphical representations of category-wise expenses, category-wise groups, and monthly expenses. One can join a group via a shared link, and expenses can be split only to selected members in the group. One can also add a friend using a QR code.',
      keyFeatures: [
        'Create user groups and track group expenses',
        'Keep track of shared expenses and settle balances in a convenient and personalized way',
        'Get analytical graphs to understand your expenditure trend',
        'Add friends using QR Code',
        'Download the group history in .csv format',
        'Download the expense receipt in PNG format',
        'Highly enriched UI experience',
        'Multiple user registration',
        'Authentication using Google with ease',
      ],
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Recharts', 'html2Canvas', 'React QR Code and Scanner'],
      gallery: [
        '/anshyati/anshyati.harshchandravanshi.com_0.png',
        '/anshyati/anshyati.harshchandravanshi.com_1.png',
        '/anshyati/anshyati.harshchandravanshi.com_2.png',
        '/anshyati/anshyati.harshchandravanshi.com_3.png',
        '/anshyati/anshyati.harshchandravanshi.com_4.png',
        '/anshyati/anshyati.harshchandravanshi.com_5.png',
        '/anshyati/anshyati.harshchandravanshi.com_6.png',
        '/anshyati/anshyati.harshchandravanshi.com_7.png',
        '/anshyati/anshyati.harshchandravanshi.com_8.png',
        '/anshyati/anshyati.harshchandravanshi.com_9.png',
        '/anshyati/anshyati.harshchandravanshi.com_10.png',
      ],
    },
  },
  {
    slug: 'piclet',
    index: 2,
    title: 'Piclet',
    shortDescription: 'Empowering Photographers with Innovation',
    image: '/projects/piclet.png',
    liveLink: 'https://app.piclet.in/',
    codeLink: 'https://app.piclet.in/',
    isWIP: false,
    tags: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express.js'],
    longDescription: {
      introduction:
        'The one-stop solution for photographers to create their online portfolios and find the best photographer for your needs.',
      problemStatement:
        'There is currently no dedicated platform or marketplace for both users and photographers. Piclet aims to resolve this problem by providing a centralized space for photographers to showcase their work and for users to easily find and hire the best-fit photographer for their needs.',
      description:
        'We provide a comprehensive solution to streamline the process of hiring a photographer, empowering photographers with technology to change the way they build their online presence, showcase their portfolio, and manage their workflow and business.',
      keyFeatures: [
        'Find the Best Fit Photographer for your needs',
        '100% Safe and Secure Photographers',
        'Build your online Photography Portfolio with ease for FREE',
        'Get 100% of your profit with 0% Commission cut',
        'Find clients based on your Availability, location, and Expertise',
        "Be a Part of Piclet's Exclusive community of creative photographers",
      ],
      technologies: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express.js'],
      gallery: ['/piclet/app.piclet.in.png'],
    },
  },
  {
    slug: 'ctae-cpp',
    index: 3,
    title: 'CTAE CPP',
    shortDescription: 'Campus placement portal for CTAE',
    image: '/projects/ctae-cpp.png',
    liveLink: 'https://ctae-cpp.harshchandravanshi.com',
    codeLink: 'https://github.com/harsh0620/ctae-cpp',
    isWIP: false,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    longDescription: {
      introduction:
        'The Campus Placement Portal for CTAE is developed as part of the final year CSE project. It aims to provide an efficient and user-friendly platform for streamlined placement processes.',
      problemStatement:
        'Traditional placement methods face challenges in efficiency and user-friendliness. The Campus Placement Portal addresses these issues by offering a modern solution.',
      description:
        'The portal consists of three distinct roles: Student, Company, and Admin. Each role has specific features tailored to their needs, offering a user-friendly interface and powerful functionalities.',
      keyFeatures: [
        'Role-specific features for Students, Companies, and Admin',
        'Real-time information and statistics',
        'Efficient job application and hiring processes',
        'Interactive job calendar for planning placement activities',
        'Professional profile management for students',
        'Company profile creation and management',
        'Exporting applicant data for detailed analysis',
        'Notification system for important updates',
        'Secure authentication using JSON Web Tokens (JWT)',
        'Efficient email communication using Nodemailer',
        'Application-wide state management using Redux',
        'RESTful APIs for smooth client-server communication',
      ],
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Firebase',
        'Nodemailer',
        'Redux',
        'bcrypt',
      ],
      gallery: [
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_0.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_1.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_2.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_3.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_4.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_5.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_6.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_7.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_8.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_9.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_10.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_11.png',
        '/ctae-cpp/ctae-cpp.harshchandravanshi.tech_12.png',
      ],
    },
  },
  {
    slug: 'devboard',
    index: 4,
    title: 'DevBoard',
    shortDescription: 'A developer productivity dashboard',
    image: '/projects/devboard.png',
    liveLink: 'https://devboard.harshchandravanshi.com',
    codeLink: 'https://github.com/harsh0620/devboard',
    isWIP: false,
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    longDescription: {
      introduction:
        'DevBoard is a comprehensive developer dashboard that centralizes your workflow — tasks, notes, GitHub activity, and productivity metrics.',
      problemStatement:
        'Developers juggle multiple tools for task management, note-taking, and progress tracking. DevBoard unifies these into one clean interface.',
      description:
        'React frontend with a Node.js/Express API backend, connected to MongoDB for data persistence. Provides an all-in-one workspace for developers to manage their daily workflow.',
      keyFeatures: [
        'Kanban task management',
        'Markdown note editor',
        'GitHub activity integration',
        'Productivity analytics dashboard',
        'Dark mode support',
        'Responsive design for all screen sizes',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'GitHub API'],
      gallery: [
        '/devboard/devboard.harshchandravanshi.tech_0.png',
        '/devboard/devboard.harshchandravanshi.tech_1.png',
        '/devboard/devboard.harshchandravanshi.tech_2.png',
        '/devboard/devboard.harshchandravanshi.tech_3.png',
        '/devboard/devboard.harshchandravanshi.tech_4.png',
        '/devboard/devboard.harshchandravanshi.tech_5.png',
        '/devboard/devboard.harshchandravanshi.tech_6.png',
        '/devboard/devboard.harshchandravanshi.tech_7.png',
      ],
    },
  },
  {
    slug: 'dscctae',
    index: 5,
    title: 'DSC CTAE',
    shortDescription: 'Official website for Developer Student Club CTAE',
    image: '/projects/dscctae.png',
    liveLink: 'https://dscctae.harshchandravanshi.com',
    codeLink: 'https://github.com/harsh0620/dscctae',
    isWIP: false,
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    longDescription: {
      introduction:
        "The official website for DSC CTAE — showcasing events, team members, projects, and resources for the developer community at CTAE Udaipur.",
      problemStatement:
        'The club needed a central hub to publicise events, onboard new members, and share tech resources with the student community.',
      description:
        'Next.js website with Firebase for dynamic content management, allowing club admins to easily update events and content without code changes.',
      keyFeatures: [
        'Event listings and management',
        'Team member profiles',
        'Project showcase',
        'Blog & resource sharing',
        'Admin panel for content management',
      ],
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      gallery: ['/dscctae/dscctae.harshchandravanshi.tech.png'],
    },
  },
  {
    slug: 'moneywise',
    index: 6,
    title: 'MoneyWise',
    shortDescription: 'Your Personal Expense Tracker',
    image: '/projects/moneywise.png',
    liveLink: 'https://money-wise-seven.vercel.app/',
    codeLink: 'https://github.com/harsh0620/moneywise',
    isWIP: true,
    tags: ['Next.js', 'Node.js', 'React', 'CSS'],
    longDescription: {
      introduction:
        'MoneyWise is a powerful personal expense tracker designed to help users take control of their finances. With features like expense logging, budgeting, and intuitive expense analysis, MoneyWise makes financial management effortless.',
      problemStatement:
        'Managing personal finances can be challenging, with multiple expenses, income sources, and the need for effective budgeting. MoneyWise addresses these challenges by providing a user-friendly platform to track, analyze, and control expenses.',
      description:
        'MoneyWise is built with Next.js for the frontend, providing a smooth and responsive user experience. The backend ensures secure authentication, seamless data synchronization, and robust financial tracking capabilities.',
      keyFeatures: [
        'User Authentication',
        'Expense Logging',
        'Income Tracking',
        'Budgeting',
        'Expense Analysis',
        'Receipt Scanning',
        'Multi-platform Sync',
        'Financial Reports',
        'Expense Alerts',
      ],
      technologies: ['Next.js', 'Node.js', 'React', 'CSS', 'Radix UI'],
      gallery: ['/moneywise/money.wise.seven.vercel.app.png'],
    },
  },
  {
    slug: 'bharatatma',
    index: 7,
    title: 'BharatatmaVeda Form',
    shortDescription: 'Award application portal for Vedic scholars',
    image: '/projects/bharatatmapuraskar.png',
    liveLink: 'https://forms.bharatatmapuraskar.org/',
    codeLink: 'https://forms.bharatatmapuraskar.org/',
    isWIP: false,
    tags: ['React.js', 'Node.js', 'Firebase'],
    longDescription: {
      introduction:
        "Vedic study has been the cornerstone of knowledge in our country for centuries. To ensure it continues to flourish, the Singhal family presents national level excellence awards each year in three categories: the best Veda school or gurukul, the best Veda teacher, and the best Veda student.",
      problemStatement:
        'The biggest impediment for scholars is the effort needed to complete the rigorous application. Applicants must re-fill all the information to reapply each year — this takes too long, so many just choose not to. We need to make it easy for scholars to apply.',
      description:
        'A multi-step application portal that remembers applicant information across years, making re-application seamless. Supports multiple award categories with role-based application forms and an admin review workflow.',
      keyFeatures: [
        'User login using OTP',
        'Choice of application forms for different award categories',
        'Save progress and resume application later',
        'Pre-filled data from previous year applications',
        'Admin panel for reviewing and managing applications',
        'Multi-language support for vernacular content',
      ],
      technologies: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS'],
      gallery: ['/bharatatma/forms.bharatatmapuraskar.org_auth.png'],
    },
  },
  {
    slug: 'realtor',
    index: 8,
    title: 'Realtor',
    shortDescription: 'A modern real estate listing platform',
    image: '/projects/realtor.png',
    liveLink: 'https://realtor-ten.vercel.app',
    codeLink: 'https://github.com/harsh0620/realtor',
    isWIP: false,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    longDescription: {
      introduction:
        'Realtor is a modern real estate platform where users can browse property listings, filter by location and price, and contact sellers.',
      problemStatement:
        'Existing real estate platforms have cluttered UIs and poor mobile experiences. Realtor focuses on clean design and fast performance.',
      description:
        'React frontend with a Node.js API backend and PostgreSQL database for property listings and user management.',
      keyFeatures: [
        'Property search with filters',
        'High-quality image galleries',
        'Map integration',
        'Contact seller form',
        'Mobile-responsive design',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      gallery: [],
    },
  },
]

export const experiencesData: Experience[] = [
  {
    id: 0,
    company: 'FamApp',
    link: 'https://www.famapp.in/',
    role: 'Frontend Engineer',
    duration: 'Aug 2025 - Present',
    isLatest: true,
    description: [
      'Building and implementing new features: creating new webview websites from scratch and integrating them seamlessly into the FamPay app, ensuring a smooth user experience.',
      'Improving performance and scalability: optimizing existing webview websites to enhance speed, responsiveness, and the ability to handle a growing number of users and transactions.',
      'Handling and resolving issues: debugging and fixing bugs in webview websites, collaborating with other teams to ensure all issues are resolved promptly and effectively.',
      'Collaborating with cross-functional teams: working closely with product managers, designers, and engineers to understand project requirements and deliver high-quality solutions.',
      'Staying updated with the latest technologies: continuously learning and adapting to new web development frameworks to ensure best practices and tools are used.',
    ],
  },
  {
    id: 1,
    company: 'RecordBook (YC-W22)',
    link: 'https://recordbook.io/',
    role: 'Software Developer',
    duration: 'July 2024 - Aug 2025',
    isLatest: false,
    description: [
      'Engineered a no-code CRM platform with Next.js App Router, Server Components, and Tailwind CSS, cutting client implementation time by 40%.',
      'Developed an intuitive visual workflow designer (react-flow) and drag-and-drop page builder (craft.js), empowering users to create custom interfaces and boosting usability by 65%.',
      'Built real-time collaboration with Redux and Socket.io, enabling 25+ simultaneous users with live presence in AG-Grid tables handling 100K+ rows at sub-second speeds.',
      'Optimized performance with TanStack Query, slashing API overhead by 50%, cutting load times by 35%, and ensuring 99.8% data reliability.',
      'Transformed architecture into a Turborepo monorepo, automating CI/CD with containerized GCP Cloud Run, cutting release cycles by 70% for daily zero-downtime deployments.',
    ],
  },
  {
    id: 2,
    company: 'Secure Meters Limited',
    link: 'https://www.securemeters.com/',
    role: 'Software Developer',
    duration: 'Jan 2023 - June 2024',
    isLatest: false,
    description: [
      'Orchestrated multilingual web app development for Bharatatma Purashkar, supporting 3 languages, resulting in a 40% increase in application submissions and 80% automation of the process.',
      'Engineered desktop app for Internal Project Excite, cutting script creation time by 25%. Serves as an advanced Python script editor and execution platform.',
      'Revamped Semslink web app, achieving a 20% user interaction improvement. Enhanced employee dashboard for easy access to attendance tracking and leave application features.',
      'Tech Stack: React, Electron, Node.js, Express.js, MongoDB, Firebase',
    ],
  },
]

export const educationData: Education[] = [
  {
    id: 1,
    institution: 'College Of Technology And Engineering',
    degree: 'B.Tech',
    cgpa: '8.25/10',
    courses:
      'OOPS, Operating Systems, Database Systems, Data Structures, Analysis Of Algorithms, Distributed Systems, and Computer Networking',
    duration: 'Jul 2019 - Jun 2023',
    isLatest: false,
  },
]

export const nowData: NowData = {
  tagline: "Learning deeply, building for India, writing what I learn — this is what drives me outside of work.",
  items: [
    {
      icon: '📝',
      category: 'Writing',
      title: 'Blog',
      description: "Planning to write about systems I build, things I learn from papers and books, and patterns I notice while shipping products. Writing forces clarity of thought.",
      status: 'coming-soon',
      href: '/blog',
    },
    {
      icon: '📚',
      category: 'Learning',
      title: 'Going Deeper',
      description: "Building strong fundamentals in system design and expanding my mobile stack. LLD is making me a better architect; Flutter is unlocking cross-platform indie shipping.",
      status: 'in-progress',
      tags: ['Low Level Design', 'Flutter'],
      href: '/learnings',
    },
    {
      icon: '🇮🇳',
      category: 'Building',
      title: 'India LifeOS',
      description: "A super-app built specifically for India — covering health, finance, productivity, relationships, and daily rituals in one place. The goal: one app to manage every aspect of your life, built for how Indians actually live.",
      status: 'in-progress',
      tags: ['Flutter', 'Indie App', 'WIP'],
      href: '/indie-apps',
    },
  ],
}

export const navSections: NavSection[] = [
  { id: '/#about', title: 'About' },
  { id: '/#skills', title: 'Skills' },
  { id: '/#projects', title: 'Projects' },
  { id: '/#work', title: 'Experience' },
  { id: '/#education', title: 'Education' },
  { id: '/#now', title: 'Now' },
  { id: '/#contact', title: 'Contact' },
]

export const contactInfo: ContactInfo = {
  email: 'harsh0111chandravanshi@gmail.com',
  address: 'Bengaluru, Karnataka, India',
  calendlyLink: 'https://calendly.com/harsh0111chandravanshi/30min?hide_event_type_details=1&hide_gdpr_banner=1',
}
