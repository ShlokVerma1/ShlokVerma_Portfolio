import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import ThreeScene from '../components/ThreeScene'

const ROLES = ['AI Developer', 'Backend Engineer', 'Flask Specialist', 'ML Builder', 'Freelancer']

export default function HeroSection() {
  const ref = useRef(null)
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIdx]
    let i = 0, timer
    if (typing) {
      timer = setInterval(() => {
        setDisplayed(target.slice(0, ++i))
        if (i >= target.length) { clearInterval(timer); setTimeout(() => setTyping(false), 1800) }
      }, 70)
    } else {
      let j = target.length
      timer = setInterval(() => {
        setDisplayed(target.slice(0, --j))
        if (j <= 0) { clearInterval(timer); setRoleIdx(p => (p+1)%ROLES.length); setTyping(true) }
      }, 40)
    }
    return () => clearInterval(timer)
  }, [roleIdx, typing])

  // GSAP hero entry
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hl', { y:90, opacity:0, duration:1.1, stagger:.12, ease:'power4.out', delay:.25 })
      gsap.from('.hs', { y:24, opacity:0, duration:.8, ease:'power3.out', delay:.95 })
      gsap.from('.hc', { y:20, opacity:0, duration:.7, stagger:.08, ease:'power3.out', delay:1.15 })
      gsap.from('.hbadge', { scale:.5, opacity:0, duration:.6, ease:'back.out(2)', delay:1.6 })
      gsap.from('.horbit', { scale:0, opacity:0, duration:.8, ease:'back.out(1.5)', delay:1.7 })
      gsap.to('.hbadge', { y:-8, duration:2.8, ease:'sine.inOut', yoyo:true, repeat:-1, delay:2.2 })
      // Floating particles behind hero
      gsap.fromTo('.hpart', { y:100, opacity:0 }, { y:0, opacity:.6, duration:2, stagger:.3, ease:'power3.out', delay:.5 })
    }, ref)
    return () => ctx.revert()
  }, [])

  const stats = [
<<<<<<< HEAD
    { v:'17+', l:'GitHub Repos' },
=======
    { v:'17+', l:'Projects' },
>>>>>>> 4bd079e (revised version)
    { v:'4', l:'Live Projects' },
    { v:'4×', l:'Certified' },
    { v:'IIT', l:'Techfest' },
  ]

  return (
    <section ref={ref} id="hero" className="grid-bg" style={{
      position:'relative', minHeight:'100vh',
      display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'
    }}>
      <ThreeScene/>

      {/* Animated background blobs */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:1}}>
        <div className="anim-float0" style={{position:'absolute',top:'30%',left:'50%',transform:'translate(-50%,-50%)',
          width:700,height:700,borderRadius:'50%',
          background:'radial-gradient(circle,rgba(59,130,246,.1),transparent 65%)',filter:'blur(60px)'}}/>
        <div className="anim-float2" style={{position:'absolute',top:'65%',right:'10%',
          width:400,height:400,borderRadius:'50%',
          background:'radial-gradient(circle,rgba(124,58,237,.09),transparent 65%)',filter:'blur(80px)'}}/>
        <div className="anim-float1" style={{position:'absolute',top:'20%',left:'5%',
          width:300,height:300,borderRadius:'50%',
          background:'radial-gradient(circle,rgba(6,182,212,.07),transparent 65%)',filter:'blur(70px)'}}/>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_,i)=>(
        <div key={i} className="hpart" style={{
          position:'absolute', zIndex:2, pointerEvents:'none',
          left:`${10+i*15}%`, top:`${30+Math.sin(i)*20}%`,
          width:4+i%3*3, height:4+i%3*3, borderRadius:'50%',
          background:['#3b82f6','#7c3aed','#06b6d4','#10b981','#f59e0b','#ec4899'][i],
          boxShadow:`0 0 12px ${['#3b82f6','#7c3aed','#06b6d4','#10b981','#f59e0b','#ec4899'][i]}`,
          animation:`float${i%3===0?'0':i%3===1?'1':'2'} ${4+i}s ease-in-out infinite`,
          animationDelay:`${i*.6}s`,
        }}/>
      ))}

      {/* Available badge */}
      <div className="hbadge glass" style={{
        position:'absolute',top:'6.5rem',right:'1.5rem',zIndex:20,
        display:'flex',alignItems:'center',gap:'.6rem',padding:'.6rem 1rem'
      }}>
        <span style={{width:7,height:7,borderRadius:'50%',background:'#10b981',
          boxShadow:'0 0 10px rgba(16,185,129,.9)',display:'block',
          animation:'dotPulse 2s ease-in-out infinite'}}/>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.62rem',color:'#94a3b8'}}>
          Open to freelance
        </span>
      </div>

      {/* Orbit rings (desktop) */}
      <div className="horbit" style={{
        position:'absolute',right:'6%',top:'50%',transform:'translateY(-50%)',
        width:240,height:240,zIndex:5,display:'none'
      }}>
        {/* Ring 1 */}
        <div className="spin-slow" style={{position:'absolute',inset:0,borderRadius:'50%',
          border:'1px solid rgba(59,130,246,.15)'}}/>
        {/* Ring 2 */}
        <div className="spin-slow-r" style={{position:'absolute',inset:20,borderRadius:'50%',
          border:'1px dashed rgba(124,58,237,.12)'}}/>
        {/* Center */}
        <div style={{position:'absolute',inset:'50%',width:18,height:18,marginLeft:-9,marginTop:-9,
          borderRadius:'50%',background:'linear-gradient(135deg,#3b82f6,#7c3aed)',
          boxShadow:'0 0 20px rgba(59,130,246,.7)'}} className="glow-pulse"/>
        {/* Orbiting dots */}
        {[
          {c:'#3b82f6',a:'orbitA 6s linear infinite',s:8},
          {c:'#7c3aed',a:'orbitB 9s linear infinite',s:6},
          {c:'#06b6d4',a:'orbitC 5s linear infinite',s:7},
        ].map((d,i)=>(
          <div key={i} style={{position:'absolute',inset:'50%',width:d.s,height:d.s,
            marginLeft:-d.s/2,marginTop:-d.s/2,borderRadius:'50%',
            background:d.c,boxShadow:`0 0 12px ${d.c}`,animation:d.a}}/>
        ))}
      </div>

      {/* Main content */}
      <div style={{position:'relative',zIndex:10,maxWidth:1100,margin:'0 auto',
        padding:'6rem 1.5rem 4rem',textAlign:'center'}}>

        {/* Eyebrow */}
        <div className="hl" style={{marginBottom:'1.25rem'}}>
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.66rem',
            color:'var(--blue)',textTransform:'uppercase',letterSpacing:'.3em'}}>
            Full-Stack & AI Developer · Delhi, India
          </span>
        </div>

        {/* Name */}
        <div className="hl" style={{marginBottom:'.5rem'}}>
          <h1 style={{fontFamily:'Syne,sans-serif',fontWeight:800,
            fontSize:'clamp(3rem,9vw,6rem)',color:'#e2e8f0',
            letterSpacing:'-.02em',lineHeight:1}}>
            Shlok Verma
          </h1>
        </div>

        {/* Typewriter role */}
        <div className="hl" style={{marginBottom:'1.75rem',minHeight:'2.5rem'}}>
          <span style={{fontFamily:'Syne,sans-serif',fontWeight:700,
            fontSize:'clamp(1.2rem,3.5vw,2.2rem)',color:'rgba(226,232,240,.5)'}}>
            I'm a{' '}
          </span>
          <span className="grad" style={{fontFamily:'Syne,sans-serif',fontWeight:700,
            fontSize:'clamp(1.2rem,3.5vw,2.2rem)'}}>
            {displayed}
          </span>
          <span style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(1.2rem,3.5vw,2.2rem)',
            color:'var(--blue)',animation:'blinkCur .8s step-end infinite',
            WebkitAnimation:'blinkCur .8s step-end infinite'}}>|</span>
          <style>{`@keyframes blinkCur{0%,100%{opacity:1}50%{opacity:0}}`}</style>
        </div>

        {/* Sub */}
        <p className="hs" style={{maxWidth:560,margin:'0 auto 2.5rem',
          color:'#64748b',fontSize:'clamp(.9rem,2vw,1.05rem)',lineHeight:1.8}}>
          CS graduate · Built NEAT AI agents, JWT auth systems & full-stack apps ·
        </p>

        {/* CTAs */}
        <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',marginBottom:'3rem'}}>
          {[
            { label:'Start a Project', href:'#contact', primary:true },
            { label:'WhatsApp Me', href:'https://wa.me/916200773310?text=Hi%20Shlok%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project', wa:true },
            { label:'View GitHub', href:'https://github.com/ShlokVerma1', gh:true },
          ].map(b=>(
            <a key={b.label} href={b.href}
              target={b.wa||b.gh?'_blank':undefined} rel="noopener noreferrer"
              className={'hc'+(b.primary?' anim-btn':'')}
              style={{
                display:'flex',alignItems:'center',gap:'.5rem',
                padding:'.85rem 1.75rem',borderRadius:'999px',
                textDecoration:'none',fontSize:'.92rem',fontWeight:500,
                transition:'all .25s',
                ...(b.primary?{
                  background:'linear-gradient(135deg,#3b82f6,#7c3aed)',color:'#fff',
                }:b.wa?{
                  background:'rgba(37,211,102,.07)',border:'1px solid rgba(37,211,102,.3)',color:'#4ade80',
                }:{
                  background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',color:'rgba(226,232,240,.8)',
                })
              }}
              onMouseEnter={e=>{
                if(b.primary) e.currentTarget.style.transform='scale(1.06)'
                else if(b.wa){e.currentTarget.style.borderColor='rgba(37,211,102,.6)';e.currentTarget.style.background='rgba(37,211,102,.12)'}
                else{e.currentTarget.style.borderColor='rgba(59,130,246,.4)';e.currentTarget.style.color='#e2e8f0'}
              }}
              onMouseLeave={e=>{
                e.currentTarget.style.transform='scale(1)'
                e.currentTarget.style.borderColor=b.wa?'rgba(37,211,102,.3)':b.gh?'rgba(255,255,255,.1)':''
                if(b.wa) e.currentTarget.style.background='rgba(37,211,102,.07)'
                if(b.gh) e.currentTarget.style.color='rgba(226,232,240,.8)'
              }}
            >
              {b.wa && <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
              {b.gh && <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>}
              {b.label}
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="hc" style={{display:'flex',flexWrap:'wrap',gap:'2rem',
          justifyContent:'center',paddingTop:'2rem',
          borderTop:'1px solid rgba(59,130,246,.1)'}}>
          {stats.map((s,i)=>(
            <motion.div key={s.l}
              initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
              transition={{delay:1.4+i*.1,duration:.5}}
              style={{textAlign:'center'}}>
              <div className="grad" style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.5rem'}}>{s.v}</div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',
                color:'#475569',textTransform:'uppercase',letterSpacing:'.15em',marginTop:'.2rem'}}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{y:[0,10,0]}} transition={{duration:2.2,repeat:Infinity}}
        style={{position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',
          display:'flex',flexDirection:'column',alignItems:'center',gap:'.4rem',zIndex:10}}>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',
          color:'#1e2d45',letterSpacing:'.3em'}}>SCROLL</span>
        <div style={{width:1,height:44,background:'linear-gradient(to bottom,#3b82f6,transparent)'}}/>
      </motion.div>

      {/* Corner deco */}
      <div style={{position:'absolute',top:0,left:0,width:140,height:140,
        borderLeft:'1px solid rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.08)',pointerEvents:'none',zIndex:2}}/>
      <div style={{position:'absolute',bottom:0,right:0,width:140,height:140,
        borderRight:'1px solid rgba(124,58,237,.08)',borderBottom:'1px solid rgba(124,58,237,.08)',pointerEvents:'none',zIndex:2}}/>

      <style>{`@media(min-width:900px){.horbit{display:block!important}}`}</style>
    </section>
  )
}
