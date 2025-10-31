'use client';

import BatSymbol from '../UI/Symbol';
import Section from '../Layout/Section';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({  }: HeroProps) {
  return (
    <Section id="home" className="pt-20">
      <div className="">
        
        <div className="relative z-10">
          {/* Bat-Símbolo */}
          <div className="mb-12 flex justify-center">
            <BatSymbol size={24} className="text-yellow-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-yellow-400">MATHEUS BAKAUS</span>
            <br />
            <span className="text-3xl md:text-5xl">WEB DEVELOPER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl ">
              React | TypeScript | Next.js 
          </p>

          <div className="flex gap-4 flex-wrap md:text-2xl">
            Olá! Sou Matheus Bakaus, um desenvolvedor web apaixonado por criar experiências digitais incríveis.
            Com habilidades em React, TypeScript e Next.js, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos inovadores. 
            Vamos construir algo incrível juntos!
          </div>


        </div>
      </div>
    </Section>
  );
}