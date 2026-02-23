import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  { y:'2020', t:'Started B.Tech CS', s:'Galgotias University · Greater Noida', c:'#3b82f6', i:'🎓' },
  { y:'2021', t:'Web Dev Internship', s:'Vicube Technologies · Delhi · HTML/CSS/JS', c:'#7c3aed', i:'💻' },
  { y:'2022', t:'AI/ML Internship @ AICTE', s:'TensorFlow · NLP · Supervised & Unsupervised Learning', c:'#06b6d4', i:'🤖' },
  { y:'2023', t:'NEAT AI Project + IIT', s:'Techfest IIT Bombay · Line Bot IIT Delhi', c:'#10b981', i:'🧠' },
  { y:'2024', t:'Graduated B.Tech', s:'StressFlix full-stack launch · Freelancing begins', c:'#f59e0b', i:'🚀' },
  { y:'2025', t:'JWT SaaS + IFERP Win', s:'AI Challenge Winner @ IFERP LJ University', c:'#ec4899', i:'🏆' },
]

const certs = [
  { t:'C Programming Fundamentals', i:'UC Santa Cruz', c:'#3b82f6' },
  { t:'Cloud Foundations', i:'AWS Academy', c:'#f59e0b' },
  { t:'Machine Learning Foundations', i:'AWS Academy', c:'#10b981' },
  { t:'Database Design & SQL', i:'Oracle Academy', c:'#ef4444' },
]

