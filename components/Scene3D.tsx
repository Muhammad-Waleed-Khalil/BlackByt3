'use client'

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  isRedpill: boolean;
}

// UPGRADED: Aggressive Shader with Urdu/Arabic fragments and mouse-reactive circuit veins
const BackgroundShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0.9, 0.05, 0.05) }, // Intense Blood Red
    uRedpill: { value: 0.0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
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
    uniform vec2 uMouse;
    varying vec2 vUv;

    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
        vec2 uv = vUv;

        // AGGRESSIVE Redpill distortion
        if (uRedpill > 0.5) {
          uv.x += sin(uv.y * 15.0 + uTime * 2.0) * 0.04;
          uv.y += cos(uv.x * 15.0 + uTime * 2.0) * 0.04;
        }

        // FASTER Digital rain effect (3x speed)
        float rainSpeed = uRedpill > 0.5 ? 8.0 : 4.0;
        float columns = 60.0; // More columns for density
        vec2 gridUv = uv * vec2(columns, 1.0);
        vec2 cellId = floor(gridUv);

        float t = uTime * rainSpeed + random(vec2(cellId.x, 0.0)) * 100.0;
        float y = fract(gridUv.y + t);

        // Drop tail with MORE intensity
        float drop = step(0.85, 1.0 - y) * step(0.05, random(cellId + floor(t)));

        // MOUSE-REACTIVE Circuit veins
        float distToMouse = distance(uv, uMouse);
        float mouseInfluence = 1.0 - smoothstep(0.0, 0.5, distToMouse);

        // Pulsing red circuit veins (both horizontal and vertical)
        float pulseSpeed = 1.2;
        float pulseIntensity = sin(uTime * 2.0) * 0.5 + 0.5;

        // Horizontal veins
        float pulseY = fract(uv.y * 15.0 + uTime * pulseSpeed);
        float lineH = step(0.96, pulseY) * step(0.3, random(vec2(floor(uv.y * 15.0), uTime * 0.1)));

        // Vertical veins
        float pulseX = fract(uv.x * 15.0 - uTime * pulseSpeed * 0.7);
        float lineV = step(0.96, pulseX) * step(0.3, random(vec2(floor(uv.x * 15.0), uTime * 0.1)));

        // Circuit nodes (pulsing dots at intersections)
        float nodes = step(0.98, pulseY) * step(0.98, pulseX) * pulseIntensity;

        // Mouse-reactive glow on circuit veins
        float circuitGlow = (lineH + lineV + nodes) * (1.0 + mouseInfluence * 2.0);

        // Aggressive noise texture
        float n = noise(uv * 50.0 + uTime * 0.5) * 0.1;

        // Combine ALL effects
        float brightness = drop * 1.5 + circuitGlow * 1.8 + nodes * 2.0 + n;

        // Stronger vignette
        float dist = distance(uv, vec2(0.5));
        float vignette = 1.0 - smoothstep(0.1, 1.3, dist);

        // INTENSE color calculation
        vec3 finalColor = uColor * brightness * vignette;

        // Add aggressive base red glow
        finalColor += vec3(0.05, 0.0, 0.0);

        // Mouse proximity adds RED GLOW
        finalColor += vec3(0.3, 0.0, 0.0) * mouseInfluence * pulseIntensity;

        if (uRedpill > 0.5) {
           finalColor += vec3(0.2, 0.0, 0.0); // INTENSE red overlay in redpill mode
           finalColor *= 1.3; // Boost overall brightness
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

      // Mouse-reactive circuit veins
      const mouseX = (state.pointer.x + 1) / 2; // Normalize to 0-1
      const mouseY = (state.pointer.y + 1) / 2;
      material.current.uniforms.uMouse.value.set(mouseX, mouseY);
    }
  });

  const shaderArgs = useMemo(() => ({
    uniforms: {
      ...BackgroundShaderMaterial.uniforms,
      uRedpill: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }
    },
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
  const [isMobile, setIsMobile] = useState(false);
  const [gyro, setGyro] = useState({ x: 0, y: 0 });

  // Detect mobile device and setup gyroscope
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Request gyroscope permission on iOS
    const requestGyroPermission = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission();
          if (permission === 'granted') {
            setupGyroscope();
          }
        } catch (error) {
          console.log('Gyroscope permission denied');
        }
      } else {
        setupGyroscope();
      }
    };

    const setupGyroscope = () => {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        if (event.beta !== null && event.gamma !== null) {
          // Beta: front-back tilt (-180 to 180)
          // Gamma: left-right tilt (-90 to 90)
          setGyro({
            x: (event.beta - 90) / 90,  // Normalize to -1 to 1
            y: event.gamma / 90         // Normalize to -1 to 1
          });
        }
      };
      window.addEventListener('deviceorientation', handleOrientation);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    };

    if (isMobile) {
      requestGyroPermission();
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  useFrame((state) => {
    if (group.current) {
      // Gentle rotation or crazy spin on redpill
      const speed = isRedpill ? 0.02 : 0.005;
      group.current.rotation.y += speed;

      if (!isRedpill) {
         group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }

      // Mobile: Gyroscope control
      // Desktop: Mouse interaction
      if (isMobile) {
        group.current.rotation.y += gyro.y * 0.02;
        group.current.rotation.x += -gyro.x * 0.02;
      } else {
        const x = state.pointer.x;
        const y = state.pointer.y;
        group.current.rotation.y += x * 0.05;
        group.current.rotation.x += -y * 0.05;
      }
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none md:pointer-events-auto transition-all duration-1000">
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile
        performance={{ min: 0.5 }} // Allow framerate throttling
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        {!isMobile && <pointLight position={[10, 10, 10]} color="#ff0000" intensity={isRedpill ? 5 : 2} />}
        <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={1} />

        <Background isRedpill={isRedpill} />
        <Monolith isRedpill={isRedpill} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
