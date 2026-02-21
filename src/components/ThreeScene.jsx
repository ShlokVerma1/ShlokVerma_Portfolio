import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef(null)
  useEffect(() => {
    const el = mountRef.current; if (!el) return
    const W = el.clientWidth, H = el.clientHeight
    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(60, W/H, 0.1, 1000)
    cam.position.set(0, 0, 85)
    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true })
    renderer.setSize(W, H); renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    renderer.setClearColor(0x000000, 0); el.appendChild(renderer.domElement)

    // Particles
    const N = 2000, pGeo = new THREE.BufferGeometry()
    const pp = new Float32Array(N*3), pc = new Float32Array(N*3)
    const pal = ['#3b82f6','#7c3aed','#06b6d4','#1e40af','#4c1d95'].map(c => new THREE.Color(c))
    for (let i=0;i<N;i++){
      pp[i*3]=(Math.random()-.5)*280; pp[i*3+1]=(Math.random()-.5)*280; pp[i*3+2]=(Math.random()-.5)*150
      const c=pal[i%pal.length]; pc[i*3]=c.r; pc[i*3+1]=c.g; pc[i*3+2]=c.b
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pp,3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(pc,3))
    const pMat = new THREE.PointsMaterial({size:.6,vertexColors:true,transparent:true,opacity:.45})
    const pts = new THREE.Points(pGeo, pMat); scene.add(pts)

    // Floating shapes
    const mats = [
      new THREE.MeshStandardMaterial({color:'#3b82f6',wireframe:true,transparent:true,opacity:.2}),
      new THREE.MeshStandardMaterial({color:'#7c3aed',wireframe:true,transparent:true,opacity:.18}),
      new THREE.MeshStandardMaterial({color:'#06b6d4',wireframe:true,transparent:true,opacity:.22}),
      new THREE.MeshStandardMaterial({color:'#10b981',wireframe:true,transparent:true,opacity:.15}),
    ]
    const shapes = [
      { m: new THREE.Mesh(new THREE.IcosahedronGeometry(16,1), mats[0]), p:[52,8,-18], rx:.004,ry:.006,f:0 },
      { m: new THREE.Mesh(new THREE.TorusGeometry(12,3.5,8,24), mats[1]), p:[-58,-12,-28], rx:.005,ry:-.003,f:2 },
      { m: new THREE.Mesh(new THREE.OctahedronGeometry(11), mats[2]), p:[8,-42,-14], rx:-.003,ry:.007,f:1 },
      { m: new THREE.Mesh(new THREE.TetrahedronGeometry(8), mats[3]), p:[-28,36,-8], rx:.007,ry:.004,f:3 },
      { m: new THREE.Mesh(new THREE.TorusKnotGeometry(8,2,64,8), mats[0]), p:[70,-30,-35], rx:.002,ry:.004,f:1.5 },
    ]
    shapes.forEach(({m,p}) => { m.position.set(...p); scene.add(m) })

    scene.add(new THREE.AmbientLight(0x4466ff,2))
    const dl = new THREE.DirectionalLight(0x7c3aed,3); dl.position.set(50,50,30); scene.add(dl)

    let mx=0, my=0, scrollY=0, t=0, raf
    window.addEventListener('mousemove', e => { mx=(e.clientX/window.innerWidth-.5)*2; my=(e.clientY/window.innerHeight-.5)*2 })
    window.addEventListener('scroll', () => { scrollY=window.scrollY }, {passive:true})
    window.addEventListener('resize', () => {
      const w=el.clientWidth,h=el.clientHeight
      cam.aspect=w/h; cam.updateProjectionMatrix(); renderer.setSize(w,h)
    })

    const animate = () => {
      raf=requestAnimationFrame(animate); t+=.01
      pts.rotation.y+=.00018; pts.rotation.x+=.00008
      shapes.forEach(({m,rx,ry,f}) => { m.rotation.x+=rx; m.rotation.y+=ry; m.position.y+=Math.sin(t+f)*.04 })
      cam.position.x+=(mx*7-cam.position.x)*.022
      cam.position.y+=(-my*7-cam.position.y)*.022
      cam.position.z=85-scrollY*.015
      renderer.render(scene,cam)
    }
    animate()
    return () => {
      cancelAnimationFrame(raf); renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  },[])
  return <div ref={mountRef} style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none'}}/>
}
