import React from 'react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-48 h-48 md:w-80 md:h-80 relative shrink-0">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>
          
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              {personalInfo.title}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 mb-8">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
