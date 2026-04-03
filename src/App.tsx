import './App.css'
import { TimelineSection } from './components/TimelineSection'
import { Contact2 } from './components/ui/contact-2'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedShapes } from './components/AnimatedShapes'
import { ProjectsSection } from './components/ProjectsSection'
import { LearningsSection } from './components/LearningsSection'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
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

          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
            <img 
              src="/vk-image.png" 
              alt="Vinoth Kumar" 
              className="hero-image"
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
    </div>
  )
}

export default App
