import { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

// Lazy load components below the fold
const Projects = lazy(() => import('./components/Projects'));
const Console = lazy(() => import('./components/Console'));
const Experience = lazy(() => import('./components/Experience'));
const Stack = lazy(() => import('./components/Stack'));
const GitHub = lazy(() => import('./components/GitHub'));
const About = lazy(() => import('./components/About'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (!isMounted) {
    return <Loader onComplete={handleLoadComplete} />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <CustomCursor />
        <Navigation />
        <Hero />
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Console />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Stack />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <GitHub />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
