import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const features = [
  {i:'🔐',t:'JWT + Refresh Tokens',d:'Full token lifecycle: generation, expiry, automatic rotation & revocation.'},
  {i:'👥',t:'Role-Based Access',d:'Fine-grained RBAC — admin, user, custom roles, route-level guards.'},
  {i:'🛡️',t:'Rate Limiting',d:'IP-based brute-force protection built in. No config needed.'},
  {i:'🔑',t:'bcrypt Hashing',d:'Configurable salt rounds. Passwords are always stored securely.'},
  {i:'📋',t:'Audit Logging',d:'Full event log for every auth action. Compliance-friendly.'},
  {i:'⚡',t:'REST API First',d:'Drop-in for any frontend, mobile app, or microservice in minutes.'},
]
const plans = [
  {n:'Free',p:0,c:'#3b82f6',cta:'Start Free',f:false,fs:['1k requests/mo','JWT Auth','Basic RBAC','Community']},
  {n:'Developer',p:9,c:'#7c3aed',cta:'Get Access',f:true,fs:['50k requests/mo','Full RBAC','Token rotation','Rate limiting','Email support']},
  {n:'Production',p:29,c:'#06b6d4',cta:'Contact Me',f:false,fs:['Unlimited','Custom domain','Audit logs','SLA 99.9%','Priority']},
]
const stg = {hidden:{},visible:{transition:{staggerChildren:.08}}}
const it = {hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}}

export default function SaaSSection() {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true,margin:'-80px'})
  return (
    <section id="saas" ref={ref} style={{position:'relative',padding:'clamp(5rem,10vw,8rem) 0',overflow:'hidden'}}>
      <div className="grid-bg" style={{position:'absolute',inset:0,opacity:.4}}/>
      <div className="anim-float1" style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',
        width:800,height:400,borderRadius:'50%',background:'radial-gradient(ellipse,rgba(124,58,237,.08),transparent 70%)',
        filter:'blur(80px)',pointerEvents:'none'}}/>

      <div style={{maxWidth:1100,margin:'0 auto',padding:'0 1.5rem',position:'relative',zIndex:1}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
          style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <div className="lbl" style={{justifyContent:'center',marginBottom:'.75rem'}}><span>My SaaS</span></div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#e2e8f0',marginBottom:'.75rem'}}>
            <span className="grad">DevSecureAuth</span>
          </h2>
          <p style={{color:'#64748b',fontSize:'1rem',maxWidth:520,margin:'0 auto',lineHeight:1.75}}>
            A live JWT auth server I built and actively maintain. Drop-in backend authentication 
            {/* available at <strong style={{color:'#7c3aed'}}>auth.shlokverma.dev</strong> */}
          </p>
          <div style={{display:'inline-flex',alignItems:'center',gap:'.5rem',marginTop:'1rem',
            padding:'.4rem 1rem',borderRadius:'999px',background:'rgba(16,185,129,.1)',border:'1px solid rgba(16,185,129,.25)'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#10b981',
              boxShadow:'0 0 10px rgba(16,185,129,.8)',display:'block',animation:'dotPulse 2s ease-in-out infinite'}}/>
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.62rem',color:'#10b981'}}>
              Live · Jan 2025 – Present
            </span>
          </div>
          <style>{`@keyframes dotPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:.6}}`}</style>
        </motion.div>

        <motion.div variants={stg} initial="hidden" animate={inView?'visible':'hidden'}
          style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))',marginBottom:'4rem'}}>
          {features.map(f=>(
            <motion.div key={f.t} variants={it}
              style={{padding:'1.25rem',borderRadius:'1rem',background:'rgba(10,22,40,.65)',
                backdropFilter:'blur(12px)',border:'1px solid rgba(59,130,246,.08)',
                transition:'all .25s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.borderColor='rgba(59,130,246,.25)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='rgba(59,130,246,.08)'}}>
              <span style={{fontSize:'1.4rem',display:'block',marginBottom:'.6rem'}}>{f.i}</span>
              <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'.88rem',color:'#e2e8f0',marginBottom:'.3rem'}}>{f.t}</h3>
              <p style={{color:'#475569',fontSize:'.76rem',lineHeight:1.65}}>{f.d}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.h3 initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.4}}
          style={{textAlign:'center',fontFamily:'Syne,sans-serif',fontWeight:700,
            fontSize:'clamp(1.3rem,3vw,1.8rem)',color:'#e2e8f0',marginBottom:'2rem'}}>
          Simple, honest pricing
        </motion.h3>

        <motion.div variants={stg} initial="hidden" animate={inView?'visible':'hidden'}
          style={{display:'grid',gap:'1.25rem',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))'}}>
          {plans.map(pl=>(
            <motion.div key={pl.n} variants={it}
              style={{padding:'2rem',borderRadius:'1.25rem',background:'rgba(10,22,40,.75)',
                backdropFilter:'blur(14px)',border:`1px solid ${pl.f?pl.c+'45':pl.c+'20'}`,
                display:'flex',flexDirection:'column',position:'relative',
                boxShadow:pl.f?`0 0 50px ${pl.c}18`:'none',
                transition:'transform .25s'}}
              whileHover={{y:-6}}>
              {pl.f&&<div style={{position:'absolute',top:'-.85rem',left:'50%',transform:'translateX(-50%)',
                padding:'.2rem 1rem',borderRadius:'999px',background:pl.c,
                fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'#fff',whiteSpace:'nowrap'}}>
                Most Popular</div>}
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.1rem',color:'#e2e8f0',marginBottom:'.75rem'}}>{pl.n}</div>
              <div style={{marginBottom:'1.25rem'}}>
                <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'2.8rem',color:pl.c}}>${pl.p}</span>
                <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#475569'}}>/mo</span>
              </div>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'.6rem',flex:1,marginBottom:'1.5rem'}}>
                {pl.fs.map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'center',gap:'.5rem',color:'#64748b',fontSize:'.8rem'}}>
                    <svg width="13" height="13" style={{color:pl.c,flexShrink:0}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{display:'block',padding:'.8rem',borderRadius:'.75rem',textAlign:'center',
                background:pl.f?`linear-gradient(135deg,${pl.c},#3b82f6)`:`${pl.c}18`,
                color:pl.f?'#fff':pl.c,border:pl.f?'none':`1px solid ${pl.c}30`,
                fontSize:'.88rem',fontWeight:500,textDecoration:'none',transition:'transform .2s'}}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>{pl.cta}</a>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}
