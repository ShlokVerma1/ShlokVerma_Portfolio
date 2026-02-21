import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    n: '01', title: 'Discover', sub: 'Your vision, clearly scoped', color: '#3b82f6',
    desc: "We talk through your requirements in depth. I'll map out the architecture, define scope, and deliver a clear technical plan within 48 hours. No surprise scope creep.",
    dels: ['Requirements doc', 'Architecture plan', 'Timeline & cost estimate'],
  },
  {
    n: '02', title: 'Build', sub: 'Clean code, tested & documented', color: '#7c3aed',
    desc: "Iterative development with weekly check-ins. You get GitHub access from day one. Code is clean, tested, and documented — not just working, but maintainable.",
    dels: ['Weekly demos', 'GitHub access', 'Test coverage'],
  },
  {
    n: '03', title: 'Launch', sub: 'Ship it. Own it.', color: '#10b981',
    desc: "Deploy to production with proper CI/CD, monitoring, and full handover docs. 14-day post-launch support included. You own 100% of the code.",
    dels: ['Deployed & live', 'Full source code', '14-day support'],
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" ref={ref} style={{ padding: 'clamp(5rem,10vw,8rem) 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}><span>Working Together</span></div>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#e2e8f0' }}>
            Idea → Code → <span className="grad">Production</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: '5.2rem', left: 'calc(16.66% - 1rem)', right: 'calc(16.66% - 1rem)', height: 1, display: 'none' }} className="conn-line">
            <motion.div
              style={{ height: '100%', background: 'linear-gradient(90deg,#3b82f6,#7c3aed,#10b981)', transformOrigin: 'left' }}
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div style={{ display: 'grid', gap: '3rem' }}>
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'grid', gap: '2rem', alignItems: 'center', gridTemplateColumns: '1fr 2fr' }}
              >
                {/* Circle */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    style={{
                      width: 90, height: 90, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `radial-gradient(circle,${s.color}20,${s.color}06)`,
                      border: `1px solid ${s.color}45`,
                      boxShadow: `0 0 30px ${s.color}22`,
                    }}
                  >
                    <span style={{ fontFamily: 'JetBrains Mono,monospace', fontWeight: 700, fontSize: '1.4rem', color: s.color }}>{s.n}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: s.color, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{s.sub}</p>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#e2e8f0', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {s.dels.map(d => (
                      <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color }} />
                        <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#475569' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:1024px){
          .conn-line{display:block!important}
          #process [style*="grid-template-columns"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  )
}
