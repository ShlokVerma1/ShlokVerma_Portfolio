import { useEffect, useRef } from 'react'
export default function CustomCursor() {
  const cur = useRef(null), ring = useRef(null)
  const pos = useRef({ x:0,y:0 }), rpos = useRef({ x:0,y:0 }), raf = useRef()
  useEffect(() => {
    if (window.matchMedia('(hover:none)').matches) return
    const mv = e => {
      pos.current = { x:e.clientX, y:e.clientY }
      if (cur.current) { cur.current.style.left=e.clientX+'px'; cur.current.style.top=e.clientY+'px' }
    }
    window.addEventListener('mousemove', mv)
    const tick = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.1
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.1
      if (ring.current) { ring.current.style.left=rpos.current.x+'px'; ring.current.style.top=rpos.current.y+'px' }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    const enter = () => cur.current?.classList.add('big')
    const leave = () => cur.current?.classList.remove('big')
    const attach = () => document.querySelectorAll('a,button,[role=button]').forEach(el => {
      el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave)
    })
    attach(); const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList:true, subtree:true })
    return () => { window.removeEventListener('mousemove',mv); cancelAnimationFrame(raf.current); mo.disconnect() }
  }, [])
  return (<><div ref={cur} className="cur"/><div ref={ring} className="cur-ring"/></>)
}
