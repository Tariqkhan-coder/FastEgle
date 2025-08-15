import React, { useState, useEffect, useRef } from 'react';
import { StatsCounter } from './StatsCounter';
import { homeStats } from '../data/homeStats';

export const StatsSection = () => {
  const [visibleStats, setVisibleStats] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          homeStats.forEach((stat, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, stat.id]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
      {homeStats.map((stat, index) => {
        const isVisible = visibleStats.includes(stat.id);
        
        return (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center space-x-4 mb-2">

              <div 
                className="flex items-center justify-center flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20"
                dangerouslySetInnerHTML={{ __html: stat.icon }}
              />
              
              <div className="flex flex-col items-start text-left">
                <div className="mb-1">
                  <span className="text-4xl lg:text-5xl font-bold text-white">
                    <StatsCounter 
                      targetNumber={stat.number}
                      duration={stat.duration}
                      isDecimal={stat.isDecimal}
                    />
                  </span>
                </div>
                
                <div>
                  <p className="text-sm lg:text-base text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative mt-2 w-full max-w-[180px]">
              <div 
                className={`h-1 bg-orange-400 transition-all duration-1000 ease-out ${
                  isVisible ? 'w-full' : 'w-0'
                }`}
                style={{
                  transitionDelay: `${index * 200 + 2000}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
