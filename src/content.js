export const links = {
  github: 'https://github.com/Bobwillrule',
  websiteSource: 'https://github.com/Bobwillrule/Personal-Website',
  linkedin: 'https://www.linkedin.com/in/hugochen07/',
  email: 'mailto:hugohqchen@gmail.com',
  resume: './documents/Hugo-Chen-Resume.pdf',
};

// User-confirmed activities, presented without claiming exact times.
export const moments = [
  {
    time: 'Start the day',
    title: 'Wake Up & Gym',
    description: 'Even though I hate waking up and leg day, I still do them anyways.',
    image: 'gym.jpg',
    alt: 'Gym shoes, a water bottle, towel, and dumbbells in morning light',
  },
  {
    time: 'On campus',
    title: 'Classes & Labs',
    description: 'Electrical engineering & computer science. My favourite class was discrete math.',
    image: 'campus',
    alt: 'A tree-lined building on the UBC campus',
  },
  {
    time: 'Focused time',
    title: 'Projects & LeetCode',
    description: 'Neetcode 250, Typing code and Codex Prompting. I love trees in leetcode',
    image: 'projects-leetcode.png',
    alt: 'LeetCode Swim in Rising Water problem beside a Python disjoint-set solution',
  },
  {
    time: 'Dinner time',
    title: 'Cook Dinner',
    description:
      'I usually make asian, but this beef wellington for my anniversary was exceptional',
    image: 'dinner.jpg',
    alt: 'Two plates of beef Wellington with mashed potatoes and asparagus',
  },
  {
    time: 'Time to unwind',
    title: 'Relax & Friends',
    description:
      "Relax, read, hangout with friends. I'm hardstuck silver but let me know if you want to queue.",
    image: 'gaming-friends.jpg',
    alt: 'Valorant combat report showing an ace in competitive play',
  },
  {
    time: 'End of the day',
    title: 'Sleep',
    description:
      'I value my rest greatly (at least 8 hours), so I am energized to do what I need to do tomorrow.',
    image: 'sleep.jpg',
    alt: 'A calm bedroom at night with a warm bedside lamp and city lights',
  },
];

export const projects = [
  {
    id: 'behind-the-etf',
    title: 'BehindTheETF',
    category: 'Web & Data',
    visual: 'etf',
    description: 'See what’s really inside your ETFs. Explore holdings, exposure, and overlap.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    date: 'June 2026 — Present',
    summary:
      'An ETF analytics platform that looks beyond the top-level holdings to reveal exposure across nested funds.',
    details: [
      'Recursive fund look-through for holdings, sectors, countries, and overlap.',
      'A TypeScript ingestion pipeline integrating data from five ETF providers.',
      'APIs that turn nested fund data into useful portfolio insights.',
    ],
    href: 'https://github.com/Bobwillrule/BehindTheEtf',
  },
  {
    id: 'ai-trader',
    title: 'AI Trader',
    category: 'AI & Data',
    visual: 'trader',
    description: 'A reinforcement-learning trading system. Train, test, and benchmark policies.',
    tags: ['Python', 'PyTorch', 'FastAPI'],
    date: 'August 2025 — Present',
    summary:
      'A research environment for learning and evaluating trading policies, grounded in realistic costs and chronological testing.',
    details: [
      'Deep Q-Network trained on more than 100,000 historical market observations.',
      'Trading environment that includes fees, slippage, stop-loss, and take-profit strategies.',
      'FastAPI dashboard for training orchestration and benchmarking against cash and buy-and-hold, using Sharpe ratio and maximum drawdown.',
    ],
    href: 'https://github.com/Bobwillrule/AI-Trader',
  },
  {
    id: 'unit-calculator',
    title: 'Unit Calculator',
    category: 'Software',
    visual: 'calculator',
    description: 'A little less mental math. Calculations and unit conversions in one Android app.',
    tags: ['Kotlin', 'Android', 'Mobile'],
    date: 'Personal project',
    summary: 'An Android calculator that brings calculations and unit conversions into one place.',
    details: [
      'Work with metric and imperial units in one calculation.',
      'A practical tool built around everyday conversion problems.',
      'The original Kotlin project is linked here; later versions are separate repositories.',
    ],
    href: 'https://github.com/Bobwillrule/Unit-Calculator',
  },
  {
    id: 'financial-tracker',
    title: 'Financial Tracker',
    category: 'Software',
    visual: 'finance',
    description: 'A clearer picture of personal finances, one transaction at a time.',
    tags: ['Java', 'Swing', 'JUnit'],
    date: 'September 2025 — January 2026',
    summary: 'A Java desktop application for recording income, expenses, and account balances.',
    details: [
      'Object-oriented architecture for transactions, balances, and account state.',
      'A Swing interface for managing everyday finances.',
      'JUnit tests with 100% coverage of core financial logic, as reported in my resume.',
    ],
    href: 'https://github.com/Bobwillrule/Financial-Tracker',
  },
  {
    id: 'sliding-table',
    title: 'Four-way Coffee Table',
    category: 'Engineering',
    visual: 'table',
    description: 'Designed in CAD. Built by hand. A sliding table with a little more possibility.',
    tags: ['CAD', 'Woodworking', 'Design'],
    date: 'Personal project',
    summary:
      'A custom wooden coffee table with a four-way sliding top, designed and built from scratch.',
    details: [
      'Explored mechanical movement through CAD and physical construction.',
      'Combined design decisions with the constraints of materials and fabrication.',
      'The original project portfolio documents the design and build.',
    ],
    href: './documents/Project-Portfolio.pdf',
    linkLabel: 'Read project portfolio',
  },
  {
    id: 'portfolio',
    title: 'This Little Corner',
    category: 'Web & Data',
    visual: 'portfolio',
    description:
      'A personal home on the web, bringing engineering and everyday curiosity together.',
    tags: ['React', 'Vite', 'CSS'],
    date: '2026',
    summary: 'A responsive React portfolio inspired by an editorial, chapter-based design.',
    details: [
      'Reusable components for projects, navigation, and chapter layouts.',
      'Responsive layouts, keyboard-accessible dialogs, and reduced-motion support.',
      'A static production build compatible with GitHub Pages.',
    ],
    href: 'https://github.com/Bobwillrule/Personal-Website',
  },
  {
    id: 'sewage-search',
    title: 'Sewage Search',
    category: 'Software',
    visual: 'game',
    description: 'Descend into a surreal sewer and search for a lost cat.',
    tags: ['Python', 'Pygame', 'Hackathon'],
    date: 'SFU Mountain Madness 2025',
    summary:
      'A 2D game created for SFU Mountain Madness 2025, where players explore a surreal sewer to rescue a lost cat.',
    details: [
      'Built as a hackathon game using Python and Pygame.',
      'Uses a sewer-themed 2D world as the setting for the search.',
      'Challenges the player to descend underground and find the missing cat.',
    ],
  },
];

