import React from 'react';
import { experiences } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Experience {
  id: number;
  type: string;
  title: string;
  institution: string;
  description: string;
  date: string;
}

const TimelineItem = ({ exp, isEven }: { exp: Experience, index: number, isEven: boolean }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={elementRef}
      className={`relative flex items-center justify-between mb-12 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Content */}
      <div className="w-full md:w-5/12 ml-12 md:ml-0">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-3">
            {exp.type === 'education' ? '教育经历' : exp.type === 'work' ? '工作经历' : '项目经历'}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
          <div className="text-gray-500 text-sm mb-3 font-medium">{exp.institution}</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>

      {/* Center Dot */}
      <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow transform -translate-x-1/2 transition-transform duration-500 delay-300 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>

      {/* Date */}
      <div className={`w-full md:w-5/12 hidden md:block ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
        <div className="text-lg font-bold text-primary font-mono">{exp.date}</div>
      </div>

      {/* Mobile Date (visible only on small screens) */}
      <div className="absolute top-[-30px] left-12 md:hidden">
        <span className="text-sm font-bold text-primary font-mono bg-gray-50 px-2">{exp.date}</span>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-16 text-center font-serif">经历时间线</h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
