import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingSphere = ({ position, color, size, speed, distort }: any) => {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const CodeSymbol = ({ position, rotation, speed }: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * speed) * 0.005;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#38bdf8" wireframe />
    </mesh>
  );
};

export const FloatingScene = () => {
  const count = 15;
  const objects = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ],
      color: i % 2 === 0 ? "#38bdf8" : "#818cf8",
      size: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 2 + 1,
      distort: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#818cf8" />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

      {objects.map((obj, i) => (
        <FloatingSphere key={i} {...obj} />
      ))}
      
      <CodeSymbol position={[2, 2, -2]} rotation={[0.5, 0.5, 0]} speed={1} />
      <CodeSymbol position={[-3, -1, -3]} rotation={[0, 0, 0.5]} speed={1.5} />
      <CodeSymbol position={[0, -3, -1]} rotation={[0.8, 0, 0.2]} speed={0.8} />
    </>
  );
};
