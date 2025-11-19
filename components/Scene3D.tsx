import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Custom Shader Material for the Background (Red Matrix/Circuitry)
const BackgroundShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0.8, 0.0, 0.0) }, // Blood Red
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
    varying vec2 vUv;

    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
        vec2 uv = vUv;
        
        // Digital rain effect
        float rainSpeed = 2.0;
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

        gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const Background = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const shaderArgs = useMemo(() => ({
    uniforms: BackgroundShaderMaterial.uniforms,
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

const Monolith = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Gentle rotation
      group.current.rotation.y += 0.005;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
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
    color: '#ff0000',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  return (
    <group ref={group}>
      {/* The Cube */}
      <mesh>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial 
            color="#050505" 
            roughness={0.2} 
            metalness={0.8}
            emissive="#1a0000"
            emissiveIntensity={0.2}
        />
      </mesh>

      {/* Glowing Edges (simulated with slightly larger wireframe) */}
      <mesh>
        <boxGeometry args={[2.02, 3.02, 2.02]} />
        <meshBasicMaterial color="#ff0000" wireframe opacity={0.1} transparent />
      </mesh>

      {/* Face 1: Front */}
      <Text position={[0, 0.5, 1.01]} {...textProps}>
        BLACK
      </Text>
      <Text position={[0, -0.5, 1.01]} {...textProps}>
        BYT3
      </Text>

      {/* Face 2: Right */}
      <Text position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} {...textProps} fontSize={0.15}>
        SILENT. SWIFT. SECURE.
      </Text>

      {/* Face 3: Back */}
      <Text position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]} {...textProps} fontSize={0.15}>
        JOIN THE HIVE
      </Text>

      {/* Face 4: Left */}
      <Text position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} {...textProps} fontSize={0.15}>
        WE HUNT.
      </Text>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none md:pointer-events-auto">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff0000" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={1} />
        
        <Background />
        <Monolith />
      </Canvas>
    </div>
  );
};

export default Scene3D;
