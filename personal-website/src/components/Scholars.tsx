import React from 'react';
import { scholars } from '../data';

const Scholars: React.FC = () => {
  return (
    <section id="scholars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center font-serif">致敬学者</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {scholars.map((scholar) => (
            <div key={scholar.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-100 relative group">
                <img 
                  src={scholar.image} 
                  alt={scholar.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{scholar.field}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{scholar.name}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">影响</h4>
                    <p className="text-sm text-gray-600 line-clamp-4">
                      {scholar.influence}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">推荐阅读</h4>
                    <p className="text-sm text-secondary font-medium italic">
                      {scholar.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scholars;
