import { Environment, Lightformer, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { useRef } from 'react'
import * as THREE from 'three'

function Bottle() {
  const group = useRef()
  const liquid = useRef()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.45
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06
    }
    if (liquid.current) {
      liquid.current.material.emissiveIntensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.25
    }
  })

  return (
    <group ref={group} position={[0, -0.15, 0]}>
      {/* Pedestal ring */}
      <mesh position={[0, -1.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.022, 32, 64]} />
        <meshStandardMaterial
          color="#9a7b1e"
          metalness={1}
          roughness={0.22}
          emissive="#f5d77a"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.46, 0.46, 1.5, 48, 1, true]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.18}
          envMapIntensity={1.6}
          emissive="#7a5c10"
          emissiveIntensity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.465, 0.465, 1.52, 48, 1, false]} />
        <meshStandardMaterial
          color="#f4efe6"
          transparent
          opacity={0.08}
          roughness={0.15}
          metalness={0.3}
        />
      </mesh>

      {/* Label band */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.468, 0.468, 0.5, 48, 1, true]} />
        <meshStandardMaterial
          color="#050505"
          metalness={0.4}
          roughness={0.55}
          emissive="#d4af37"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Liquid */}
      <mesh ref={liquid} position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.9, 48, 1, true]} />
        <meshStandardMaterial
          color="#f5d77a"
          transparent
          opacity={0.18}
          emissive="#f5d77a"
          emissiveIntensity={0.9}
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>

      {/* Shoulder (taper) */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.16, 0.46, 0.3, 48, 1, false]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
          envMapIntensity={1.6}
          emissive="#7a5c10"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.22, 48, 1, false]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
          emissive="#7a5c10"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Collar */}
      <mesh position={[0, 1.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.19, 0.028, 24, 64]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.22}
          emissive="#f5d77a"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Cap body */}
      <mesh position={[0, 1.36, 0]}>
        <cylinderGeometry args={[0.19, 0.19, 0.44, 48, 1, false]} />
        <meshStandardMaterial
          color="#9a7b1e"
          metalness={1}
          roughness={0.24}
          emissive="#f5d77a"
          emissiveIntensity={0.16}
        />
      </mesh>

      {/* Cap ring */}
      <mesh position={[0, 1.16, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.04, 48, 1, false]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
          emissive="#f5d77a"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Pipette */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.0, 32, 1, false]} />
        <meshStandardMaterial
          color="#f4efe6"
          transparent
          opacity={0.25}
          roughness={0.08}
          metalness={0.2}
        />
      </mesh>

      {/* Bulb */}
      <mesh position={[0, 1.62, 0]}>
        <sphereGeometry args={[0.12, 32, 24]} />
        <meshStandardMaterial
          color="#f5d77a"
          metalness={1}
          roughness={0.16}
          emissive="#d4af37"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Accent rings on body */}
      <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.46, 0.006, 16, 96]} />
        <meshStandardMaterial color="#f5d77a" transparent opacity={0.25} />
      </mesh>
      <mesh position={[0, -0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.46, 0.006, 16, 96]} />
        <meshStandardMaterial color="#d4af37" transparent opacity={0.22} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#fff4d6" />
      <pointLight position={[-5, -2, 4]} intensity={1.1} color="#9a7b1e" />
      <pointLight position={[5, 3, -4]} intensity={1.2} color="#f5d77a" />

      <group>
        <Bottle />
        <Sparkles count={40} scale={[6, 5, 5]} size={3} speed={0.25} color="#f5d77a" opacity={0.45} />
      </group>

      <Environment resolution={256} frames={1}>
        <color attach="background" args={['#050505']} />
        <Lightformer intensity={2} color="#fff2cc" position={[0, 5, -6]} scale={[10, 5, 1]} />
        <Lightformer intensity={1.6} color="#f5d77a" position={[-7, 0, -1]} rotation-y={Math.PI / 2} scale={[9, 5, 1]} />
        <Lightformer intensity={1.6} color="#9a7b1e" position={[7, 0, -1]} rotation-y={-Math.PI / 2} scale={[9, 5, 1]} />
        <Lightformer intensity={1.8} color="#ffffff" position={[0, -5, 3]} rotation-x={Math.PI / 2} scale={[10, 10, 1]} />
        <Lightformer form="ring" intensity={2.4} color="#d4af37" position={[0, 0, 6]} scale={3.6} />
      </Environment>

      <EffectComposer disableNormalPass>
        <Bloom intensity={0.8} luminanceThreshold={0.36} luminanceSmoothing={0.45} mipmapBlur radius={0.68} />
        <Vignette eskil={false} offset={0.18} darkness={0.88} />
      </EffectComposer>
    </>
  )
}

export default function SerumBottle({ quality = 'high' }) {
  const dpr = quality === 'mid' ? [1, 1.3] : [1, 1.8]

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 4.4], fov: 38 }}
    >
      <Scene />
    </Canvas>
  )
}
