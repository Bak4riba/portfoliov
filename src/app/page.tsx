'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-yellow-400/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Batman */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2 L1,21 L6,21 L8,14 L16,14 L18,21 L23,21 L12,2 Z M12,10 L12,14 M9,14 L15,14"/>
                </svg>
              </div>
              <span className="text-yellow-400 font-bold text-xl">DEV-BATMAN</span>
            </div>

            {/* Menu Links */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 🦇 HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          {/* Bat-Símbolo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 opacity-30 animate-pulse"></div>
              <div className="relative w-24 h-24 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-2xl">
                  <path d="M12,2 L1,21 L6,21 L8,14 L16,14 L18,21 L23,21 L12,2 Z M12,10 L12,14 M9,14 L15,14"/>
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-yellow-400">THE DARK KNIGHT</span>
            <br />
            <span className="text-3xl md:text-5xl">DEVELOPER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I am vengeance, I am the night, I am a Full Stack Developer protecting Gothams digital world.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* 💼 SOBRE MIM */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">About The Batman</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Bruce Wayne */}
              <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Bruce Wayne</h3>
                <p className="text-gray-300 mb-4">
                  By day, I&apos;m a tech entrepreneur focused on innovative solutions for Gothams digital infrastructure. 
                  With years of experience in software development and team leadership.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>🎓 Computer Science Degree</li>
                  <li>💼 5+ years in Tech Industry</li>
                  <li>🚀 Startup Experience</li>
                  <li>🎯 Project Management</li>
                </ul>
              </div>

              {/* Batman */}
              <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Batman Skills</h3>
                <p className="text-gray-300 mb-4">
                  By night, I protect Gothams digital world from cyber threats and build robust, scalable applications.
                </p>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>🦇 Full Stack Development</div>
                  <div>🔒 Cybersecurity</div>
                  <div>⚡ Performance Optimization</div>
                  <div>🎨 UI/UX Design</div>
                  <div>🚀 DevOps & Cloud</div>
                  <div>📱 Mobile Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 EXPERIÊNCIAS */}
      <section id="experience" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">My Journey</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Wayne Enterprises",
                period: "2020 - Present",
                description: "Leading development of enterprise applications and cybersecurity solutions for Gotham City."
              },
              {
                title: "Frontend Developer",
                company: "Gotham Tech",
                period: "2018 - 2020", 
                description: "Built responsive web applications and implemented modern UI/UX practices."
              },
              {
                title: "Junior Developer",
                company: "Batcave Labs",
                period: "2016 - 2018",
                description: "Started my journey learning the fundamentals and working on small projects."
              }
            ].map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-yellow-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 PROJETOS */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">Batcave Arsenal</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Bat-Signal Platform",
                description: "Emergency alert system for Gotham City",
                tech: ["React", "Node.js", "WebSockets"],
                image: "🦇"
              },
              {
                name: "Wayne Enterprise Dashboard",
                description: "Business intelligence and analytics platform",
                tech: ["Next.js", "TypeScript", "PostgreSQL"],
                image: "💼"
              },
              {
                name: "Gotham Map",
                description: "Real-time crime tracking and prevention system",
                tech: ["React Native", "Firebase", "Maps API"],
                image: "🗺️"
              },
              {
                name: "Batmobile Control",
                description: "IoT system for vehicle management and diagnostics",
                tech: ["Python", "Raspberry Pi", "WebRTC"],
                image: "🚗"
              },
              {
                name: "Alfred AI Assistant",
                description: "Voice-activated personal assistant and home automation",
                tech: ["Python", "NLP", "Home Assistant"],
                image: "🤖"
              },
              {
                name: "GCPD Database",
                description: "Secure database system for Gotham Police Department",
                tech: ["Java", "Spring Boot", "Oracle DB"],
                image: "👮"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CONTATO */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Send The Bat-Signal</h2>
            <p className="text-gray-300 mb-12 text-xl">
              Ready to fight crime in the digital world? Let talk.
            </p>

            <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  />
                </div>
                <textarea 
                  placeholder="Your Message to Batman..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                  🦇 Send Bat-Signal 🦇
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="flex justify-center space-x-8">
                  {['📧', '💼', '🐙', '🐦'].map((icon, index) => (
                    <div 
                      key={index}
                      className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
