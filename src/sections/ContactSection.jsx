import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
const stg={hidden:{},visible:{transition:{staggerChildren:.1}}}
const it={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true,margin:'-80px'})
  const [form,setForm]=useState({name:'',email:'',type:'',budget:'',msg:''})
  const [sent,setSent]=useState(false)
  const [focus,setFocus]=useState('')
  const oc=e=>setForm(p=>({...p,[e.target.name]:e.target.value}))
  const onSub = async (e) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/mpqjjvqe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSent(true)
}

  const inputStyle = (name) => ({
    width:'100%',background:'rgba(255,255,255,.04)',
    border:`1px solid ${focus===name?'rgba(59,130,246,.5)':'rgba(255,255,255,.08)'}`,
    borderRadius:'.75rem',padding:'.8rem 1rem',fontSize:'.88rem',
    color:'#e2e8f0',fontFamily:'DM Sans,sans-serif',outline:'none',
    transition:'border-color .2s',
  })
  const lbl={display:'block',fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',
    color:'#475569',textTransform:'uppercase',letterSpacing:'.18em',marginBottom:'.4rem'}

  return (
    <section id="contact" ref={ref} style={{position:'relative',padding:'clamp(5rem,10vw,8rem) 0',overflow:'hidden'}}>
      <div className="grid-bg" style={{position:'absolute',inset:0,opacity:.3}}/>
      <div className="anim-float0" style={{position:'absolute',left:'50%',bottom:0,transform:'translateX(-50%)',
        width:700,height:300,borderRadius:'50%',
        background:'radial-gradient(ellipse,rgba(59,130,246,.12),transparent 70%)',
        filter:'blur(80px)',pointerEvents:'none'}}/>

      <div style={{maxWidth:1100,margin:'0 auto',padding:'0 1.5rem',position:'relative',zIndex:1}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
          style={{textAlign:'center',marginBottom:'3.5rem'}}>
          <div className="lbl" style={{justifyContent:'center',marginBottom:'.75rem'}}><span>Let's Build Together</span></div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#e2e8f0',marginBottom:'1rem'}}>
            Have a project? <span className="grad">Let's ship it.</span>
          </h2>
          <p style={{color:'#64748b',maxWidth:480,margin:'0 auto',lineHeight:1.7,fontSize:'.95rem'}}>
            I reply within 24h — usually much faster. WhatsApp is the fastest route.
          </p>
        </motion.div>

        <div style={{display:'grid',gap:'3rem',alignItems:'start'}}>

          {/* Info */}
          <motion.div variants={stg} initial="hidden" animate={inView?'visible':'hidden'}>
            {[
              {i:'✉️',l:'Email',v:'vermaslok.k@gmail.com',h:'mailto:vermaslok.k@gmail.com',c:'#3b82f6'},
              {i:'📱',l:'WhatsApp',v:'+91 6200773310',h:'https://wa.me/916200773310?text=Hi%20Shlok!',c:'#25d366'},
              {i:'💼',l:'LinkedIn',v:'linkedin.com/in/ShlokVerma',h:'https://www.linkedin.com/in/shlok-verma-2a9693179 ',c:'#0a66c2'},
              {i:'💼',l:'GitHub',v:'github.com/ShlokVerma1',h:'https://github.com/ShlokVerma1',c:'#e2e8f0'},
              {i:'📍',l:'Location',v:'Delhi, India',h:null,c:'#7c3aed'},
            ].map(c=>(
              <motion.div key={c.l} variants={it}
                style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.25rem'}}>
                <div style={{width:46,height:46,borderRadius:'.75rem',flexShrink:0,
                  background:'rgba(10,22,40,.7)',backdropFilter:'blur(10px)',
                  border:`1px solid ${c.c}25`,display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:'1.15rem',transition:'transform .2s'}}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.1)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>{c.i}</div>
                <div>
                  <p style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',
                    color:'#334155',textTransform:'uppercase',letterSpacing:'.2em',marginBottom:'.1rem'}}>{c.l}</p>
                  {c.h
                    ? <a href={c.h} target={c.h.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                        style={{color:'#94a3b8',fontSize:'.86rem',textDecoration:'none',transition:'color .2s'}}
                        onMouseEnter={e=>e.target.style.color=c.c}
                        onMouseLeave={e=>e.target.style.color='#94a3b8'}>{c.v}</a>
                    : <p style={{color:'#94a3b8',fontSize:'.86rem'}}>{c.v}</p>
                  }
                </div>
              </motion.div>
            ))}

            <motion.a variants={it}
              href="https://wa.me/916200773310?text=Hi%20Shlok%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
              target="_blank" rel="noopener noreferrer"
              style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'.75rem',
                padding:'1rem',borderRadius:'1rem',border:'1px solid rgba(37,211,102,.3)',
                color:'#4ade80',textDecoration:'none',fontWeight:500,marginTop:'1rem',
                background:'rgba(37,211,102,.04)',transition:'all .25s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(37,211,102,.1)';e.currentTarget.style.borderColor='rgba(37,211,102,.6)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(37,211,102,.04)';e.currentTarget.style.borderColor='rgba(37,211,102,.3)'}}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp — fastest reply ⚡
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}}
            transition={{delay:.3,duration:.6}}
            style={{background:'rgba(10,22,40,.7)',backdropFilter:'blur(18px)',
              border:'1px solid rgba(59,130,246,.1)',borderRadius:'1.25rem',padding:'2rem'}}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="done" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}}
                  style={{textAlign:'center',padding:'3rem 0'}}>
                  <motion.span animate={{rotate:[0,15,-15,10,-10,0]}} transition={{duration:.7,delay:.2}}
                    style={{fontSize:'3.5rem',display:'block',marginBottom:'1rem'}}>🚀</motion.span>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.4rem',color:'#e2e8f0',marginBottom:'.5rem'}}>
                    Message sent!
                  </h3>
                  <p style={{color:'#64748b',fontSize:'.88rem'}}>
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={onSub} style={{display:'flex',flexDirection:'column',gap:'1.1rem'}}>
                  <div style={{display:'grid',gap:'1.1rem',gridTemplateColumns:'1fr 1fr'}}>
