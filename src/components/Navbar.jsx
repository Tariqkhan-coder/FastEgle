// Updated Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, X, Youtube, Linkedin, Facebook } from
  'lucide-react';

const Navbar = () => {
  const [isDispatchOpen, setIsDispatchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDispatchOpen, setIsMobileDispatchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [isdropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Dispatch', href: '#', hasDropdown: true },
    { label: 'Factoring', href: '/factoring-services' },
    { label: 'Prices', href: '/prices' },
    { label: 'About', href: '/about' },
    { label: 'Contacts', href: '/contact' },
  ];

  const dispatchDropdownItems = [
    { label: 'Box truck', href: '/box-truck' },
    { label: 'Dry Van', href: '/dry-van' },
    { label: 'Reefer', href: '/refeer' },
    { label: 'Power Only', href: '/power-only' },
    { label: 'Hotshot', href: '/hotshot' },
    { label: 'Flat Bed / Step Deck', href: '/flat-bed-step-deck' },
  ];

  const Factoring = () => {
    setIsMobileMenuOpen(false)
    navigate('/factoring-services')
  }
  const Prices = () => {
    setIsMobileMenuOpen(false)
    navigate('/prices')
  }
  const About = () => {
    setIsMobileMenuOpen(false)
    navigate('/about')
  }
  const Contacts = () => {
    setIsMobileMenuOpen(false)
    navigate('/contact')
  }

  const Boxturck = () => {
    setIsDispatchOpen(false);
    navigate('/box-truck')
  }
  const Boxturck1 = () => {
    setIsMobileMenuOpen(false)
    setIsDispatchOpen(false);
    navigate('/box-truck')
  }
  const Dryvan = () => {
    setIsDispatchOpen(false);
    navigate('/dry-van')
  }
  const Dryvan1 = () => {
    setIsMobileMenuOpen(false)
    setIsDispatchOpen(false);
    navigate('/dry-van')
  }
  const Reefer1 = () => {
    setIsMobileMenuOpen(false)
    setIsDispatchOpen(false);
    navigate('/refeer')
  }
  const Reefer = () => {
    setIsDispatchOpen(false);
    navigate('/refeer')
  }
  const PowerOnly = () => {
    setIsDispatchOpen(false);
    navigate('/power-only')
  }
  const PowerOnly1 = () => {
    setIsMobileMenuOpen(false)
    setIsDispatchOpen(false);
    navigate('/power-only')
  }
  const Hotshot = () => {
    setIsDispatchOpen(false);
    navigate('/hotshot')
  }
  const Hotshot1 = () => {
    setIsMobileMenuOpen(false)
    setIsDispatchOpen(false);
    navigate('/hotshot')
  }
  const FlatBed1 = () => {
    setIsMobileMenuOpen(false)
    setIsDispatchOpen(false);
    navigate('/flat-bed-step-deck')
  }
  const FlatBed = () => {
    setIsDispatchOpen(false);
    navigate('/flat-bed-step-deck')
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      // outside clicks for dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !isMobileMenuOpen) {
        setIsDispatchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Resetting states on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileDispatchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
      transition: {
        duration: 0.15,
        ease: 'easeIn',
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <nav className="bg-[#002147] text-white  w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <span className="text-white hover:text-orange-400 font-bold text-xl">FastEagleLogistics</span>
              </a>
            </div>

            {/* Desktop */}
            <div className="hidden md:block flex-1">
              <div className="flex items-center justify-center space-x-8">
                <ul className='flex justify-between items-center space-x-8 relative'>
                  <li className='cursor-pointer flex items-center text-white hover:text-orange-400 font-bold' onClick={() => setIsDispatchOpen(!isDispatchOpen)}>Dispatch
                    <div>
                      {isDispatchOpen ? (
                        <ChevronUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      )}
                    </div>
                  </li>
                  <AnimatePresence>
                    {isDispatchOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-[calc(100%+1px)] w-56 bg-[#001930] text-white shadow-xl z-50 border-t border-orange-400"
                        style={{ transformOrigin: 'top' }}
                      >
                        <div className="py-2">
                          <ul className='cursor-pointer'>
                            <li className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'
                              onClick={Boxturck}> <span className="text-yellow-400 mr-3">›</span> Box truck</li>
                            <li onClick={Dryvan} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Dry Van</li>
                            <li onClick={Reefer} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Reefer</li>
                            <li onClick={PowerOnly} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Power Only</li>
                            <li onClick={Hotshot} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Hotshot</li>
                            <li onClick={FlatBed} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Flat Bed/Step Deck</li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <li className='cursor-pointer text-white hover:text-orange-400 font-bold' onClick={() => navigate('/factoring-services')}>Factoring</li>
                  <li className='cursor-pointer text-white hover:text-orange-400 font-bold' onClick={() => navigate('/prices')}>Prices</li>
                  <li className='cursor-pointer text-white hover:text-orange-400 font-bold' onClick={() => navigate('/about')}>About</li>
                  <li className='cursor-pointer text-white hover:text-orange-400 font-bold' onClick={() => navigate('/contact')}>Contacts</li>
                </ul>
              </div>
            </div>

            <div className="hidden md:block flex-shrink-0">
              <a
                href="tel:+19568579996"
                className="text-orange-400 transition-colors duration-200 font-medium"
              >
                +1 (956) 857-9996
              </a>
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white font-medium hover:text-orange-400 transition-colors duration-200"
              >
                MENU
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <img
                  src="./src/assets/menu.svg"
                  alt="Menu"
                  className="w-6 h-6 invert"
                  onError={(e) => {
                    e.currentTarget.outerHTML = `
                        <div class="w-6 h-6 flex flex-col justify-center space-y-1">
                          <div class="w-6 h-0.5 bg-white"></div>
                          <div class="w-6 h-0.5 bg-white"></div>
                          <div class="w-6 h-0.5 bg-white"></div>
                        </div>
                      `;
                  }}
                />

              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] md:hidden"
            style={{
              backgroundImage: 'url(https://resolute-logistics.com/optimized/uploads/menu/menu_bg_1366.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >

            <div className={`relative h-full flex flex-col ${isMobileDispatchOpen ? 'overflow-y-auto' : 'overflow-hidden'}`}>
              <div className="flex justify-between items-center p-6">
                <a href="/" className="block">
                  <div className="text-orange-400 font-bold text-xl">FastEagleLogistics</div>
                </a>
                <div className="flex items-center space-x-4">
                  {/* <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-orange-400 font-medium hover:text-orange-500 transition-colors duration-200"
                  >
                    CLOSE
                  </button> */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-orange-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Navigation items */}
              <div className="px-6">
                <div className=" space-x-8">
                  <ul className=' space-x-8 relative'>
                    <div className=" ">
                      <li className='cursor-pointer flex items-center text-white hover:text-orange-400 font-bold py-2' onClick={() => setIsDispatchOpen(!isDispatchOpen)}>Dispatch
                        <div>
                          {isDispatchOpen ? (
                            <ChevronUp className="w-4 h-4 ml-1" />
                          ) : (
                            <ChevronDown className="w-4 h-4 ml-1" />
                          )}
                        </div>
                      </li>
                      <AnimatePresence>
                        {isDispatchOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="  w-56  text-white shadow-xl z-50 border-t border-orange-400"
                            style={{ transformOrigin: 'top' }}
                          >
                            <div className="py-2">
                              {/* {dispatchDropdownItems.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200"
                                >
                                  <span className="text-yellow-400 mr-3">›</span>
                                  {dropdownItem.label}
                                </a>
                              ))} */}
                              <div className="py-2">
                                <ul className='cursor-pointer'>
                                  <li className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'
                                    onClick={Boxturck1}> <span className="text-yellow-400 mr-3">›</span> Box truck</li>
                                  <li onClick={Dryvan1} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Dry Van</li>
                                  <li onClick={Reefer1} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Reefer</li>
                                  <li onClick={PowerOnly1} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Power Only</li>
                                  <li onClick={Hotshot1} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Hotshot</li>
                                  <li onClick={FlatBed1} className='"flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 transition-all duration-200'> <span className="text-yellow-400 mr-3">›</span> Flat Bed/Step Deck</li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <li className='cursor-pointer text-white hover:text-orange-400 font-bold py-2' onClick={Factoring}>Factoring</li>
                    <li className='cursor-pointer text-white hover:text-orange-400 font-bold py-2' onClick={Prices}>Prices</li>
                    <li className='cursor-pointer text-white hover:text-orange-400 font-bold py-2' onClick={About}>About</li>
                    <li className='cursor-pointer text-white hover:text-orange-400 font-bold py-2' onClick={Contacts}>Contacts</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 space-y-4 text-center mt-auto">
                <a
                  href="mailto:hello@resolute-logistics.com"
                  className="block text-white text-lg hover:text-orange-400 transition-colors duration-200"
                >
                  hello@resolute-logistics.com
                </a>
                <a
                  href="tel:+19568579996"
                  className="block text-white text-xl font-medium hover:text-orange-400 transition-colors duration-200"
                >
                  +1 (956) 857-9996
                </a>
                <button
                  className="bg-transparent border-2 border-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-400 hover:text-black transition-all duration-200"
                  onClick={() => window.location.href = 'tel:+19568579996'}
                >
                  Request a call
                </button>

                <div className="flex justify-center space-x-4 mt-6">
                  <a
                    href="https://www.fasteaglelogistics.com/"
                    target='_blank'
                    className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-3 rounded"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/fasteaglelogistics/"
                    target='_blank'
                    className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-3 rounded"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1B8oC27S8m/?mibextid=wwXIfr"
                    target='_blank'
                    className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-3 rounded"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;