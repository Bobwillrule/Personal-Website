export const links = {
  github: 'https://github.com/Bobwillrule',
  linkedin: 'https://www.linkedin.com/in/hugochen07/',
  email: 'mailto:hugohqchen@gmail.com',
  resume: './documents/Hugo-Chen-Resume.pdf',
};

// Editorial themes, not a claim of a fixed daily schedule.
export const moments = [
  {
    time: 'Morning',
    title: 'Coffee & Curiosity',
    description: 'A little space to think. A new question to explore.',
    image: 'coffee',
    alt: 'Coffee and a notebook in warm morning light',
  },
  {
    time: 'On campus',
    title: 'Classes & Labs',
    description: 'Electrical engineering, CS, and hands-on learning at UBC.',
    image: 'campus',
    alt: 'A tree-lined building on the UBC campus',
  },
  {
    time: 'In the zone',
    title: 'Building Projects',
    description: 'Turning a what-if into something that works.',
    image: 'workspace',
    alt: 'A laptop and notebook on a sunlit desk',
  },
  {
    time: 'Better together',
    title: 'Team Collaboration',
    description: 'Sharing ideas. Working through the hard parts together.',
    image: 'collaboration',
    alt: 'Illustrative scene of students collaborating around a laptop',
  },
  {
    time: 'A little perspective',
    title: 'Beyond the Screen',
    description: 'A reminder that there’s a bigger world outside the code.',
    image: 'mountains',
    alt: 'Mountains and a gondola above the trees at Whistler',
  },
  {
    time: 'After hours',
    title: 'Make Something',
    description: 'From a few lines of code to a table built from scratch.',
    image: 'table',
    alt: 'CAD model of a custom sliding coffee table',
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
