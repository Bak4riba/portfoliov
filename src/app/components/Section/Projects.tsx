'use client';

import Section from '../Layout/Section';

interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Bat-Signal Platform",
    description: "Emergency alert system for Gotham City with real-time notifications and secure communication channels.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    image: "🦇",
    link: "#"
  },
  {
    name: "Wayne Enterprise Dashboard",
    description: "Business intelligence and analytics platform for monitoring company performance and metrics.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    image: "💼",
    link: "#"
  },
  {
    name: "Gotham Map",
    description: "Real-time crime tracking and prevention system with interactive maps and data visualization.",
    tech: ["React Native", "Firebase", "Maps API", "Redis"],
    image: "🗺️",
    link: "#"
  },
  {
    name: "Batmobile Control",
    description: "IoT system for vehicle management, diagnostics, and remote control capabilities.",
    tech: ["Python", "Raspberry Pi", "WebRTC", "MQTT"],
    image: "🚗",
    link: "#"
  },
  {
    name: "Alfred AI Assistant",
    description: "Voice-activated personal assistant and home automation system with natural language processing.",
    tech: ["Python", "NLP", "Home Assistant", "FastAPI"],
    image: "🤖",
    link: "#"
  },
  {
    name: "GCPD Database",
    description: "Secure database system for Gotham Police Department with advanced encryption and access controls.",
    tech: ["Java", "Spring Boot", "Oracle DB", "OAuth2"],
    image: "👮",
    link: "#"
  }
];

export default function Projects() {
  return (
    <Section id="projects" background="alternate">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">Batcave Arsenal</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            <div className="p-6">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
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
    </Section>
  );
}