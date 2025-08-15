import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
       once: false,
      mirror:true
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const current = testimonialsData[currentIndex];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 transition-all duration-300 ${
          i < rating
            ? 'fill-orange-400 text-orange-400 drop-shadow-lg'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
    
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Clients <span className='text-orange-400'>Feedback</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mt-4">
            Discover the extraordinary experiences our clients have shared with us
          </p>
        </div>

     
        <div className="relative max-w-5xl mx-auto">
          <div
            className="relative group cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            data-aos="fade-up"
            data-aos-delay="200"
          >
        
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border border-white/20 transition-all duration-700 ease-out transform hover:scale-[1.02] hover:shadow-3xl">
            
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-orange-400/5 rounded-2xl md:rounded-3xl"></div>
              
           
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">            
                  <div className="flex-shrink-0 relative">                
                    <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 rounded-full blur-lg opacity-75"></div>
                    
                  
                    <div className="relative">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 transition-all duration-700 transform hover:scale-102">
                        <img
                          src={current.image}
                          alt={current.name}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-102"
                          loading="lazy"
                        />
                      </div>
                  
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left space-y-6">
          
                    <blockquote className="text-white text-lg md:text-2xl leading-relaxed font-light italic relative">
                      <span className="text-4xl text-orange-400/30 absolute -top-2 -left-2 font-serif">"</span>
                      {current.testimonial}
                      <span className="text-4xl text-orange-400/30 absolute -bottom-4 -right-2 font-serif">"</span>
                    </blockquote>

                    <div className="flex justify-center lg:justify-start gap-1 py-2">
                      {renderStars(current.rating)}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                        {current.name}
                      </h4>
                      <div className="space-y-1">
                        <p className="text-orange-400 font-semibold text-base md:text-lg">
                          {current.title}
                        </p>
                        <p className="text-white/70 text-base">
                          {current.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-12" data-aos="fade-up" data-aos-delay="400">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-125'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <div className="mt-6 max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="600">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${((currentIndex + 1) / testimonialsData.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Testimonials;