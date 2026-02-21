import { useEffect } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import SaaSSection from './sections/SaaSSection'
import ProcessSection from './sections/ProcessSection'
import ContactSection from './sections/ContactSection'
import { useReveal } from './hooks/useReveal'

function Divider() {
  return <div className="divider" style={{ margin: '0 auto' }} />
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid rgba(59,130,246,.08)',
      padding: '2rem 2rem',
      display: 'flex', flexWrap: 'wrap', gap: '1rem',
      alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
        <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1rem' }}>
          <span className="grad">Shlok</span>
        </span>
        <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.7rem', color: 'rgba(255,255,255,.2)' }}>
          .dev
        </span>
      </div>

      <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.6rem', color: '#1e2d45' }}>
        © {year} Shlok Verma · Built with React · Three.js · Framer Motion · GSAP
      </p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { l: 'GitHub', h: 'https://github.com/ShlokVerma1' },
          { l: 'LinkedIn', h: 'https://linkedin.com/in/shlok-verma-2a9693179' },
          { l: 'Email', h: 'mailto:vermaslok.k@gmail.com' },
          { l: 'WhatsApp', h: 'https://wa.me/916200773310' },
        ].map(s => (
          <a key={s.l} href={s.h} target={s.h.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: 'JetBrains Mono,monospace', fontSize: '.6rem',
              color: '#1e2d45', textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '.18em',
              transition: 'color .2s',
            }}
            onMouseEnter={e => e.target.style.color = '#3b82f6'}
            onMouseLeave={e => e.target.style.color = '#1e2d45'}
          >{s.l}</a>
        ))}
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()

  // Re-run reveal on route-like DOM changes (SPA)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#03070f', overflowX: 'hidden' }}>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SaaSSection />
        <Divider />
        <ProcessSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
