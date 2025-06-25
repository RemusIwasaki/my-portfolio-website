
import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Problem Solving",
      description: "Creative solutions to complex challenges"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Player",
      description: "Collaborative approach to development"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Fast Learner",
      description: "Quick adaptation to new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a dedicated software engineer with a passion for creating innovative solutions
            and a strong foundation in modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              With a strong foundation in computer science and hands-on experience in full-stack development,
              I bring both technical expertise and creative problem-solving to every project.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm passionate about writing clean, efficient code and staying up-to-date with the latest
              industry trends and best practices. My goal is to contribute to meaningful projects
              that make a positive impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{highlight.title}</h3>
                <p className="text-slate-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
