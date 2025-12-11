import React from 'react';
import { values } from '../data';

const Values: React.FC = () => {
  const items = [
    { title: '核心理念', content: values.coreBelief, icon: '💡' },
    { title: '创作哲学', content: values.creativePhilosophy, icon: '🎭' },
    { title: '专业追求', content: values.professionalPursuit, icon: '🚀' },
  ];

  return (
    <section id="values" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center font-serif text-white">价值观与理念</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">{item.title}</h3>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-400/20 font-serif">"</span>
                <p className="text-gray-200 leading-relaxed relative z-10 pt-2">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
