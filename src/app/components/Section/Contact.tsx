'use client';

import { useState } from 'react';
import Section from '../Layout/Section';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email
    console.log('Form submitted:', formData);
    alert('Bat-Signal sent! I will contact you soon. 🦇');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Send The Bat-Signal</h2>
        <p className="text-gray-300 mb-12 text-xl">
          Ready to fight crime in the digital world? Let&apos;s talk.
        </p>

        <div className="bg-gray-800 p-8 rounded-xl border border-yellow-400/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                required
              />
            </div>
            <textarea 
              name="message"
              placeholder="Your Message to Batman..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
              required
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              🦇 Send Bat-Signal 🦇
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-white font-bold mb-6">Find me in the shadows</h3>
            <div className="flex justify-center space-x-6">
              {[
                { icon: '📧', label: 'Email', link: 'mailto:your-email@example.com' },
                { icon: '💼', label: 'LinkedIn', link: 'https://linkedin.com' },
                { icon: '🐙', label: 'GitHub', link: 'https://github.com' },
                { icon: '🐦', label: 'Twitter', link: 'https://twitter.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 group"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}