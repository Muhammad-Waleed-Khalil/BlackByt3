'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface VaultDoor3DProps {
  isExploded: boolean
  explosionProgress: number
}

const VaultDoor3D: React.FC<VaultDoor3DProps> = ({ isExploded, explosionProgress }) => {
  const doorPiecesRef = useRef<THREE.Group>(null)

  // Create vault door pieces (9 panels that will explode outward)
  const doorPieces = useMemo(() => {
    const pieces = []
    const pieceSize = 0.6
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        pieces.push({
          position: [x * pieceSize, y * pieceSize, 0] as [number, number, number],
          velocity: [
            (Math.random() - 0.5) * 15 + x * 5,
            (Math.random() - 0.5) * 15 + y * 5,
            (Math.random() * 10 + 5)
          ],
          rotation: [
            (Math.random() - 0.5) * Math.PI * 4,
            (Math.random() - 0.5) * Math.PI * 4,
            (Math.random() - 0.5) * Math.PI * 4
          ],
          rotationSpeed: [
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3
          ],
          isCenter: x === 0 && y === 0
        })
      }
    }
    return pieces
  }, [])

  useFrame(() => {
    if (!doorPiecesRef.current || !isExploded) return

    doorPiecesRef.current.children.forEach((piece, i) => {
      const pieceData = doorPieces[i]
      const mesh = piece as THREE.Mesh

      // Apply explosion transformation
      const progress = Math.min(explosionProgress / 1000, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      mesh.position.x = pieceData.position[0] + pieceData.velocity[0] * easeOut
      mesh.position.y = pieceData.position[1] + pieceData.velocity[1] * easeOut
      mesh.position.z = pieceData.position[2] + pieceData.velocity[2] * easeOut

      mesh.rotation.x = pieceData.rotation[0] * easeOut
      mesh.rotation.y = pieceData.rotation[1] * easeOut
      mesh.rotation.z = pieceData.rotation[2] * easeOut

      // Fade out pieces
      if (mesh.material && 'opacity' in mesh.material) {
        mesh.material.opacity = Math.max(0, 1 - progress * 1.5)
      }
    })
  })

  return (
    <group ref={doorPiecesRef}>
      {doorPieces.map((piece, i) => (
        <mesh key={i} position={piece.position}>
          <boxGeometry args={[0.55, 0.55, 0.1]} />
          <meshStandardMaterial
            color={piece.isCenter ? '#ff0000' : '#1a1a1a'}
            metalness={0.9}
            roughness={0.2}
            emissive={piece.isCenter ? '#ff0000' : '#330000'}
            emissiveIntensity={piece.isCenter ? 0.5 : 0.1}
            transparent
            opacity={1}
          />
          {/* Red lights on edges */}
          {!piece.isCenter && (
            <>
              <mesh position={[0.25, 0.25, 0.06]}>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshBasicMaterial color="#ff0000" />
              </mesh>
              <mesh position={[-0.25, -0.25, 0.06]}>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshBasicMaterial color="#ff0000" />
              </mesh>
            </>
          )}
        </mesh>
      ))}

      {/* Central lock mechanism (explodes outward) */}
      {!isExploded && (
        <group position={[0, 0, 0.1]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
            <meshStandardMaterial
              color="#880000"
              metalness={1}
              roughness={0.1}
              emissive="#ff0000"
              emissiveIntensity={0.8}
            />
          </mesh>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[0.2, 0.02, 16, 32]} />
            <meshStandardMaterial
              color="#ff0000"
              emissive="#ff0000"
              emissiveIntensity={1}
            />
          </mesh>
        </group>
      )}
    </group>
  )
}

export default VaultDoor3D
