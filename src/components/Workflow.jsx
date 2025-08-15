import React, { useEffect } from 'react';
import { workflowData } from '../data/workflowData';
import truck2 from '../assets/truck2.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

export const Workflow = () => {
  const navigate = useNavigate();

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

  const handleStartDispatchClick = () => {
    navigate('/prices');
  };

  const WorkflowCard = ({ step, index }) => {
    return (
      <div 
        data-aos="fade-up"
        data-aos-delay={index * 150}
        data-aos-duration="800"
      >
        <div className="text-center border-2 border-orange-400 border-dotted rounded-lg p-6 h-full flex flex-col justify-between">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {step.number}
              </span>
            </div>
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
            {step.title}
          </h3>

          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="work-flow"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://resolute-logistics.com/optimized/uploads/main_page/how_we_work_bg_1200@2x.webp')`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto">

        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Resolute Logistics Company as the <span className='text-orange-400'>Leading Freight</span> Dispatching Service
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {workflowData.map((step, index) => (
            <WorkflowCard key={step.id} step={step} index={index} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-20 pt-16 border-t border-gray-600">
          <div 
            data-aos="slide-right"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-offset="50"
          >
            <img 
              src={truck2} 
              alt="Truck Illustration" 
              className="w-64 lg:w-80 xl:w-96 h-auto filter invert brightness-0 invert ml-30"
            />
          </div>

          <div 
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <button 
              className="px-8 lg:px-12 py-4 bg-orange-400 text-white font-bold text-lg lg:text-xl rounded-full hover:bg-orange-500 transition-colors duration-300 shadow-lg whitespace-nowrap"
              onClick={handleStartDispatchClick}
            >
              Start Trucking Dispatch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};