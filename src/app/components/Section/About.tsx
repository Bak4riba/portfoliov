'use client';

import Section from '../Layout/Section';

export default function About() {
  return (
    <Section id="about" background="alternate">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center">About The Batman</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bruce Wayne */}
          <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">Bruce Wayne</h3>
            <p className="text-gray-300 mb-4">
              By day, I&apos;m a tech entrepreneur focused on innovative solutions for Gotham&apos;s digital infrastructure. 
              With years of experience in software development and team leadership.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>🎓 Computer Science Degree</li>
              <li>💼 5+ years in Tech Industry</li>
              <li>🚀 Startup Experience</li>
              <li>🎯 Project Management</li>
              <li>🌐 International Experience</li>
            </ul>
          </div>

          {/* Batman */}
          <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Batman Skills</h3>
            <p className="text-gray-300 mb-4">
              By night, I protect Gotham&apos;s digital world from cyber threats and build robust, scalable applications.
            </p>
            <div className="grid grid-cols-1 gap-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>🦇</span>
                <span>Full Stack Development (React, Node.js, Next.js)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Cybersecurity & Best Practices</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>Performance Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🎨</span>
                <span>UI/UX Design & Responsive Layouts</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚀</span>
                <span>DevOps & Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}