'use client';

import { useState } from 'react';
import Navigation from './components/Layout/Navigation';
import Hero from '../app/components/Section/Hero';
import About from '../app/components/Section/About';
import Experience from '../app/components/Section/Experience';
import Projects from '../app/components/Section/Projects';
import Contact from '../app/components/Section/Contact';  
export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-800">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}