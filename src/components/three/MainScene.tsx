import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { FloatingScene } from './FloatingScene';

export const MainScene = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <FloatingScene />
          <Preload all />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
    </div>
  );
};
