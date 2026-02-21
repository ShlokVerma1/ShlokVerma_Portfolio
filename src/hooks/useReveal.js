import { useEffect } from 'react'
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s')
    const io = new IntersectionObserver(
      e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('on') }),
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
