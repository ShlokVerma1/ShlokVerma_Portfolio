import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const GITHUB = 'https://github.com/ShlokVerma1'

const projects = [
  {
    title: 'StressFlix',
    subtitle: 'Full-Stack Web App · 2024 – Present',
    desc: 'My biggest project — a Netflix-style full-stack platform for stress-relief content. Features user authentication, content browsing, responsive UI, and a Python/Flask backend deployed on Render.',
    highlights: ['Full-Stack (Flask + Frontend)', 'User auth & sessions', 'Netflix-style UI/UX', 'Live on Render'],
    tech: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'Render'],
    color: '#ec4899',
    status: '🟢 Live',
    tag: 'Flagship Project',
    live: 'https://stressflix.onrender.com/',
    github: `${GITHUB}/Project_Yard`,
    emoji: '🎬',
  },
  {
    title: 'JWT Authentication Server',
    subtitle: 'Flask SaaS Product · Jan 2025 – Present',
    desc: 'Production-ready JWT auth server with login, registration, RBAC, token refresh, expiration, and bcrypt hashing. Designed as a drop-in backend auth solution for any app or microservice.',
    highlights: ['Token rotation & RBAC', 'Protected routes', 'bcrypt hashing', 'REST API ready'],
    tech: ['Python', 'Flask', 'JWT', 'PostgreSQL', 'bcrypt'],
    color: '#3b82f6',
    status: '🟢 Live',
    tag: 'SaaS Product',
    live: '#saas',
    github: `${GITHUB}/JWT-Authentication-Server-using-Flask`,
    emoji: '🔐',
  },
  {
    title: 'StackMemory',
    subtitle: 'Frontend Game · Fun Project',
    desc: 'An interactive memory card game built for developers — match tech stack logos and programming language icons. Built with pure HTML/CSS/JS. Great UI, smooth animations, hosted on Netlify.',
    highlights: ['Memory game mechanics', 'Developer-themed cards', 'Pure HTML/CSS/JS', 'Smooth animations'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: '#7c3aed',
    status: '🟢 Live',
    tag: 'Frontend Fun',
    live: 'https://stackmemory.netlify.app/',
    github: GITHUB,
    emoji: '🃏',
  },
  {
    title: 'NovaExchangeFX',
    subtitle: 'Forex & Currency Tool · Frontend Project',
    desc: 'A sleek currency exchange rate dashboard with live FX data, currency conversion, and a clean financial UI. Built as a frontend project showcasing real-world API integration.',
    highlights: ['Live forex rates', 'Currency converter', 'Clean financial UI', 'API integration'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Exchange API'],
    color: '#06b6d4',
    status: '🟢 Live',
    tag: 'Frontend Project',
    live: 'https://novaexchangefx.netlify.app/',
    github: GITHUB,
    emoji: '💱',
  },
  {
    title: 'RandomDecisions',
    subtitle: 'Decision Tool · Frontend Fun',
    desc: 'Can\'t make up your mind? RandomDecisions is a fun, animated decision-making tool — spin the wheel, get a random pick, or use mode-based selection. Clean UI and satisfying animations.',
    highlights: ['Spin wheel mechanic', 'Animated UI', 'Multiple input modes', 'Instant results'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: '#f59e0b',
    status: '🟢 Live',
    tag: 'Frontend Fun',
    live: 'https://randomdecisions.netlify.app/',
    github: GITHUB,
    emoji: '🎯',
  },
  {
    title: 'NEAT AI Game Agent',
    subtitle: 'Reinforcement Learning · Nov 2023 – Mar 2024',
    desc: 'AI-powered Pong using NeuroEvolution of Augmenting Topologies with self-play RL. Achieved 70% performance boost over 50 generations. Increased engagement by 30%. Showcased at IIT Techfest.',
    highlights: ['70% perf improvement', '30% engagement boost', '50 training generations', 'IIT Techfest quality'],
    tech: ['Python', 'NEAT-Python', 'Reinforcement Learning', 'PyGame'],
    color: '#10b981',
    status: '✅ Complete',
    tag: 'AI Project',
    live: null,
    github: `${GITHUB}/AI-Powered-Game-Training-Reinforcement-Learning-with-NEAT-Algorithm`,
    emoji: '🧠',
  },
  {
    title: 'Cookie Clicker AI Bot',
    subtitle: 'Game Automation · IFERP Winner',
    desc: 'AI automation bot using greedy algorithms to optimize game decisions in real-time by ROI. Reduced manual clicks by 95% across 20+ sessions. Won AI Challenge at IFERP LJ University.',
    highlights: ['95% click reduction', 'Greedy ROI algorithm', '20+ sessions tested', '🏆 IFERP Winner'],
    tech: ['Python', 'Selenium', 'Greedy Algorithm', 'Automation'],
    color: '#f43f5e',
    status: '🏆 Award Winner',
    tag: 'AI Automation',
    live: null,
    github: `${GITHUB}/Automated-Cookie-Clicker-AI-Bot-Gameplay-Optimization`,
    emoji: '🤖',
  },
  {
    title: 'Line Following Robot',
    subtitle: 'Robotics · IIT Delhi Competition',
    desc: 'Autonomous line-following robot built in C++ with Arduino. Competed at IIT Delhi robotics competition. Sensor fusion, real-time motor control, and PID algorithm for smooth path tracking.',
    highlights: ['IIT Delhi competition', 'Arduino + C++', 'PID controller', 'Sensor fusion'],
    tech: ['C++', 'Arduino', 'Embedded', 'PID Control'],
    color: '#a78bfa',
    status: '🏁 Competition',
    tag: 'Robotics',
    live: null,
    github: `${GITHUB}/LIne-Following-Robot`,
    emoji: '🤖',
  },
]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x,{stiffness:180,damping:22})
  const sy = useSpring(y,{stiffness:180,damping:22})
  const rotX = useTransform(sy,[-.5,.5],['10deg','-10deg'])
  const rotY = useTransform(sx,[-.5,.5],['-10deg','10deg'])
  const glowX = useTransform(sx,[-.5,.5],['0%','100%'])
  const glowY = useTransform(sy,[-.5,.5],['0%','100%'])

  const onMove = e => {
    if(!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX-r.left)/r.width-.5)
    y.set((e.clientY-r.top)/r.height-.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX:rotX, rotateY:rotY, transformPerspective:900, position:'relative' }}
      initial={{ opacity:0, y:36 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-50px' }}
      transition={{ duration:.6, delay:i*.07, ease:[.22,1,.36,1] }}
    >
      <div style={{
        background:'rgba(10,22,40,.75)', backdropFilter:'blur(18px)',
        border:`1px solid ${p.color}22`, borderRadius:'1.25rem',
        padding:'1.6rem', height:'100%', display:'flex', flexDirection:'column',
        transition:'box-shadow .3s', position:'relative', overflow:'hidden',
      }}
        onMouseEnter={e=>e.currentTarget.style.boxShadow=`0 20px 60px rgba(0,0,0,.5),0 0 40px ${p.color}18`}
        onMouseLeave={e=>e.currentTarget.style.boxShadow='none'}
      >
        {/* Moving glow */}
        <motion.div style={{
          position:'absolute', width:180, height:180, borderRadius:'50%',
          background:`radial-gradient(circle,${p.color}14,transparent 70%)`,
          pointerEvents:'none', filter:'blur(18px)',
          left:glowX, top:glowY, transform:'translate(-50%,-50%)',
        }}/>

        {/* Scan line animation on hover */}
        <div style={{ position:'absolute', inset:0, borderRadius:'1.25rem', overflow:'hidden', pointerEvents:'none' }}
          className="scan-wrap">
          <style>{`.scan-wrap:hover::after{content:'';position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${p.color}40,transparent);animation:scan 2s linear infinite;}`}</style>
        </div>

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
            <div style={{ width:40, height:40, borderRadius:'.75rem',
              background:`${p.color}18`, display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'1.2rem' }}>{p.emoji}</div>
            <div>
              <span style={{ padding:'.2rem .65rem', borderRadius:'999px',
                background:`${p.color}18`, color:p.color,
                fontFamily:'JetBrains Mono,monospace', fontSize:'.58rem' }}>{p.status}</span>
            </div>
          </div>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.56rem',
            color:p.color, padding:'.2rem .55rem', border:`1px solid ${p.color}30`, borderRadius:'4px' }}>{p.tag}</span>
        </div>

        <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'1.1rem',
          color:'#e2e8f0', marginBottom:'.3rem', transition:'color .2s' }}
          onMouseEnter={e=>e.target.style.color=p.color}
          onMouseLeave={e=>e.target.style.color='#e2e8f0'}
        >{p.title}</h3>

        <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.6rem', color:p.color, marginBottom:'.85rem' }}>{p.subtitle}</p>
        <p style={{ color:'#64748b', fontSize:'.8rem', lineHeight:1.7, flex:1, marginBottom:'1rem' }}>{p.desc}</p>

        {/* Highlights */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.35rem', marginBottom:'1rem' }}>
          {p.highlights.map(h=>(
            <div key={h} style={{ display:'flex', alignItems:'center', gap:'.35rem' }}>
              <div style={{ width:4, height:4, borderRadius:'50%', background:p.color, flexShrink:0 }}/>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.58rem', color:'#475569' }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'1.1rem' }}>
          {p.tech.map(t=>(
            <span key={t} style={{ background:'rgba(255,255,255,.04)', color:'#64748b',
              fontFamily:'JetBrains Mono,monospace', fontSize:'.58rem',
              padding:'.2rem .55rem', borderRadius:'4px' }}>{t}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display:'flex', gap:'.6rem' }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'.35rem',
                padding:'.5rem 1rem', borderRadius:'.65rem',
                background:`${p.color}18`, border:`1px solid ${p.color}30`,
                color:p.color, fontSize:'.78rem', fontWeight:500, textDecoration:'none',
                transition:'all .2s', flex:1, justifyContent:'center' }}
              onMouseEnter={e=>{e.currentTarget.style.background=`${p.color}28`;e.currentTarget.style.transform='translateY(-1px)'}}
              onMouseLeave={e=>{e.currentTarget.style.background=`${p.color}18`;e.currentTarget.style.transform='translateY(0)'}}
            >
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
          )}
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:'.35rem',
              padding:'.5rem 1rem', borderRadius:'.65rem',
              background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)',
              color:'rgba(226,232,240,.7)', fontSize:'.78rem', fontWeight:500, textDecoration:'none',
              transition:'all .2s', ...(p.live?{}:{flex:1,justifyContent:'center'}) }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(59,130,246,.4)';e.currentTarget.style.color='#e2e8f0';e.currentTarget.style.transform='translateY(-1px)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.1)';e.currentTarget.style.color='rgba(226,232,240,.7)';e.currentTarget.style.transform='translateY(0)'}}
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="projects" ref={ref} style={{ position:'relative', padding:'clamp(5rem,10vw,8rem) 0' }}>
      <div className="anim-float2" style={{ position:'absolute', right:0, top:0,
        width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle,rgba(59,130,246,.06),transparent 70%)', filter:'blur(100px)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 1.5rem' }}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6}} style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <div className="lbl" style={{justifyContent:'center',marginBottom:'.75rem'}}><span>Live Projects</span></div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#e2e8f0'}}>
            Things I've <span className="grad">actually shipped</span>
          </h2>
          <p style={{color:'#475569',fontSize:'.88rem',marginTop:'.75rem'}}>
            4 live apps · 4 GitHub repos · Click any card to visit
          </p>

          {/* GitHub profile link */}
          <motion.a
            href={GITHUB} target="_blank" rel="noopener noreferrer"
            initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.3}}
            style={{
              display:'inline-flex', alignItems:'center', gap:'.6rem',
              marginTop:'1.25rem', padding:'.55rem 1.3rem', borderRadius:'999px',
              background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.12)',
              color:'rgba(226,232,240,.7)', textDecoration:'none', fontSize:'.82rem',
              transition:'all .25s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(59,130,246,.4)';e.currentTarget.style.color='#e2e8f0';e.currentTarget.style.background='rgba(59,130,246,.08)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.12)';e.currentTarget.style.color='rgba(226,232,240,.7)';e.currentTarget.style.background='rgba(255,255,255,.04)'}}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            @ShlokVerma1 · 17 repos
          </motion.a>
        </motion.div>

        <div style={{ display:'grid', gap:'1.25rem', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))' }}>
          {projects.map((p,i) => <ProjectCard key={p.title} p={p} i={i}/>)}
        </div>
      </div>
    </section>
  )
}
