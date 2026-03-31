import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { MainScene } from './components/three/MainScene';
import { CustomCursor } from './components/common/CustomCursor';
import { LoadingScreen } from './components/common/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <MainScene />
          <Navbar />
          
          <main className="relative z-10 w-full overflow-x-hidden">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          
          {/* Subtle noise texture */}
          <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] contrast-150 brightness-150 mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
