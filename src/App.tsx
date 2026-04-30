import './App.css'
import { TimelineSection } from './components/TimelineSection'
import { Contact2 } from './components/ui/contact-2'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { AnimatedShapes } from './components/AnimatedShapes'
import { ProjectsSection } from './components/ProjectsSection'
import { LearningsSection } from './components/LearningsSection'
import { NasaGallery } from './components/NasaGallery'
import StaggeredMenu from './components/StaggeredMenu'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)
  const heroImgRef = useRef<HTMLImageElement>(null)

  // If the image is already cached the `onLoad` event won't fire — handle that.
  const handleHeroImageRef = (el: HTMLImageElement | null) => {
    (heroImgRef as React.MutableRefObject<HTMLImageElement | null>).current = el
    if (el?.complete) setHeroImageLoaded(true)
  }

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#hero' },
    { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
    { label: 'Learnings', ariaLabel: 'View my learnings', link: '#learnings' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/vinoth-kumar-793043250' },
    { label: 'GitHub', link: 'https://github.com/vinoth-vk-16' },
    { label: 'Email', link: 'mailto:imvinothvk521@gmail.com' }
  ];

  return (
    <div className="app">
      {/* Original Navigation for Mobile */}
      <nav className="nav mobile-only-nav">
        <div className="logo">✦</div>
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#learnings" onClick={() => setMobileMenuOpen(false)}>Learnings</a></li>
        </ul>
        <a href="#contact" className="book-call desktop-only">Get in Touch ↗</a>
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* StaggeredMenu Navigation for Desktop */}
      <div className="desktop-only-nav">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#2a2a2a', '#4a4a4a']}
          logoUrl="/logo.svg"
          accentColor="#6b6b6b"
          isFixed={true}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="hero-container">
          <div className="hero-content">
            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              I build software products, orchestrate autonomous agents, and ship AI workflows people actually use.
            </motion.h1>
            <motion.p
              className="hero-byline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
            >
              <span className="hero-name">Vinoth Kumar</span>
              <span className="hero-byline-sep"> · </span>
              <span>AI/ML Engineer</span>
            </motion.p>
            <motion.div
              className="hero-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: 'easeOut' }}
            >
              <p>
                Most of what I build revolves around autonomous agents and products where the AI workflow is the
                product—not slide decks, but systems teams actually depend on. I build resilient backends, integrations
                that hold up under load, and ML where it removes repetition or solves classification problems worth
                automating. Python on AWS is a frequent baseline for me, but I reach for whatever stack fits the
                constraints.
              </p>
              <p>
                I gravitate toward high-stakes, high-scale backend work: the kind where latency, failure modes, and cost
                matter as much as model choice.
              </p>
              <p>
                Outside of building, I&apos;m usually at AI events and hackathons—partly to push my craft, partly to
                meet people who want to collaborate on serious AI products.
              </p>
            </motion.div>
          </div>

          <div
            className="hero-image-container"
            style={{
              opacity: heroImageLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          >
            <div className="hero-image-bg"></div>
            <img
              ref={handleHeroImageRef}
              src="/vk-image.png"
              alt="Vinoth Kumar"
              className="hero-image"
              fetchPriority="high"
              onLoad={() => setHeroImageLoaded(true)}
            />
          </div>
        </div>

        <a
          href="#experience"
          className="scroll-hint"
          aria-label="Scroll to experience"
        >
          <svg
            className="scroll-hint-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* Experience (timeline) */}
      <section id="experience" className="about-section section" style={{ position: 'relative' }}>
        <div className="animated-shapes-wrapper">
          <AnimatedShapes />
        </div>
        <div className="about-container-full">
          <div className="about-header">
            <h2 className="section-title">Experience</h2>
          </div>

          {/* Half hexagon left of timeline */}
          <div className="hexagon-half hexagon-timeline-left"></div>
          
          {/* Half hexagon right of timeline */}
          <div className="hexagon-half hexagon-timeline-right"></div>

          {/* Animated Timeline Component */}
          <TimelineSection />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Learnings Section */}
      <LearningsSection />

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact2 
          title="Get in Touch"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
          phone="+91 6380091722"
          email="imvinothvk521@gmail.com"
          linkedin="https://www.linkedin.com/in/vinoth-kumar-793043250"
        />
      </section>

      {/* NASA Gallery Section */}
      <NasaGallery />
    </div>
  )
}

export default App
