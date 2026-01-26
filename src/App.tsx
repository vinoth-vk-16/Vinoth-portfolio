import './App.css'
import { TimelineSection } from './components/TimelineSection'
import { Contact2 } from './components/ui/contact-2'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AnimatedShapes } from './components/AnimatedShapes'
import { ProjectsSection } from './components/ProjectsSection'

function App() {
  const [displayText, setDisplayText] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const fullText = 'Hello'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">✦</div>
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Me</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
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
            <h1 className="hero-heading">
              {displayText}
              <span className="cursor">|</span>
              <span>...</span>
            </h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              — It's Vinoth, an AI Architect
            </motion.p>
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

        <div className="scroll-hint">
          Scroll down ↓
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section section" style={{ position: 'relative' }}>
        <div className="animated-shapes-wrapper">
          <AnimatedShapes />
        </div>
        <div className="about-container-full">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <p className="about-intro">
              I'm an AI/ML Engineer specializing in production-grade automation workflows and GenAI applications. 
              I bring hands-on experience in deploying scalable LLM-driven systems, optimizing engineering pipelines, 
              and building developer tools that deliver measurable impact across internal and customer-facing products.
            </p>
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

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact2 
          title="Get in Touch"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
          phone="+91 6380091722"
          email="imvinothvk521@gmail.com"
          linkedin="https://www.linkedin.com/in/vinothkumar-a-6b8b3b1b9/"
        />
      </section>
    </div>
  )
}

export default App
