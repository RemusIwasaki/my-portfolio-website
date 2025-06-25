
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              James
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            A passionate Software Engineer crafting digital solutions with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
