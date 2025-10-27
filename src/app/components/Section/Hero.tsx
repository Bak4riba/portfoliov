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
        {/* Background com efeito de Gotham */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10">
          {/* Bat-Símbolo */}
          <div className="mb-12 flex justify-center">
            <BatSymbol size={24} className="text-yellow-400" withEffects={false} />
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
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              View My Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}