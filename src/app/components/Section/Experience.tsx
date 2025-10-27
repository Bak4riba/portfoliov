'use client';

import Section from '../Layout/Section';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Wayne Enterprises",
    period: "2020 - Present",
    description: "Leading development of enterprise applications and cybersecurity solutions for Gotham City. Managing a team of 8 developers and implementing cutting-edge technologies.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    title: "Frontend Developer",
    company: "Gotham Tech",
    period: "2018 - 2020", 
    description: "Built responsive web applications and implemented modern UI/UX practices. Collaborated with design teams to create intuitive user interfaces.",
    technologies: ["JavaScript", "React", "SASS", "REST APIs", "Jest"]
  },
  {
    title: "Junior Developer",
    company: "Batcave Labs",
    period: "2016 - 2018",
    description: "Started my journey learning the fundamentals and working on small projects. Gained experience in various technologies and development methodologies.",
    technologies: ["HTML/CSS", "JavaScript", "Python", "MySQL", "Git"]
  }
];

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">My Journey</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-gray-800 p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:-translate-y-1"
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
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}