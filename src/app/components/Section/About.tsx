'use client';

import Section from '../Layout/Section';

export default function About() {
  return (
    <Section id="about" background="alternate">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">Sobre mim</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bruce Wayne */}
          <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Educação e Ensino</h3>
            <p className="text-gray-300 mb-4">
              Sou professor de Física, Matemática e Programação, apaixonado por ensinar e compartilhar conhecimento.
            </p>
            <p className="text-gray-300 mb-4">
              Minhas qualificações em ensino incluem:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>🎓 Licenciatura em Física</li>
              <li>🎓 Pós graduação em Ciência e Tecnologia</li>
              <li>💼 2+ Lecionado em Escolas Estaduais do Paraná</li>
            </ul>
          </div>

          {/* Batman */}
          <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Desenvolvimento e TI</h3>
            <p className="text-gray-300 mb-4">
              Sou desenvolvedor full stack com experiência em diversas tecnologias e um forte foco em Desenvolvimento FrontEnd
            </p>
            <div className="grid grid-cols-1 gap-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>💻</span>
                <span>FrontEnd: Experiencias com projetos em ReactJS, Nextjs, Typescript</span>
              </div>
                            <div className="flex items-center space-x-2">
                <span>⚙️</span>
                <span>BackEnd: Experiencias com projetos como criação de APIs e toda a orquestra por baixo dos panos de um site</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>CIbersegurança e Boas práticas</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>+10 anos atuando com Infraestrutura de TI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🎨</span>
                <span>UI/UX Design & Layouts Responsivos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚀</span>
                <span>+10 anos de experiencia com Suporte Técnico </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}