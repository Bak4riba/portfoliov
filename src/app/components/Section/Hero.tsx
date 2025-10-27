'use client';

import BatSymbol from '../UI/Symbol';
import Section from '../Layout/Section';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <Section id="home" className="pt-20">
      <div className="text-center">
        
        <div className="relative z-10">
          {/* Bat-Símbolo */}
          <div className="mb-12 flex justify-center">
            <BatSymbol size={24} className="text-yellow-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-yellow-400">THE DARK KNIGHT</span>
            <br />
            <span className="text-3xl md:text-5xl">DEVELOPER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I am vengeance, I am the night, I am a Full Stack Developer protecting Gotham&apos;s digital world.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">

          </div>


        </div>
      </div>
    </Section>
  );
}