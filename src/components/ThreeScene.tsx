
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  Float,
  MeshDistortMaterial,
  Preload,
} from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { useWindowSize } from 'react-use';

interface ThreeSceneProps {
  color?: string;
}

const FloatingSphere = ({ position = [0, 0, 0], size = 1, speed = 1, distort = 0.4, color = '#8B5CF6' }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.005;
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    mesh.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.2;
  });

  useEffect(() => {
    if (!mesh.current) return;
    
    gsap.to(mesh.current.material, {
      distort: hovered ? distort + 0.2 : distort,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, [hovered, distort]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={mesh} 
        position={position as [number, number, number]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={0.8} 
          clearcoat={0.7} 
          clearcoatRoughness={0.2} 
          metalness={0.2}
          distort={distort} 
        />
      </mesh>
    </Float>
  );
};

const Background = () => {
  return (
    <>
      <color attach="background" args={['#08080c']} />
      <fog attach="fog" args={['#08080c', 8, 30]} />
    </>
  );
};

const Scene = () => {
  const group = useRef<THREE.Group>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  return (
    <group ref={group}>
      <FloatingSphere position={[-2, 0, 0]} size={1.2} speed={1.5} distort={0.3} color="#8B5CF6" />
      <FloatingSphere position={[2, 1, -2]} size={0.8} speed={2} distort={0.5} color="#00FFFF" />
      <FloatingSphere position={[0, -1, -1]} size={0.6} speed={1} distort={0.2} color="#FF00FF" />
      {!isMobile && (
        <>
          <FloatingSphere position={[3, -2, -3]} size={0.3} speed={3} distort={0.6} color="#8B5CF6" />
          <FloatingSphere position={[-3, 2, -2]} size={0.4} speed={2} distort={0.4} color="#FF00FF" />
        </>
      )}
    </group>
  );
};

export const ThreeScene = ({ color = '#8B5CF6' }: ThreeSceneProps) => {
  return (
    <Canvas className="fullscreen-canvas" camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.15} />
      <pointLight position={[-10, -10, -10]} color="#00FFFF" intensity={0.15} />
      <Background />
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Environment preset="night" />
      <Preload all />
    </Canvas>
  );
};
