import { Environment, Lightformer } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { hero } from '../data/content'

const MODES = hero.modes
const damp = THREE.MathUtils.damp

/**
 * Kinetic Molten Gold Ribbon (Torus Knot)
 * Infinitely smooth, continuous fluid form representing cellular regeneration
 */
function KineticGoldRibbon({ modeIndex }) {
  const meshRef = useRef()
  const currentMode = MODES[modeIndex]

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.y += delta * 0.22
    meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.12
    meshRef.current.rotation.x = Math.cos(t * 0.25) * 0.15
  })

  return (
    <mesh ref={meshRef} scale={1.15}>
      <torusKnotGeometry args={[1.05, 0.3, 240, 48, 2, 3]} />
      <meshStandardMaterial
        color={currentMode.accent || '#D4AF37'}
        metalness={0.96}
        roughness={0.16}
        envMapIntensity={2.2}
        emissive="#5C4105"
        emissiveIntensity={0.18}
      />
    </mesh>
  )
}

/**
 * Inner Luminous Cellular Core that pulses and changes color per mode
 */
function LuminousCore({ modeIndex }) {
  const coreRef = useRef()
  const lightRef = useRef()
  const currentMode = MODES[modeIndex]

  useFrame((state, delta) => {
    if (!coreRef.current) return
    const t = state.clock.elapsedTime
    coreRef.current.rotation.y -= delta * 0.4
    coreRef.current.rotation.x += delta * 0.3

    // Gentle breathing scale
    const breath = 1 + Math.sin(t * 2.2) * 0.08
    coreRef.current.scale.setScalar(0.55 * breath)

    if (lightRef.current) {
      lightRef.current.intensity = damp(
        lightRef.current.intensity,
        4.5 + Math.sin(t * 2.5) * 1.5,
        4,
        delta
      )
    }
  })

  return (
    <group>
      <pointLight
        ref={lightRef}
        color={currentMode.color}
        intensity={5}
        distance={6}
        decay={2}
      />
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color={currentMode.color}
          emissive={currentMode.color}
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </group>
  )
}

/**
 * Concentric Gyroscopic Orbital Hairline Rings
 * Representing Skin • Hair • Science in perpetual harmonic balance
 */
function OrbitalRings() {
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (ring1.current) {
      ring1.current.rotation.z += delta * 0.15
      ring1.current.rotation.x = Math.sin(t * 0.2) * 0.2 + 0.4
    }
    if (ring2.current) {
      ring2.current.rotation.z -= delta * 0.18
      ring2.current.rotation.y = Math.cos(t * 0.25) * 0.25 - 0.5
    }
    if (ring3.current) {
      ring3.current.rotation.y += delta * 0.12
      ring3.current.rotation.x = -Math.sin(t * 0.18) * 0.3
    }
  })

  return (
    <group>
      {/* Ring 1 - Equator */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.85, 0.007, 16, 120]} />
        <meshBasicMaterial color="#F5D77A" transparent opacity={0.5} />
      </mesh>

      {/* Ring 2 - Tilted */}
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.1, 0.006, 16, 120]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.38} />
      </mesh>

      {/* Ring 3 - Outer ambient */}
      <mesh ref={ring3} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.35, 0.004, 16, 120]} />
        <meshBasicMaterial color="#9A7B1E" transparent opacity={0.28} />
      </mesh>
    </group>
  )
}

/**
 * Atmospheric Golden Micro-Dust that floats in zero-gravity
 */
function GoldDust({ count = 200 }) {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 1.4 + Math.random() * 3.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.8
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  const texture = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 32
    c.height = 32
    const ctx = c.getContext('2d')
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    g.addColorStop(0, 'rgba(255, 245, 215, 1)')
    g.addColorStop(0.3, 'rgba(245, 215, 122, 0.7)')
    g.addColorStop(1, 'rgba(212, 175, 55, 0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 32, 32)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.03
    pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.06
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.06}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#F5D77A"
        opacity={0.8}
      />
    </points>
  )
}

/**
 * Main 3D Composition
 */
function Scene({ modeIndex, quality = 'high' }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (!group.current) return
    // Smooth weighted mouse parallax
    group.current.rotation.y = damp(group.current.rotation.y, state.pointer.x * 0.35, 2.8, delta)
    group.current.rotation.x = damp(group.current.rotation.x, -state.pointer.y * 0.28, 2.8, delta)
  })

  const dustCount = quality === 'mid' ? 120 : 220

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 6]} intensity={1.8} color="#FFF8E7" />
      <pointLight position={[-6, -3, 3]} intensity={1.2} color="#9A7B1E" />
      <pointLight position={[6, 3, -4]} intensity={1.4} color="#F5D77A" />

      <group ref={group}>
        <KineticGoldRibbon modeIndex={modeIndex} />
        <LuminousCore modeIndex={modeIndex} />
        <OrbitalRings />
        <GoldDust count={dustCount} />
      </group>

      <Environment resolution={quality === 'mid' ? 128 : 256} frames={1}>
        <color attach="background" args={['#000000']} />
        <Lightformer intensity={2.4} color="#FFF5D6" position={[0, 6, -6]} scale={[12, 6, 1]} />
        <Lightformer intensity={1.8} color="#F5D77A" position={[-8, 0, -1]} rotation-y={Math.PI / 2} scale={[10, 6, 1]} />
        <Lightformer intensity={1.8} color="#9A7B1E" position={[8, 0, -1]} rotation-y={-Math.PI / 2} scale={[10, 6, 1]} />
        <Lightformer form="ring" intensity={2.6} color="#D4AF37" position={[0, 0, 6]} scale={4.5} />
      </Environment>

      <EffectComposer disableNormalPass multisampling={quality === 'mid' ? 0 : 2}>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.5}
          mipmapBlur
          radius={0.7}
        />
        <Vignette eskil={false} offset={0.2} darkness={0.85} />
      </EffectComposer>
    </>
  )
}

export default function HeroScene({ modeIndex, quality = 'high' }) {
  const dpr = quality === 'mid' ? [1, 1.3] : [1, 1.8]

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: quality !== 'mid', alpha: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 5.8], fov: 42 }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000000', 1)
      }}
    >
      <Scene modeIndex={modeIndex} quality={quality} />
    </Canvas>
  )
}
