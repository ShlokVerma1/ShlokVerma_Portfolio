import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const skills = [
  { n:'Python',   ic:'🐍', lv:90, c:'#3b82f6', d:'Primary backend & AI language. Flask APIs, NEAT algorithms, automation bots, data pipelines.', tags:['Flask','NEAT','Pandas','Selenium'] },
  { n:'Flask',    ic:'⚗️', lv:88, c:'#7c3aed', d:'Built production REST APIs, JWT auth servers, CRUD apps, and full-stack backend systems.', tags:['REST API','JWT','SQLAlchemy','Blueprints'] },
  { n:'JWT/Auth', ic:'🔐', lv:92, c:'#06b6d4', d:'Full JWT lifecycle: generation, rotation, RBAC, protected routes, bcrypt hashing.', tags:['RBAC','bcrypt','OAuth2','Tokens'] },
  { n:'TensorFlow',ic:'🧠',lv:78, c:'#10b981', d:'NLP models, supervised/unsupervised learning, data preprocessing at AICTE internship.', tags:['Keras','NLP','Model Deploy','Data Prep'] },
  { n:'NEAT/RL',  ic:'🎮', lv:82, c:'#f59e0b', d:'NeuroEvolution AI agents with self-play RL. 70% performance boost over 50 generations.', tags:['NeuroEvolution','Self-Play','Game AI','Genetics'] },
  { n:'HTML/CSS', ic:'🎨', lv:85, c:'#ec4899', d:'Responsive UIs, StressFlix frontend, memory games, forex dashboards, decision tools.', tags:['Responsive','CSS Grid','Flexbox','Animations'] },
  { n:'SQL/DB',   ic:'🗄️', lv:80, c:'#a78bfa', d:'Oracle-certified. Schema design, complex queries, MySQL & SQLite for backend persistence.', tags:['MySQL','SQLite','Schema','Joins'] },
  { n:'AWS',      ic:'☁️', lv:72, c:'#f97316', d:'AWS Academy certified. EC2, S3, IAM, Lambda basics. Cloud Foundations certified.', tags:['EC2','S3','IAM','Lambda'] },
  { n:'Git/GitHub',ic:'🌿',lv:88, c:'#34d399', d:'17 public repos. Version control, branching, PRs. Pull Shark achievement on GitHub.', tags:['GitHub','17 Repos','PRs','Open Source'] },
  { n:'Java/C++', ic:'⚙️', lv:76, c:'#60a5fa', d:'DSA foundations, Line Following Robot (C++), OOP concepts, algorithmic problem solving.', tags:['DSA','OOP','Algorithms','Arduino'] },
]

function SkillCard({ s, i }) {
  const [exp, setExp] = useState(false)
  const [rot, setRot] = useState({ x:0, y:0 })

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    setRot({ x:((e.clientY-r.top)/r.height-.5)*-14, y:((e.clientX-r.left)/r.width-.5)*14 })
  }

  return (
    <motion.div
      initial={{ opacity:0, y:30, scale:.95 }}
      whileInView={{ opacity:1, y:0, scale:1 }}
      viewport={{ once:true, margin:'-40px' }}
      transition={{ duration:.55, delay:i*.05, ease:[.22,1,.36,1] }}
      style={{ perspective:800, cursor:'pointer' }}
      onMouseMove={onMove} onMouseLeave={()=>setRot({x:0,y:0})}
      onClick={()=>setExp(!exp)}
    >
      <div style={{
        background:'rgba(10,22,40,.7)', backdropFilter:'blur(16px)',
        border:`1px solid ${exp?s.c+'55':'rgba(59,130,246,.1)'}`,
        borderRadius:'1rem', padding:'1.25rem',
        transform:`perspective(800px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
        transformStyle:'preserve-3d', transition:'transform .15s ease, border-color .2s, box-shadow .2s',
        boxShadow:exp?`0 0 30px ${s.c}22,0 8px 40px rgba(0,0,0,.4)`:'0 2px 20px rgba(0,0,0,.3)',
        position:'relative', overflow:'hidden',
      }}>
        {/* Shine overlay */}
        <div style={{ position:'absolute', inset:0, borderRadius:'1rem', pointerEvents:'none',
          background:`linear-gradient(135deg,${s.c}08,transparent 50%)`,
          transform:'translateZ(2px)' }}/>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'.7rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
            <span style={{ fontSize:'1.35rem' }}>{s.ic}</span>
            <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'.92rem', color:'#e2e8f0' }}>{s.n}</span>
          </div>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem', color:s.c }}>{s.lv}%</span>
        </div>

        {/* Animated bar */}
        <div style={{ height:3, background:'rgba(255,255,255,.05)', borderRadius:99, overflow:'hidden', marginBottom:'.8rem' }}>
          <motion.div
            style={{ height:'100%', borderRadius:99, background:`linear-gradient(90deg,${s.c},${s.c}60)` }}
            initial={{ width:0 }}
            whileInView={{ width:`${s.lv}%` }}
            viewport={{ once:true }}
            transition={{ duration:1.2, ease:[.22,1,.36,1], delay:.1+i*.03 }}
          />
        </div>

        <AnimatePresence initial={false}>
          {exp ? (
            <motion.div key="exp"
              initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }}
              exit={{ opacity:0, height:0 }} transition={{ duration:.28 }}
            >
              <p style={{ color:'#64748b', fontSize:'.75rem', lineHeight:1.65, marginBottom:'.7rem' }}>{s.d}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem' }}>
                {s.tags.map(t=>(
                  <span key={t} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.58rem',
                    padding:'.18rem .5rem', borderRadius:'4px',
                    background:`${s.c}18`, color:s.c }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.p key="h" exit={{opacity:0}}
              style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.58rem', color:'#334155' }}>
              tap to expand →
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="skills" ref={ref} style={{ position:'relative', padding:'clamp(5rem,10vw,8rem) 0' }}>
      <div className="anim-float0" style={{ position:'absolute', left:0, top:'40%',
        width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle,rgba(59,130,246,.07),transparent 70%)', filter:'blur(80px)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 1.5rem' }}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6}} style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <div className="lbl" style={{justifyContent:'center',marginBottom:'.75rem'}}><span>Skills & Stack</span></div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#e2e8f0'}}>
            Everything I <span className="grad">actually use</span>
          </h2>
          <p style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.68rem',color:'#334155',marginTop:'.5rem'}}>
            Hover · tilt · tap each card to expand
          </p>
        </motion.div>

        <div style={{ display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))' }}>
          {skills.map((s,i) => <SkillCard key={s.n} s={s} i={i}/>)}
        </div>
      </div>
    </section>
  )
}