// Professional facts and dates from public/documents/Hugo-Chen-Resume.pdf.
export const workExperience = [
  {
    id: 'tsmc',
    company: 'TSMC',
    title: 'Software Engineer Intern',
    date: 'July — September 2026',
    location: 'Hsinchu, Taiwan',
    summary:
      'Building AI tools that help engineers connect machine failures to the code behind them.',
    details: [
      'Built an AI assistant to analyze logs from 60,000+ semiconductor machines and correlate failures with relevant codebases for root-cause analysis.',
      'Collaborated with nine other interns on an OpenHarness-based multi-agent system with custom MCP servers, tools, skills, and retrieval pipelines.',
      'Reduced end-to-end agent execution time by 40% with a React, FastAPI, Python, and MongoDB platform that replaced the CLI-based process and agent loop.',
      'Implemented Azure DevOps CI/CD pipelines for containerized services using Docker and Kubernetes, deploying to an internal testing environment with 200 engineers in scope.',
    ],
    tags: ['React', 'FastAPI', 'Python', 'MongoDB', 'Docker', 'Kubernetes', 'Azure DevOps'],
  },
  {
    id: 'linty-constructions',
    company: 'Linty Constructions',
    title: 'Web Developer & Carpenter',
    date: 'June 2023 — October 2024',
    location: 'Vancouver, BC',
    summary:
      'Building an online presence, custom homes, and clearer communication on the job site.',
    details: [
      'Created a company website that generated three new client leads in two months.',
      'Framed four custom residential homes while adapting to fast-paced outdoor job site conditions.',
      'Acted as the English–Mandarin liaison between clients and contractors to reduce miscommunication.',
    ],
    tags: ['Web Development', 'Carpentry', 'Client Communication', 'English & Mandarin'],
  },
  {
    id: 'canadian-tire',
    company: 'Canadian Tire',
    title: 'Bike Mechanic',
    date: 'June 2022 — June 2023',
    location: 'Coquitlam, BC',
    summary: 'Solving hands-on problems and helping people find the right bike.',
    details: [
      'Maintained the store’s lowest bike rework and return rates through systematic inspection and tuning.',
      'Advised customers on bike selection and achieved the store’s top monthly bike sales.',
    ],
    tags: ['Bike Maintenance', 'Quality Assurance', 'Customer Service'],
  },
];

export const toolboxes = [
  { title: 'Languages', icon: 'code', items: ['Python', 'Java', 'C / C++', 'TypeScript', 'SQL'] },
  { title: 'Web & Backend', icon: 'globe', items: ['React', 'Next.js', 'FastAPI'] },
  {
    title: 'DevOps & Tools',
    icon: 'layers',
    items: ['Docker', 'Kubernetes', 'Git', 'Azure DevOps'],
  },
  { title: 'AI & Data', icon: 'spark', items: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { title: 'Engineering', icon: 'chip', items: ['MATLAB', 'AutoCAD', 'C / C++'] },
];
