import { useEffect, useRef, useState } from 'react';
import { links, moments, projects, toolboxes } from './content.js';

const image = (name) => `./images/${name}.webp`;

function Icon({ name, size = 20, className = '' }) {
  const paths = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    northeast: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4c.1-.9.1-2.1-.5-3 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-7 0C5.4.6 4.2 1 4.2 1c-.6.9-.6 2.1-.5 3a5.5 5.5 0 0 0-1.5 4.3c0 5.4 3.5 6.6 6.8 7A3.5 3.5 0 0 0 8 18v4" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7M7 7v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l1.5 1.5m13 13L20 20M4 20l1.5-1.5m13-13L20 4" />
      </>
    ),
    moon: <path d="M20 15.2A9 9 0 0 1 8.8 4 9 9 0 1 0 20 15.2Z" />,
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3ZM21 2v4m-2-2h4" />
      </>
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
  };
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.spark}
    </svg>
  );
}

function Brand({ home = false }) {
  return (
    <a className="brand" href={home ? '#home' : './index.html'} aria-label="Hugo Chen home">
      <span className="monogram">HC</span>
      <span className="brand-divider" />
      <span>Hugo Chen</span>
    </a>
  );
}

function Navigation({ gallery }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);
  const home = (hash) => (gallery ? `./index.html${hash}` : hash);
  return (
    <header
      className={`site-header ${!gallery ? 'home-header' : ''} ${scrolled || gallery ? 'is-solid' : ''} ${open ? 'menu-open' : ''}`}
    >
      <div className="header-inner wrap">
        <Brand home={!gallery} />
        <nav
          id="primary-navigation"
          className={`nav-links ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {[
            ['Home', home('#home')],
            ['About', home('#about')],
            ['Projects', gallery ? './projects.html' : '#projects'],
            ['Experience', home('#experience')],
            ['Journal', home('#journal')],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-current={
                (gallery && label === 'Projects') || (!gallery && !scrolled && label === 'Home')
                  ? 'page'
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        {gallery ? (
          <a href={home('#contact')} className="availability">
            <span className="status-dot" />
            Let’s build something
            <span className="availability-arrow">
              <Icon name="arrow" size={17} />
            </span>
          </a>
        ) : (
          <SocialLinks />
        )}
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Icon name="linkedin" size={19} />
      </a>
      <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <Icon name="github" size={19} />
      </a>
      <a href={links.email} aria-label="Email Hugo">
        <Icon name="mail" size={20} />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="intro-hero" aria-labelledby="hero-heading">
      <div className="wrap intro-layout">
        <div className="intro-copy">
          <p className="eyebrow intro-eyebrow">
            Engineering student <span>·</span> Problem solver <span>·</span> Lifelong learner
          </p>
          <h1 id="hero-heading">
            Hi, I’m <span>Hugo Chen.</span>
          </h1>
          <p className="intro-description">
            I’m an Electrical Engineering student at the University of British Columbia with a minor
            in Computer Science. I enjoy building practical software, exploring ideas at the
            intersection of hardware, software, and AI, and turning complex problems into scalable
            solutions.
          </p>
          <div className="intro-actions">
            <a className="button button-dark" href={links.resume} target="_blank" rel="noreferrer">
              View Resume <Icon name="arrow" size={18} />
            </a>
            <a className="intro-text-link" href="#projects">
              Explore Projects
            </a>
            <a className="intro-text-link" href="#contact">
              Contact Me <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
        <div className="intro-scene">
          <img
            className="intro-illustration"
            src={image('vancouver-sketch')}
            width="1774"
            height="887"
            fetchPriority="high"
            alt="Blue-gray ink illustration of Vancouver’s waterfront, evergreen trees, and mountains"
          />
          <p className="handwritten intro-note" aria-hidden="true">
            <span>“</span>Same
            <br />
            curiosity.
            <br />A different
            <br />
            day!
          </p>
          <a className="intro-location" href="#contact">
            <Icon name="pin" size={20} />
            <div>
              <strong>Vancouver, BC</strong>
              <p>
                Mountains, ocean, and
                <br />a city full of ideas.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function ChapterHeading({ number, title, children, className = '' }) {
  return (
    <div className={`chapter-heading ${className}`}>
      <p className="eyebrow">CHAPTER {number}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function DayInLife() {
  return (
    <section id="about" className="day-section section-paper">
      <div className="wrap chapter-layout day-layout">
        <ChapterHeading
          number="1"
          title={
            <>
              A Day
              <br /> in My Life
            </>
          }
        >
          <Icon name="sun" className="day-sun" size={27} />
          <p>
            Different moments.
            <br /> Same mission — to learn,
            <br /> build, and make an impact.
          </p>
        </ChapterHeading>
        <div id="journal" className="day-story">
          <svg
            className="timeline-line"
            viewBox="0 0 1000 48"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 41C33 47 14 6 56 12S170-2 236 12 351 22 399 12 499 5 566 12 676 19 733 12 835 8 900 12 967 13 995 5" />
          </svg>
          <div className="moment-grid">
            {moments.map((moment) => (
              <article className="moment-card" key={moment.title}>
                <span className="timeline-dot" />
                <p className="moment-time">{moment.time}</p>
                <img
                  src={image(moment.image)}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt={moment.alt}
                />
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="day-aside" aria-hidden="true">
          <Icon name="moon" size={24} />
          <p className="handwritten">
            Little things.
            <br /> Bigger
            <br /> possibilities.
          </p>
          <span className="sketch-arrow">⤴</span>
        </aside>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="wrap chapter-layout experience-layout">
        <ChapterHeading
          number="2"
          title={
            <>
              Experience
              <br /> <span className="experience-accent">Real Impact.</span>
            </>
          }
        >
          <p>
            Turning complex problems
            <br /> into practical solutions at scale.
          </p>
          <p className="handwritten experience-quote">
            “Technology means more
            <br /> when it solves real problems
            <br /> for real people.”
          </p>
        </ChapterHeading>
        <div className="experience-main">
          <article className="experience-card">
            <div className="experience-card-top">
              <span className="eyebrow">JUL — SEP 2026</span>
              <Icon name="northeast" size={17} />
            </div>
            <div className="experience-content">
              <div className="tsmc-mark" aria-label="TSMC">
                <span className="wafer-grid" />
                <strong>tsmc</strong>
                <span className="tsmc-rule" />
              </div>
              <div>
                <h3>Software Engineer Intern</h3>
                <p className="company-line">
                  <strong>TSMC</strong>
                  <span>Hsinchu, Taiwan</span>
                </p>
                <p className="experience-summary">
                  Built an AI assistant to connect machine logs with relevant code and help
                  engineers get to the root of a problem. Worked across multi-agent systems,
                  full-stack development, and containerized deployment.
                </p>
              </div>
            </div>
            <div className="metrics">
              <div>
                <strong>60,000+</strong>
                <span>Machines represented in logs</span>
              </div>
              <div>
                <strong>40%</strong>
                <span>Less agent execution time</span>
              </div>
              <div>
                <strong>200</strong>
                <span>Engineers in deployment scope</span>
              </div>
            </div>
            <details className="experience-details">
              <summary>
                Behind the work <Icon name="chevron" size={14} />
              </summary>
              <div>
                <p>
                  Collaborated with nine other interns on an OpenHarness-based multi-agent system
                  with custom MCP servers, tools, skills, and retrieval pipelines.
                </p>
                <p>
                  Built with React, FastAPI, Python, and MongoDB. Deployed containerized services to
                  an internal testing environment using Azure DevOps, Docker, and Kubernetes.
                </p>
              </div>
            </details>
          </article>
          <details className="earlier-experience">
            <summary>
              Before the code: more of my story <span>+</span>
            </summary>
            <div className="earlier-grid">
              <article>
                <p className="eyebrow">2023 — 2024</p>
                <h3>Web Developer & Carpenter</h3>
                <strong>Linty Constructions · Vancouver</strong>
                <p>
                  Built a website that generated three new client leads in two months, framed four
                  custom homes, and connected clients and contractors in English and Mandarin.
                </p>
              </article>
              <article>
                <p className="eyebrow">2022 — 2023</p>
                <h3>Bike Mechanic</h3>
                <strong>Canadian Tire · Coquitlam</strong>
                <p>
                  Combined systematic inspection and tuning with customer service, achieving the
                  store’s lowest bike return rates and top monthly bike sales.
                </p>
              </article>
            </div>
          </details>
        </div>
        <aside className="experience-aside">
          <p className="handwritten" aria-hidden="true">
            Small improvements
            <br /> power a<br /> bigger world.
          </p>
          <p className="handwritten semiconductor-note">
            Semiconductors
            <br /> connect people,
            <br /> ideas, and a
            <br /> brighter tomorrow.
          </p>
        </aside>
      </div>
    </section>
  );
}

function ProjectVisual({ kind }) {
  if (kind === 'table' || kind === 'portfolio')
    return (
      <div className={`project-visual visual-${kind}`} aria-hidden="true">
        <img src={image(kind === 'table' ? 'table' : 'hero')} loading="lazy" alt="" />
        {kind === 'portfolio' && (
          <span className="mini-portfolio-title">
            Building
            <br /> a brighter tomorrow.
          </span>
        )}
      </div>
    );
  if (kind === 'calculator')
    return (
      <div className="project-visual visual-calculator" aria-hidden="true">
        <span className="unit-ornament">cm / in</span>
        <div className="phone">
          <div className="phone-speaker" />
          <div className="phone-title">Unit Calculator</div>
          <div className="phone-display">
            12cm + 5mm<span>0.125 m</span>
          </div>
          <div className="phone-keys">
            {[
              'C',
              '()',
              '%',
              '÷',
              '7',
              '8',
              '9',
              '×',
              '4',
              '5',
              '6',
              '−',
              '1',
              '2',
              '3',
              '+',
              '±',
              '0',
              '.',
              '=',
            ].map((key, i) => (
              <span key={key} className={i % 4 === 3 ? 'key-accent' : ''}>
                {key}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  if (kind === 'trader')
    return (
      <div className="project-visual visual-trader" aria-hidden="true">
        <div className="trader-panel">
          <div className="mini-label">
            <span className="tiny-dot" /> AI TRADER <span>↗</span>
          </div>
          <p>Learn. Test. Improve.</p>
          <div className="trader-row">
            Training environment <span>DQN</span>
          </div>
          <div className="trader-row">
            Policy evaluation <span>↗</span>
          </div>
          <div className="trader-row">
            Risk & performance <span>⌁</span>
          </div>
          <div className="mini-progress">
            <i />
          </div>
        </div>
      </div>
    );
  if (kind === 'finance')
    return (
      <div className="project-visual visual-finance" aria-hidden="true">
        <div className="finance-orbit">
          <Icon name="layers" size={35} />
        </div>
        <div className="finance-preview">
          <span>INCOME & EXPENSES</span>
          <div className="bar-chart">
            {[36, 57, 45, 72, 55, 85, 66, 93, 73, 90].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mini-finance-labels">
            <span>Track.</span>
            <span>Understand.</span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="project-visual visual-etf" aria-hidden="true">
      <div className="etf-dashboard">
        <div className="mini-label">
          BehindTheETF <span>EXPOSURE EXPLORER</span>
        </div>
        <div className="etf-caption">
          A clearer view.<span>Every layer.</span>
        </div>
        <div className="chart-grid">
          <svg viewBox="0 0 260 75" preserveAspectRatio="none">
            <path
              className="chart-area"
              d="M0 64 15 56 26 61 42 42 58 49 68 31 81 39 96 24 111 34 126 15 139 30 157 24 175 35 186 22 200 15 215 27 235 8 249 13 260 0V75H0Z"
            />
            <path d="M0 64 15 56 26 61 42 42 58 49 68 31 81 39 96 24 111 34 126 15 139 30 157 24 175 35 186 22 200 15 215 27 235 8 249 13 260 0" />
          </svg>
        </div>
        <div className="etf-bottom">
          <span>Holdings</span>
          <span>Sectors</span>
          <span>Overlap</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <button
        className="project-open"
        onClick={() => onSelect(project)}
        aria-label={`View ${project.title} project details`}
      >
        <ProjectVisual kind={project.visual} />
        <span className="project-arrow">
          <Icon name="northeast" size={15} />
        </span>
        <div className="project-card-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
}

function FeaturedProjects({ onSelect }) {
  return (
    <section id="projects" className="projects-section section-paper">
      <div className="wrap chapter-layout projects-layout">
        <ChapterHeading
          number="3"
          title={
            <>
              Featured
              <br /> Projects
            </>
          }
        >
          <p>
            Ideas that blend software,
            <br /> hardware, and real-world impact.
          </p>
          <a href="./projects.html" className="button button-outline">
            View All Projects <Icon name="arrow" size={16} />
          </a>
        </ChapterHeading>
        <div className="featured-grid">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="wrap chapter-layout skills-layout">
        <ChapterHeading
          number="4"
          title={
            <>
              Skills &<br /> Education
            </>
          }
        >
          <p>
            A strong foundation.
            <br /> A curious mindset.
            <br /> A long way to go.
          </p>
        </ChapterHeading>
        <div className="toolbox">
          <h3 className="serif-subtitle">My Toolbox</h3>
          <div className="toolbox-grid">
            {toolboxes.map((group) => (
              <article className="tool-card" key={group.title}>
                <h4>
                  <Icon name={group.icon} size={14} />
                  {group.title}
                </h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="education">
          <h3 className="serif-subtitle">Education</h3>
          <div className="education-content">
            <div className="ubc-badge" aria-hidden="true">
              <strong>UBC</strong>
              <span>
                〰<br /> 〰<br /> 〰
              </span>
            </div>
            <div>
              <h4>The University of British Columbia</h4>
              <p>
                B.A.Sc. Electrical Engineering
                <br /> Minor in Computer Science
              </p>
              <p className="education-dates">
                2025 — 2029 <span>(Expected)</span>
              </p>
              <p className="education-honors">89% GPA · Dean’s List</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ gallery }) {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="wrap contact-layout">
          <ChapterHeading
            number="5"
            title={
              <>
                Let’s Build
                <br /> What’s Next.
              </>
            }
          />
          <p className="contact-intro">
            Whether it’s an opportunity, a project idea,
            <br className="desktop-break" /> or just a great conversation, I’d love to hear from
            you.
          </p>
          <div className="contact-links">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={28} />
              <span>
                Connect on<strong>LinkedIn</strong>
              </span>
              <Icon name="northeast" className="contact-arrow" size={14} />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={28} />
              <span>
                Check out my<strong>GitHub</strong>
              </span>
              <Icon name="northeast" className="contact-arrow" size={14} />
            </a>
            <a href={links.email}>
              <Icon name="mail" size={28} />
              <span>
                Send me an<strong>Email</strong>
              </span>
              <Icon name="northeast" className="contact-arrow" size={14} />
            </a>
          </div>
          <p className="handwritten contact-note" aria-hidden="true">
            Same person.
            <br /> Bigger things ahead.
          </p>
        </div>
      </section>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <Brand home={!gallery} />
          <p>
            Electrical Engineering at UBC<span>·</span>Minor in Computer Science<span>·</span>
            Vancouver, BC
          </p>
          <a href={gallery ? './index.html#home' : '#home'}>
            Build · Learn · Grow · Make an Impact <Icon name="arrow" size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    const handleBackdrop = (event) => {
      if (event.target === element) element.close();
    };
    const keepFocusInDialog = (event) => {
      if (event.key !== 'Tab') return;
      const focusable = [...element.querySelectorAll('button, a[href]')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    element.addEventListener('click', handleBackdrop);
    element.addEventListener('keydown', keepFocusInDialog);
    return () => {
      element.removeEventListener('click', handleBackdrop);
      element.removeEventListener('keydown', keepFocusInDialog);
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  return (
    <dialog
      className="project-dialog"
      ref={dialog}
      onClose={onClose}
      aria-labelledby="dialog-title"
    >
      {project && (
        <div className="dialog-content">
          <button
            className="dialog-close"
            onClick={() => dialog.current.close()}
            aria-label="Close project details"
          >
            <Icon name="close" />
          </button>
          <ProjectVisual kind={project.visual} />
          <div className="dialog-body">
            <p className="eyebrow">
              {project.category} <span> / </span> {project.date}
            </p>
            <h2 id="dialog-title">{project.title}</h2>
            <p className="dialog-summary">{project.summary}</p>
            <h3>Inside the project</h3>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="button button-dark" href={project.href} target="_blank" rel="noreferrer">
              {project.linkLabel || 'Explore on GitHub'}
              <Icon name="northeast" size={16} />
            </a>
            {['etf', 'trader', 'calculator', 'finance'].includes(project.visual) && (
              <p className="visual-caption">Cover illustration inspired by the project.</p>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

function ProjectGallery({ onSelect }) {
  const [filter, setFilter] = useState('All projects');
  const categories = ['All projects', 'AI & Data', 'Web & Data', 'Software', 'Engineering'];
  const filtered =
    filter === 'All projects'
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <section className="gallery-section wrap">
      <a href="./index.html#projects" className="back-link">
        <Icon name="arrow" size={16} /> Back to my story
      </a>
      <p className="eyebrow">THE WORK, AND THE WHAT-IFS</p>
      <div className="gallery-heading">
        <h1>
          A few things
          <br /> I’ve <em>built.</em>
        </h1>
        <p>
          Some started with a question.
          <br /> Others with a problem that needed solving.
          <br /> All of them taught me something.
        </p>
        <span className="handwritten" aria-hidden="true">
          Always a work
          <br /> in progress. ↗
        </span>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length} projects shown
      </p>
      <div className="gallery-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const gallery = window.location.pathname.endsWith('/projects.html');
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation gallery={gallery} />
      <main id="main-content">
        {gallery ? (
          <ProjectGallery onSelect={setSelectedProject} />
        ) : (
          <>
            <Hero />
            <DayInLife />
            <Experience />
            <FeaturedProjects onSelect={setSelectedProject} />
            <Skills />
          </>
        )}
      </main>
      <Contact gallery={gallery} />
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
