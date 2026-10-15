import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const damp = THREE.MathUtils.damp

function Follicles({ target }) {
  const group = useRef()
  const growth = useRef(0.05)

  const follicles = useMemo(() => {
    const arr = []
    const cols = 9
    const rows = 5
    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const x = (i - (cols - 1) / 2) * 0.2
        const z = (j - (rows - 1) / 2) * 0.2
        const height = 0.7 + Math.random() * 0.8
        const sway = (Math.random() - 0.5) * 0.4
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(sway * 0.35, height * 0.4, 0),
          new THREE.Vector3(sway, height * 0.75, 0),
          new THREE.Vector3(sway * 1.35, height, 0),
        ])
        arr.push({ curve, x, z })
      }
    }
    return arr
  }, [])

  const geometries = useMemo(
    () =>
      follicles.map((f) => new THREE.BufferGeometry().setFromPoints(f.curve.getPoints(30))),
    [follicles],
  )

  const tips = useRef([])

  useFrame((state, delta) => {
    growth.current = damp(growth.current, target, 2.4, delta)
    const g = growth.current

    geometries.forEach((geo) => {
      const total = geo.attributes.position.count
      geo.setDrawRange(0, Math.max(2, Math.floor(g * total)))
    })

    if (group.current) group.current.rotation.y += delta * 0.12

    tips.current.forEach((tip, i) => {
      const f = follicles[i]
      if (!tip || !f) return
      const p = f.curve.getPoint(g)
      tip.position.set(f.x + p.x, p.y, f.z + p.z)
      tip.scale.setScalar(0.5 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.15)
    })
  })

  return (
    <group ref={group} position={[0, -0.6, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <circleGeometry args={[1.5, 48]} />
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.6} />
      </mesh>

      {follicles.map((f, i) => (
        <line key={i} geometry={geometries[i]} position={[f.x, 0, f.z]}>
          <lineBasicMaterial color="#f5d77a" transparent opacity={0.85} />
        </line>
      ))}

      {follicles.map((f, i) => (
        <mesh key={`root-${i}`} position={[f.x, 0, f.z]}>
          <sphereGeometry args={[0.02, 10, 10]} />
          <meshBasicMaterial color="#9a7b1e" />
        </mesh>
      ))}

      {follicles.map((f, i) => (
        <mesh
          key={`tip-${i}`}
          ref={(el) => {
            tips.current[i] = el
          }}
        >
          <sphereGeometry args={[0.016, 10, 10]} />
          <meshBasicMaterial color="#f5d77a" transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  )
}

export default function FollicleGrowth({ progress = 0.3 }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1.1, 2.6], fov: 42 }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[2, 3, 2]} intensity={1.4} color="#f5d77a" />
      <Follicles target={progress} />
    </Canvas>
  )
}
