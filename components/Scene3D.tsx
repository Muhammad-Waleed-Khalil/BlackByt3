import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  isRedpill: boolean;
}

// Custom Shader Material for the Background (Red Matrix/Circuitry)
const BackgroundShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0.8, 0.0, 0.0) }, // Blood Red
    uRedpill: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uRedpill;
    varying vec2 vUv;

    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
        vec2 uv = vUv;
        
        // Redpill distortion
        if (uRedpill > 0.5) {
          uv.x += sin(uv.y * 10.0 + uTime) * 0.02;
        }
        
        // Digital rain effect
        float rainSpeed = uRedpill > 0.5 ? 5.0 : 2.0;
        float columns = 40.0;
        vec2 gridUv = uv * vec2(columns, 1.0);
        vec2 cellId = floor(gridUv);
        
        float t = uTime * rainSpeed + random(vec2(cellId.x, 0.0)) * 100.0;
        float y = fract(gridUv.y + t);
        
        // Drop tail fade
        float drop = step(0.9, 1.0 - y) * step(0.1, random(cellId + floor(t)));
        
        // Circuitry pulses (Horizontal)
        float pulseSpeed = 0.5;
        float pulseY = fract(uv.y * 10.0 + uTime * pulseSpeed);
        float line = step(0.98, pulseY) * step(0.5, random(vec2(floor(uv.y * 10.0), 0.0)));
        
        // Combine
        float brightness = drop + (line * 0.5);
        
        // Vignette
        float dist = distance(uv, vec2(0.5));
        float vignette = 1.0 - smoothstep(0.2, 1.2, dist);

        vec3 finalColor = uColor * brightness * vignette;
        
        // Base darkness
        finalColor += vec3(0.02, 0.0, 0.0);
        
        if (uRedpill > 0.5) {
           finalColor += vec3(0.1, 0.0, 0.0); // Add overall red tint
        }

        gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const Background = ({ isRedpill }: { isRedpill: boolean }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
      material.current.uniforms.uRedpill.value = isRedpill ? 1.0 : 0.0;
    }
  });

  const shaderArgs = useMemo(() => ({
    uniforms: { ...BackgroundShaderMaterial.uniforms, uRedpill: { value: 0.0 } },
    vertexShader: BackgroundShaderMaterial.vertexShader,
    fragmentShader: BackgroundShaderMaterial.fragmentShader,
  }), []);

  return (
    <mesh ref={mesh} scale={[20, 20, 1]} position={[0, 0, -5]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial ref={material} args={[shaderArgs]} transparent />
    </mesh>
  );
};

const Monolith = ({ isRedpill }: { isRedpill: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const [cracked, setCracked] = useState(false);
  
  useFrame((state) => {
    if (group.current) {
      // Gentle rotation or crazy spin on redpill
      const speed = isRedpill ? 0.02 : 0.005;
      group.current.rotation.y += speed;
      
      if (!isRedpill) {
         group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
      
      // Mouse interaction
      const x = state.pointer.x;
      const y = state.pointer.y;
      group.current.rotation.y += x * 0.05;
      group.current.rotation.x += -y * 0.05;
    }
  });

  const textProps = {
    font: 'https://fonts.gstatic.com/s/unicaone/v10/DPEuYwSHqSbpSg9cW1dK.woff',
    fontSize: 0.3,
    color: isRedpill ? '#ff0000' : '#ff0000',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };
  
  // Expand parts if cracked
  const expansion = cracked ? 0.5 : 0;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={group} onClick={() => setCracked(!cracked)}>
        {/* Core */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 2.8, 1.8]} />
           <meshStandardMaterial 
              color="#000000" 
              emissive="#220000"
              emissiveIntensity={isRedpill ? 1 : 0.2}
          />
        </mesh>
        
        {/* Face 1 (Front) */}
        <group position={[0, 0, expansion]}>
           <mesh position={[0, 0, 1]}>
             <boxGeometry args={[2, 3, 0.1]} />
             <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
           </mesh>
           <Text position={[0, 0.5, 1.06]} {...textProps}>BLACK</Text>
           <Text position={[0, -0.5, 1.06]} {...textProps}>BYT3</Text>
        </group>

        {/* Face 2 (Right) */}
        <group position={[expansion, 0, 0]} rotation={[0, Math.PI/2, 0]}>
          <mesh position={[0, 0, 1]}>
             <boxGeometry args={[2, 3, 0.1]} />
             <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
           </mesh>
          <Text position={[0, 0, 1.06]} {...textProps} fontSize={0.15}>SILENT. SWIFT. SECURE.</Text>
        </group>

        {/* Face 3 (Back) */}
        <group position={[0, 0, -expansion]} rotation={[0, Math.PI, 0]}>
           <mesh position={[0, 0, 1]}>
             <boxGeometry args={[2, 3, 0.1]} />
             <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
           </mesh>
           <Text position={[0, 0, 1.06]} {...textProps} fontSize={0.15}>JOIN THE HIVE</Text>
        </group>

        {/* Face 4 (Left) */}
        <group position={[-expansion, 0, 0]} rotation={[0, -Math.PI/2, 0]}>
           <mesh position={[0, 0, 1]}>
             <boxGeometry args={[2, 3, 0.1]} />
             <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
           </mesh>
           <Text position={[0, 0, 1.06]} {...textProps} fontSize={0.15}>WE HUNT.</Text>
        </group>
        
        {/* Wireframe Overlay */}
        <mesh>
          <boxGeometry args={[2.05, 3.05, 2.05]} />
          <meshBasicMaterial color="#ff0000" wireframe opacity={0.1} transparent />
        </mesh>
      </group>
    </Float>
  );
};

const Scene3D: React.FC<SceneProps> = ({ isRedpill }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none md:pointer-events-auto transition-all duration-1000">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff0000" intensity={isRedpill ? 5 : 2} />
        <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={1} />
        
        <Background isRedpill={isRedpill} />
        <Monolith isRedpill={isRedpill} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
