import React, { useState, useEffect } from 'react';
import { DropdownItem } from './DropdownItem';
import { truckDispatchingData } from '../data/dispatchingData';
import truck1 from '../assets/truck1.svg';
import bgImage from '../assets/bgImage.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const TruckDispatchingSection = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
       once: false,
      mirror:true, 
      offset: 100,
      easing: 'ease-out-cubic'
    });

    AOS.refresh();
  }, []);

  const handleDropdownClick = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section
      id="what-we-do"
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8">
            <div 
              className="space-y-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                What Does <span className='text-orange-400'>Truck Dispatching</span> Include
              </h1>
              
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Forget about everything that makes you feel uncomfortable in 
                truck dispatching and dealing with an annoying trucking 
                environment.
              </p>
            </div>

            <div 
              className="relative max-w-lg"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img 
                src={truck1} 
                alt="Truck Illustration" 
                className="w-full h-auto filter invert"
              />
              
              <div className="relative mt-4">
                <div 
                  className="h-1 bg-orange-400"
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                />
              </div>
            </div>
          </div>

          <div 
            className="space-y-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            {truckDispatchingData.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={700 + (index * 100)}
              >
                <DropdownItem
                  item={item}
                  isOpen={openDropdownId === item.id}
                  onClick={handleDropdownClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};