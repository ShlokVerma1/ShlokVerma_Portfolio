import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const links = [
  {l:'About',h:'#about'},{l:'Skills',h:'#skills'},{l:'Projects',h:'#projects'},
  {l:'SaaS',h:'#saas'},{l:'Process',h:'#process'},{l:'Contact',h:'#contact'},
]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [prog, setProg] = useState(0)
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY>60)
      const tot = document.body.scrollHeight - window.innerHeight
      setProg(tot>0 ? (window.scrollY/tot)*100 : 0)
      const sections = ['about','skills','projects','saas','process','contact']
      let cur = ''
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <>
      {/* Scroll bar */}
      <div style={{position:'fixed',top:0,left:0,height:'2px',zIndex:200,
        background:'linear-gradient(90deg,#3b82f6,#7c3aed,#06b6d4)',
        width:`${prog}%`,transition:'width .1s',borderRadius:'0 99px 99px 0'}}/>

      <motion.nav
        initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}}
        transition={{duration:.9,ease:[.22,1,.36,1]}}
        style={{position:'fixed',top:0,left:0,right:0,zIndex:100,
          padding:scrolled?'.75rem 2rem':'1.25rem 2rem',
          display:'flex',alignItems:'center',justifyContent:'space-between',
          background:scrolled?'rgba(3,7,15,.93)':'transparent',
          backdropFilter:scrolled?'blur(20px)':'none',
          borderBottom:scrolled?'1px solid rgba(59,130,246,.1)':'none',
          transition:'all .3s ease'}}
      >
        {/* Logo */}
        <a href="#" style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'.3rem'}}>
          <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.15rem'}}>
            <span className="grad">SV</span>
          </span>
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.68rem',color:'rgba(255,255,255,.25)'}}>
            .dev
          </span>
        </a>

        {/* Desktop */}
        <ul style={{display:'none',listStyle:'none',alignItems:'center',gap:'2rem'}} className="dnav">
          {links.map(({l,h}) => (
            <li key={h}>
              <a href={h} style={{
                fontFamily:'JetBrains Mono,monospace',fontSize:'.66rem',
                color: active===h.slice(1)?'#e2e8f0':'rgba(226,232,240,.55)',
                textDecoration:'none',textTransform:'uppercase',letterSpacing:'.18em',
                transition:'color .2s',position:'relative',
              }}>
                {l}
                {active===h.slice(1) && (
                  <motion.div layoutId="nav-dot" style={{
                    position:'absolute',bottom:'-6px',left:'50%',transform:'translateX(-50%)',
                    width:4,height:4,borderRadius:'50%',background:'var(--blue)'
                  }}/>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div style={{display:'flex',alignItems:'center',gap:'.75rem'}}>
          <a href="#contact" className="dnav" style={{
            display:'none',padding:'.55rem 1.4rem',borderRadius:'999px',
            background:'linear-gradient(135deg,#3b82f6,#7c3aed)',
            color:'#fff',fontSize:'.82rem',fontWeight:500,textDecoration:'none',
            transition:'all .25s',boxShadow:'0 2px 16px rgba(59,130,246,.25)'
          }}
            onMouseEnter={e=>e.currentTarget.style.boxShadow='0 0 28px rgba(59,130,246,.55)'}
            onMouseLeave={e=>e.currentTarget.style.boxShadow='0 2px 16px rgba(59,130,246,.25)'}
          >Work With Me</a>

          {/* Hamburger */}
          <button onClick={()=>setOpen(!open)} style={{background:'none',border:'none',padding:'.4rem',display:'flex',flexDirection:'column',gap:'5px'}}>
            {[0,1,2].map(i=>(
              <span key={i} style={{display:'block',width:22,height:1.5,background:'#e2e8f0',borderRadius:2,
                transition:'all .3s',
                transform:open?(i===0?'rotate(45deg)translateY(9px)':i===1?'scaleX(0)':'rotate(-45deg)translateY(-9px)'):'none',
                opacity:open&&i===1?0:1}}/>
            ))}
          </button>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {open&&(
            <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
              style={{position:'absolute',top:'100%',left:0,right:0,
                background:'rgba(3,7,15,.97)',backdropFilter:'blur(20px)',
                borderTop:'1px solid rgba(59,130,246,.1)',overflow:'hidden'}}>
              <div style={{padding:'1.5rem 2rem',display:'flex',flexDirection:'column',gap:'1.1rem'}}>
                {links.map(({l,h})=>(
                  <a key={h} href={h} onClick={()=>setOpen(false)}
                    style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.78rem',color:'rgba(226,232,240,.7)',
                      textDecoration:'none',textTransform:'uppercase',letterSpacing:'.18em'}}>{l}</a>
                ))}
                <a href="#contact" onClick={()=>setOpen(false)}
                  style={{padding:'.8rem',borderRadius:'999px',textAlign:'center',
                    background:'linear-gradient(135deg,#3b82f6,#7c3aed)',color:'#fff',textDecoration:'none',fontWeight:500}}>
                  Work With Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <style>{`@media(min-width:768px){.dnav{display:flex!important}}`}</style>
    </>
  )
}