<<<<<<< HEAD
                    {[['name','Your Name','text','Priya Sharma'],['email','Email','email','priya@startup.io']].map(([n,l,t,p])=>(
=======
                    {[['name','Your Name','text','Your Name'],['email','Email','email','example@gmail.com']].map(([n,l,t,p])=>(
>>>>>>> 4bd079e (revised version)
                      <div key={n}>
                        <label style={lbl}>{l}</label>
                        <input type={t} name={n} required placeholder={p} value={form[n]} onChange={oc}
                          style={inputStyle(n)}
                          onFocus={()=>setFocus(n)} onBlur={()=>setFocus('')}/>
                      </div>
                    ))}
                  </div>
                  <div style={{display:'grid',gap:'1.1rem',gridTemplateColumns:'1fr 1fr'}}>
                    {[
                      {n:'type',l:'Project Type',opts:['Backend API','AI Integration','Full-Stack App','JWT/Auth','Frontend','Other']},
                      {n:'budget',l:'Budget',opts:['<$500','$500–$1500','$1500–$5000','$5000+']},
                    ].map(s=>(
                      <div key={s.n}>
                        <label style={lbl}>{s.l}</label>
                        <select name={s.n} value={form[s.n]} onChange={oc}
                          style={{...inputStyle(s.n),background:'#0a1628'}}
                          onFocus={()=>setFocus(s.n)} onBlur={()=>setFocus('')}>
                          <option value="">Select…</option>
                          {s.opts.map(o=><option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={lbl}>Message</label>
                    <textarea name="msg" rows={4} required value={form.msg} onChange={oc}
                      placeholder="Tell me about your project — what do you need built?"
                      style={{...inputStyle('msg'),resize:'none'}}
                      onFocus={()=>setFocus('msg')} onBlur={()=>setFocus('')}/>
                  </div>
                  <motion.button type="submit" whileHover={{scale:1.02}} whileTap={{scale:.98}}
                    style={{width:'100%',padding:'1rem',borderRadius:'.75rem',border:'none',
                      background:'linear-gradient(135deg,#3b82f6,#7c3aed)',color:'#fff',
                      fontSize:'.95rem',fontWeight:500,fontFamily:'DM Sans,sans-serif',
                      boxShadow:'0 4px 20px rgba(59,130,246,.3)',transition:'box-shadow .2s'}}
                    onMouseEnter={e=>e.currentTarget.style.boxShadow='0 4px 40px rgba(59,130,246,.55)'}
                    onMouseLeave={e=>e.currentTarget.style.boxShadow='0 4px 20px rgba(59,130,246,.3)'}>
                    Send Message →
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <style>{`@media(min-width:768px){#contact [style*="display: grid"]{grid-template-columns:1fr 1.4fr!important}}`}</style>
    </section>
  )
}
