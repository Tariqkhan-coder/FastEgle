import React, { useState, useEffect } from 'react';
import { SpecialitiesData } from '../data/specialitiesData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

export const SpecialitySection = () => {
  const [activeSpecialityId, setActiveSpecialityId] = useState(null);
  const [cardKey, setCardKey] = useState(0); 
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true, 
      offset: 100,
      easing: 'ease-out-cubic'
    });

    if (window.innerWidth >= 1024) { 
      setActiveSpecialityId(SpecialitiesData[0].id);
    }

    AOS.refresh();
  }, []);

  useEffect(() => {
    setCardKey(prev => prev + 1);
  }, [activeSpecialityId]);

  const handleSpecialityClick = (specialityId) => {
    setActiveSpecialityId(specialityId === activeSpecialityId ? null : specialityId);
    setTimeout(() => AOS.refresh(), 50);
  };
  
  const handleLearnMoreClick = (title) => {
    let path = `/${title.toLowerCase().replace(/\s/g, '-')}`;
    
    // Custom path for "Flat Bed & Step Deck"
    if (title === 'Flat Bed / Step Deck') {
      path = '/flat-bed-step-deck';
    }

    navigate(path);
  };
  
  // New handler for the "Start Trucking Dispatch" button
  const handleStartDispatchClick = () => {
    navigate('/prices');
  };

  const activeSpeciality = SpecialitiesData.find(s => s.id === activeSpecialityId) || (window.innerWidth >= 1024 ? SpecialitiesData[0] : null);

  return (
    <section
      id="specialities"
      className="relative min-h-screen overflow-hidden bg-[#002140] lg:bg-gray-100"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${activeSpeciality?.backgroundImage}')`,
        }}
      />

      {activeSpecialityId !== null && (
        <div className="absolute inset-0 bg-black/20" />
      )}

      {/* Desktop */}
      <div className="relative z-10 hidden lg:flex min-h-screen">
        <div className="flex-1 flex justify-center items-center">
          <div 
            className="w-80 bg-[#002140] flex flex-col rounded-lg shadow-2xl ml-20"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {SpecialitiesData.map((speciality, index) => (
              <div
                key={speciality.id}
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
                onClick={() => setActiveSpecialityId(speciality.id)}
                className={`flex-1 flex flex-col justify-center px-8 py-6 cursor-pointer transition-all duration-300 border-b border-white/10 last:border-b-0 first:rounded-t-lg last:rounded-b-lg
                  ${activeSpecialityId === speciality.id
                    ? 'bg-orange-400 text-white'
                    : 'bg-[#002140] text-white hover:bg-[#003060]'
                  }`}
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  {speciality.title}
                </h3>
                <p className="text-sm lg:text-base font-medium opacity-80">
                  {speciality.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-3xl">

            <div 
              className="text-center mb-12"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8 transform -translate-x-11 -translate-y-9">
                Specialities
              </h2>
            </div>

            <div 
              key={cardKey} 
              className="bg-white/30 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-2xl transform -translate-x-9 -translate-y-9"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div 
                className="flex items-center mb-8"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 mr-6 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
                    src={activeSpeciality?.icon}
                    alt={`${activeSpeciality?.title} icon`}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  {activeSpeciality?.title}
                </h3>
              </div>
    
              <p 
                className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                {activeSpeciality?.description}
              </p>
            
              <div 
                className="flex flex-col sm:flex-row gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <button 
                  className="px-8 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition duration-300 font-semibold text-lg"
                  onClick={handleStartDispatchClick}
                >
                  Start Trucking Dispatch
                </button>
                <button 
                  className="px-8 py-3 bg-white text-black border border-black rounded-full hover:border-orange-400 hover:bg-orange-400 hover:text-white transition duration-300 font-semibold text-lg"
                  onClick={() => handleLearnMoreClick(activeSpeciality?.title)}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative z-10 lg:hidden flex flex-col items-center pt-8 px-4 bg-[#002140] min-h-screen">

        <h2 
          className="text-4xl font-bold text-white mb-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Specialities
        </h2>

        <div 
          className="w-full max-w-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {SpecialitiesData.map((speciality, index) => (
            <div
              key={speciality.id}
              className={`border-b border-white/20 ${index === SpecialitiesData.length - 1 ? 'border-b-0' : ''}`}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <div
                onClick={() => handleSpecialityClick(speciality.id)}
                className={`flex justify-between items-center px-6 py-4 cursor-pointer transition-all duration-300 group
                  ${activeSpecialityId === speciality.id
                    ? 'bg-[#003060] text-orange-400'
                    : 'bg-white/5 backdrop-blur text-white hover:text-orange-400'
                  }`}
              >
                <div className="flex items-center">
                  <img
                    src={speciality.icon}
                    alt={`${speciality.title} icon`}
                    className={`w-12 h-12 object-contain mr-4 transition-all duration-300 filter-white`}
                  />
                  <h3 className="text-xl font-bold group-hover:text-orange-400">
                    {speciality.title}
                  </h3>
                </div>
                <div>
                  {activeSpecialityId === speciality.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeSpecialityId === speciality.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-6 pb-6 bg-[#001530]">
                  <div className="relative pt-4">
                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                      {speciality.description}
                    </p>
                    <div className="flex flex-col gap-4">
                      <button 
                        className="px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition duration-300 font-semibold text-base"
                        onClick={handleStartDispatchClick}
                      >
                        Start Trucking Dispatch
                      </button>
                      <button 
                        className="px-6 py-3 bg-transparent border-2 border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition duration-300 font-semibold text-base"
                        onClick={() => handleLearnMoreClick(speciality.title)}
                      >
                        Learn more
                      </button>
                    </div>
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