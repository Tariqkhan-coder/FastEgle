import React, { useState, useEffect } from 'react';
import homepageVideo from '../assets/homepageVideo.mp4';
import {
  ChevronUp,
  ChevronDown,
  Youtube,
  Linkedin,
  Facebook,
  Play,
} from 'lucide-react';
import { FaqsData } from '../data/FaqsData';
import { FaqsCard } from '../components/FaqsCard';
import { StatsSection } from '../components/StatsSection';
import { VideoModal } from '../components/VideoModal';
import { TruckDispatchingSection } from '../components/TruckDispatchSection';
import { Workflow } from '../components/Workflow';
import { SpecialitySection } from '../components/SpecialitySection';
import ServicesTwo from "./factoring/servicesTwo";
import Testimonials from '../components/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [openSection, setOpenSection] = useState(null);
  const [truckPosition, setTruckPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);
  const [isVideoModalOpen, setIsVideoModal] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleFaqToggle = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  const handleVideoPlay = () => {
    setIsVideoModal(true);
  };

  const handleVideoClose = () => {
    setIsVideoModal(false);
  };

  // navigate to the /prices page
  const handleStartDispatchClick = () => {
    navigate('/prices');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      setTruckPosition(Math.min(scrollY, maxScroll));
      setShowScrollToTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('what-we-do');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split FAQs into two columns
  const FaqsColumn1 = FaqsData.slice(0, 3);
  const FaqsColumn2 = FaqsData.slice(3, 6);

  return (
    <div className="min-h-screen bg-[#002147] text-white font-sans antialiased">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src={homepageVideo}
        >
          Video not supported
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 w-full h-full">
          {/* Main Content */}
          <div 
            className="absolute top-1/3 left-4 sm:left-8 md:left-16 lg:left-60 transform -translate-y-1/2 max-w-2xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
              Truck Dispatch Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light opacity-90 mb-8 max-w-xl">
              We provide high-quality freight dispatch service for interstate
              carriers and fleet owners in the USA and Canada
            </p>
            <div className="text-center lg:text-left">
              <button
                className="px-6 sm:px-8 py-3 bg-orange-400 text-white rounded-full text-base sm:text-lg shadow-lg hover:bg-orange-500 transition duration-300 cursor-pointer"
                onClick={handleStartDispatchClick}
              >
                Start Trucking Dispatch
              </button>
            </div>
          </div>

          <div 
           className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-36 left-4 sm:left-8 md:left-16 lg:left-60 hidden lg:block"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center">
              <div className="flex space-x-4 sm:space-x-6 mr-8">
                {[
                  { icon: Youtube, label: 'YouTube' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Facebook, label: 'Facebook' },
                ].map(({ icon: Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-2 sm:p-3 rounded"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <hr className="border-t border-orange-400 w-32 sm:w-48" />
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNextSection}
              className="text-white hover:text-orange-400 transition-colors duration-300 animate-bounce"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>


        {/* Section 2 - What We Do */}
      <TruckDispatchingSection />

      {/* Section 3 - Specialities */}
      <SpecialitySection />

      {/* Section 4 - Workflow */}
      <Workflow />

      {/* Section 5 - Why Choose Us */}
      <section
        id="why-choose-us"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://resolute-logistics.com/optimized/uploads/main_page/whyChooseUs-bg_1366@2x.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Why choose <span className='text-orange-400'>Resolute Logistics</span>
            </h2>
          </div>


          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="flex justify-center lg:justify-center lg:pr-8" data-aos="fade-right">
              <div
                className="relative group cursor-pointer"
                onClick={handleVideoPlay}
              >
                <div className="w-30 h-30 lg:w-45 lg:h-45 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-2xl transition-transform duration-300 animate-beat">
                  <Play className="w-16 h-16 lg:w-17 lg:h-17 text-white ml-2" fill="white" />
                </div>
              </div>
            </div>


            <div className="text-white space-y-6" data-aos="fade-left">
              <p className="text-base lg:text-lg leading-relaxed">
                We provide dispatching services truckers trust in because we are 
                professionals with years of experience in the brokerage and 
                deep knowledge of ins and outs. We know the specifics of the 
                equipment along with federal and local regulations. Our 
                dispatcher company constantly monitors freight rates, load 
                boards, brokers, and shippers to spot the best deals for our 
                clientage.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed">
                Unlike many other truck dispatch companies, Resolute Logistics 
                focuses on a comprehensive approach and provides end-to-end 
                services to relieve drivers from the stress of hunting for loads, 
                making calls, doing paperwork, or struggling for payment. Our 
                truck dispatch service ensures ongoing training for dispatchers 
                and encourages them to anticipate problems before they arise. 
                We foster agility, effective teamwork, and a responsible attitude 
                to drivers under our care.
              </p>
              
              <p className="text-xl lg:text-2xl font-semibold text-orange-400 mt-8">
                Our aim is to keep your trucks busy and smooth the way for 
                your growth!
              </p>


              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button
                  className="px-8 py-3 bg-transparent border-2 border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition duration-300 font-semibold"
                  onClick={handleStartDispatchClick}
                >
                  Start Trucking Dispatch
                </button>
                <button 
                  className="px-8 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition duration-300 font-semibold"
                  onClick={handleStartDispatchClick}
                >
                  Prices
                </button>
              </div>
            </div>
          </div>


          <div className="mt-20 pt-16 border-t border-gray-700" data-aos="fade-up">
            <StatsSection />
          </div>

          <div className="text-center mt-16" data-aos="fade-up">
            <h3 className="text-2xl lg:text-4xl font-bold text-orange-400">
              Making your haul life easier!
            </h3>
          </div>
        </div>
      </section>

      {/* Section 6 - Prices */}
      <section
        id="prices"
        className="bg-[#002140] w-full overflow-hidden"
      >
      { <ServicesTwo /> }
      </section>

      {/* Section 7 - Testimonials */}
        <section
        id="testimonials"
        className="py-20 px-10 bg-[#002147] text-white text-center"
      >
      { <Testimonials />} 
      </section>


      {/* Section 8 - FAQs */}
      <section
        id="faqs"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#002140] text-white"
        data-aos="fade-up"
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" data-aos="fade-up">
              FAQs about <span className='text-orange-400'>Trucking Dispatch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Before you start working with Resolute Logistics, you may be
              interested in some questions about truck dispatch. We have
              collected the most popular ones here:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[FaqsColumn1, FaqsColumn2].map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((faq, index) => (
                  <div data-aos="fade-up" data-aos-delay={index * 100}>
                    <FaqsCard
                      key={faq.id}
                      faq={faq}
                      isOpen={openFaqId === faq.id}
                      onClick={() => handleFaqToggle(faq.id)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleVideoClose}
        videoUrl="https://www.youtube.com/embed/4zHPaCJjURU"
        title="Why Choose Resolute Logistics"
      />

      
    </div>
  );
}

export default HomePage;