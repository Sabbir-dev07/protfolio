import React, { useEffect } from 'react';
import StarBackground from '@/components/common/StarBackground';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/common/ScrollProgress';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-dark text-white overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <ScrollProgress />
      
      <main className="relative z-10 w-full flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
