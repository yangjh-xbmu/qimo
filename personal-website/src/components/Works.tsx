import React from 'react';
import { works } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Works: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="works" className="py-20 bg-white" ref={elementRef}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-primary mb-12 text-center font-serif transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>作品集</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {works.map((work, index) => (
            <div 
              key={work.id} 
              className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {work.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                    {work.title}
                  </h3>
                  <span className="text-gray-500 text-sm font-mono">{work.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {work.description}
                </p>
                
                <a 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-blue-700 font-medium transition-colors group-hover:translate-x-1 duration-300"
                  aria-label={`查看 ${work.title} 的详情`}
                >
                  查看详情
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