const stg = (d=.1) => ({ hidden:{}, visible:{ transition:{ staggerChildren:d, delayChildren:.05 } } })
const it = { hidden:{ opacity:0, y:24 }, visible:{ opacity:1, y:0, transition:{ duration:.55, ease:[.22,1,.36,1] } } }

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const [hovTl, setHovTl] = useState(null)

  return (
    <section id="about" ref={ref} style={{ position:'relative', padding:'clamp(5rem,10vw,8rem) 0', overflow:'hidden' }}>
      {/* Animated background */}
      <div className="anim-float1" style={{ position:'absolute', right:0, top:'20%',
        width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle,rgba(124,58,237,.07),transparent 70%)', filter:'blur(80px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', left:'5%', bottom:'10%',
        width:300, height:300, borderRadius:'50%',
        background:'radial-gradient(circle,rgba(6,182,212,.05),transparent 70%)', filter:'blur(60px)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 1.5rem' }}>
        <div style={{ display:'grid', gap:'4rem', gridTemplateColumns:'1fr', alignItems:'start' }}>

          {/* LEFT - Story */}
          <motion.div variants={stg()} initial="hidden" animate={inView?'visible':'hidden'}>
            <motion.div variants={it}>
              <div className="lbl" style={{ marginBottom:'1.25rem' }}><span>About Me</span></div>
            </motion.div>
            <motion.h2 variants={it} style={{ fontFamily:'Syne,sans-serif', fontWeight:800,
              fontSize:'clamp(1.8rem,4vw,2.8rem)', lineHeight:1.15, color:'#e2e8f0', marginBottom:'1.25rem' }}>
<<<<<<< HEAD
              CS grad turning passion into{' '}<span className="grad">real products</span>
            </motion.h2>
            <motion.p variants={it} style={{ color:'#64748b', fontSize:'1rem', lineHeight:1.8, marginBottom:'1rem' }}>
              I'm Shlok — a CS engineer from Delhi with a B.Tech from Galgotias University (2024). 
              I specialize in Python/Flask backends, AI model integration, and full-stack web apps. 
              Instead of jumping into a 9-to-5 after graduation, I chose to freelance and build my own products — 
              funding my goal to study abroad.
            </motion.p>
            <motion.p variants={it} style={{ color:'#64748b', fontSize:'1rem', lineHeight:1.8, marginBottom:'1.75rem' }}>
              I've shipped a Netflix-style full-stack app (StressFlix), a JWT SaaS auth server, 
              an NEAT-powered AI game agent, and multiple frontend tools — all live, all real. 
              I've competed at IIT Bombay Techfest, won an AI challenge at IFERP LJ University, 
              and hold 4 industry certifications from AWS, Oracle, and UC Santa Cruz.
=======
              Engineer by degree. Builder by {' '}<span className="grad">obsession.</span>
            </motion.h2>
            <motion.p variants={it} style={{ color:'#64748b', fontSize:'1rem', lineHeight:1.8, marginBottom:'1rem' }}>
              I'm Shlok Verma — a CS engineer from Delhi with a B.Tech from Galgotias University (2024). I specialize in Python/Flask backends, AI model integration, and full-stack web development.
            </motion.p>
            <motion.p variants={it} style={{ color:'#64748b', fontSize:'1rem', lineHeight:1.8, marginBottom:'1.75rem' }}>
              I've shipped a Netflix-style full-stack app (StressFlix), a JWT SaaS auth server, a NEAT-powered AI game agent, and multiple frontend tools. I've competed at IIT Bombay Techfest, won an AI challenge at IFERP LJ University, and hold 4 industry certifications from AWS, Oracle, and UC Santa Cruz.
>>>>>>> 4bd079e (revised version)
            </motion.p>

            {/* Tags */}
            <motion.div variants={it} style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', marginBottom:'2rem' }}>
              {['Python','Flask','JWT','TensorFlow','NEAT/RL','AWS','SQL','HTML/CSS','Git','Arduino'].map(t=>(
                <span key={t} style={{ padding:'.28rem .8rem', borderRadius:'999px',
                  border:'1px solid rgba(59,130,246,.2)', color:'#93c5fd',
                  fontFamily:'JetBrains Mono,monospace', fontSize:'.66rem' }}>{t}</span>
              ))}
            </motion.div>

            {/* Certs */}
            <motion.div variants={it}>
              <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem', color:'#475569',
                textTransform:'uppercase', letterSpacing:'.18em', marginBottom:'1rem' }}>
                — Certifications
              </p>
              <div style={{ display:'grid', gap:'.6rem', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))' }}>
                {certs.map(c=>(
                  <div key={c.t} style={{ display:'flex', alignItems:'center', gap:'.6rem',
                    padding:'.6rem .9rem', borderRadius:'.75rem',
                    background:`${c.c}10`, border:`1px solid ${c.c}25`, transition:'transform .2s' }}
                    onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
                  >
                    <div style={{ width:6, height:6, borderRadius:'50%', background:c.c, flexShrink:0 }}/>
                    <div>
                      <p style={{ color:'#cbd5e1', fontSize:'.78rem', fontWeight:500 }}>{c.t}</p>
                      <p style={{ color:c.c, fontSize:'.62rem', fontFamily:'JetBrains Mono,monospace' }}>{c.i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - Timeline */}
          <motion.div variants={stg(.08)} initial="hidden" animate={inView?'visible':'hidden'}>
            <motion.p variants={it} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem',
              color:'#3b82f6', textTransform:'uppercase', letterSpacing:'.2em', marginBottom:'1.75rem' }}>
              — My Journey
            </motion.p>
            <div style={{ position:'relative', paddingLeft:'2rem' }}>
              {/* Animated line */}
              <motion.div
                initial={{ scaleY:0, transformOrigin:'top' }}
                animate={inView?{ scaleY:1 }:{}}
                transition={{ duration:1.5, delay:.3, ease:[.22,1,.36,1] }}
                style={{ position:'absolute', left:0, top:0, bottom:0, width:1,
                  background:'linear-gradient(to bottom,#3b82f6,#7c3aed,#06b6d4,transparent)' }}/>

              {timeline.map((t, i) => (
                <motion.div key={t.y} variants={it}
                  style={{ position:'relative', marginBottom:'1.5rem',
                    display:'flex', gap:'1rem', alignItems:'flex-start' }}
                  onMouseEnter={() => setHovTl(i)} onMouseLeave={() => setHovTl(null)}
                >
                  {/* Dot */}
                  <motion.div
                    animate={hovTl===i?{ scale:1.4 }:{ scale:1 }}
                    transition={{ type:'spring', stiffness:300 }}
                    style={{ position:'absolute', left:'-2.4rem',
                      width:10, height:10, borderRadius:'50%', background:t.c, top:'.35rem',
                      boxShadow:`0 0 14px ${t.c}`, flexShrink:0 }}/>

                  <motion.div
                    animate={hovTl===i?{ x:8, borderColor:`${t.c}60` }:{ x:0, borderColor:`${t.c}20` }}
                    transition={{ duration:.2 }}
                    style={{ background:'rgba(10,22,40,.65)', backdropFilter:'blur(12px)',
                      border:`1px solid ${t.c}20`, borderRadius:'.75rem',
                      padding:'.8rem 1rem', flex:1 }}
                  >
                    <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.15rem' }}>
                      <span>{t.i}</span>
                      <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.6rem', color:t.c }}>{t.y}</span>
                      <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'.88rem', color:'#e2e8f0' }}>{t.t}</span>
                    </div>
                    <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem', color:'#475569', marginLeft:'1.5rem' }}>{t.s}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`@media(min-width:1024px){#about [style*="grid-template-columns"]{grid-template-columns:1fr 1fr!important}}`}</style>
    </section>
  )
}
