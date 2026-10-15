import { Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const damp = THREE.MathUtils.damp

function Head({ progress, children }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (!group.current) return
    const p = progress?.get ? progress.get() : 0
    const target = p * Math.PI * 1.5 - 0.4
    group.current.rotation.y = damp(group.current.rotation.y, target, 3.2, delta)
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.05
  })

  return (
    <group ref={group} scale={[0.95, 1.08, 1]}>
      <mesh>
        <sphereGeometry args={[1, 30, 22]} />
        <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.985, 24, 18]} />
        <meshStandardMaterial color="#050505" metalness={0.5} roughness={0.65} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.01, 0.006, 8, 120]} />
        <meshBasicMaterial color="#f5d77a" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.05, 0.004, 8, 120]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.22} />
      </mesh>
      {children}
    </group>
  )
}

function Hotspot({ spot, active, onSelect }) {
  const ref = useRef()
  const ring = useRef()

  const position = useMemo(() => {
    const v = new THREE.Vector3(...spot.position)
    return v.normalize().multiplyScalar(1.06)
  }, [spot.position])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      const base = active ? 1.35 : 1
      ref.current.scale.setScalar(base * (1 + Math.sin(t * 3 + spot.code.charCodeAt(0)) * 0.07))
    }
    if (ring.current) {
      ring.current.rotation.z += 0.02
      const s = active ? 1.25 : 1
      ring.current.scale.setScalar(s * (1 + Math.sin(t * 2.4) * 0.12))
    }
  })

  return (
    <group position={position}>
      <group ref={ref}>
        <mesh
          onClick={(e) => {
            e.stopPropagation()
            onSelect(spot.id)
          }}
          onPointerDown={(e) => {
            e.stopPropagation()
            onSelect(spot.id)
          }}
        >
          <sphereGeometry args={[0.05, 18, 18]} />
          <meshStandardMaterial
            color={active ? '#f5d77a' : '#d4af37'}
            emissive={active ? '#f5d77a' : '#9a7b1e'}
            emissiveIntensity={active ? 1.8 : 0.9}
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </group>
      <mesh ref={ring}>
        <ringGeometry args={[0.08, 0.1, 32]} />
        <meshBasicMaterial
          color="#f5d77a"
          transparent
          opacity={active ? 0.9 : 0.45}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Html center distanceFactor={6} zIndexRange={[20, 0]}>
        <button
          onClick={() => onSelect(spot.id)}
          className={`pointer-events-auto -translate-y-6 whitespace-nowrap rounded-full border px-2.5 py-1 label-caps text-[0.5rem] tracking-[0.32em] transition ${
            active
              ? 'border-gold-light bg-gold-light/15 text-gold-light'
              : 'border-gold-light/40 bg-black/50 text-gold-light/80'
          }`}
        >
          {spot.code} · {spot.name}
        </button>
      </Html>
    </group>
  )
}

function Scene({ spots, activeId, onSelect, progress }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} color="#fff4d6" />
      <pointLight position={[-4, -2, -3]} intensity={1.1} color="#9a7b1e" />
      <Head progress={progress}>
        {spots.map((spot) => (
          <Hotspot
            key={spot.id}
            spot={spot}
            active={activeId === spot.id}
            onSelect={onSelect}
          />
        ))}
      </Head>
    </>
  )
}

export default function ScalpModel({ spots, activeId, onSelect, progress }) {
  return (
    <Canvas
      dpr={[1, 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 3.3], fov: 42 }}
    >
      <Scene spots={spots} activeId={activeId} onSelect={onSelect} progress={progress} />
    </Canvas>
  )
}
