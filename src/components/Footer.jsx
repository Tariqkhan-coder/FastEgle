// Updated Footer.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Youtube, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const [isDispatchOpen, setIsDispatchOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleDispatch = () => {
    setIsDispatchOpen(!isDispatchOpen);
  };

  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
  };

  const dispatchServices = [
    'Box truck',
    'Dry Van',
    'Reefer',
    'Power Only',
    'Hotshot',
    'Flat Bed / Step Deck'
  ];

  const companyPages = [
    'About',
    'Prices',
    'Contacts',
    'Blog'
  ];

  return (
    <footer className="bg-[#002147] text-white">

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-start">
            <div className="flex-shrink-0">
              <span className="text-orange-400 font-bold text-xl">FastEagleLogistics</span>
            </div>

            <div className="ml-16 flex-shrink-0">
              <div className="space-y-4">
                <a
                  href="#"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  Truck dispatcher training
                </a>

                <a
                  href="#"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  Owner operator job
                </a>

                {/* Dispatch*/}
                <div>
                  <button
                    onClick={toggleDispatch}
                    className="flex items-center text-white hover:text-orange-400 transition-colors duration-200 text-base"
                  >
                    {isDispatchOpen ? (
                      <ChevronUp className="w-4 h-4 mr-2 text-white" />
                    ) : (
                      <ChevronDown className="w-4 h-4 mr-2 text-white" />
                    )}
                    Dispatch
                  </button>

                  <AnimatePresence>
                    {isDispatchOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                        className="overflow-hidden ml-6 mt-2"
                      >
                        {dispatchServices.map((service, index) => (
                          <a
                            key={index}
                            href="#"
                            className="text-white hover:text-orange-400 transition-colors duration-200 text-base block py-1"
                          >
                            {service}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="space-y-4">
                <a
                  href="#"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  Prices
                </a>
                <a
                  href="#"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  Contacts
                </a>
                <a
                  href="#"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  Blog
                </a>
              </div>
            </div>

            <div className="mr-16 text-right flex-shrink-0">
              <div className="text-orange-400 text-base font-semibold mb-4">USA, CANADA</div>
              <div className="mb-4">
                <a
                  href="tel:+19568579996"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block mb-2"
                >
                  +1 (956) 857-9996
                </a>
              </div>
              <div className="mb-6">
                <a
                  href="mailto:hello@resolute-logistics.com"
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                >
                  hello@resolute-logistics.com
                </a>
              </div>

              <div className="flex justify-end space-x-3">
                <a
                  href="#"
                  className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-2 rounded"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-2 rounded"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-2 rounded"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <div className="text-orange-400 text-sm font-semibold mb-2">THE #1 DISPATCH SERVICES</div>
                <div className="text-white text-sm leading-relaxed">
                  Copyright 2018 - 2025.<br />
                  DevSum All Rights Reserved.
                </div>
              </div>

              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                  Sitemap
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                  Privacy Notice
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile*/}
      <div className="md:hidden px-4 py-8">
        <div className="text-center mb-8">
          <div className="text-orange-400 font-bold text-xl">FastEagleLogistics</div>
        </div>

        {/* Services Links */}
        <div className="text-center space-y-6 mb-8">
          <a
            href="#"
            className="text-white hover:text-orange-400 transition-colors duration-200 text-lg block"
          >
            Track dispatcher training
          </a>

          <a
            href="#"
            className="text-white hover:text-orange-400 transition-colors duration-200 text-lg block"
          >
            Owner operator job
          </a>

          {/* Dispatch*/}
          <div>
            <button
              onClick={toggleDispatch}
              className="flex items-center justify-center text-white hover:text-orange-400 transition-colors duration-200 text-lg mx-auto"
            >
              {isDispatchOpen ? (
                <ChevronUp className="w-5 h-5 mr-2 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 mr-2 text-white" />
              )}
              Dispatch
            </button>

            <AnimatePresence>
              {isDispatchOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="overflow-hidden mt-4 text-center space-y-3"
                >
                  {dispatchServices.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                    >
                      {service}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pages Dropdown */}
          <div>
            <button
              onClick={togglePages}
              className="flex items-center justify-center text-white hover:text-orange-400 transition-colors duration-200 text-lg mx-auto"
            >
              {isPagesOpen ? (
                <ChevronUp className="w-5 h-5 mr-2 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 mr-2 text-white" />
              )}
              Pages
            </button>

            <AnimatePresence>
              {isPagesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="overflow-hidden mt-4 text-center space-y-3"
                >
                  {companyPages.map((page, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors duration-200 text-base block"
                    >
                      {page}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact Info*/}
        <div className="text-center mb-8">
          <div className="text-orange-400 text-lg font-semibold mb-6">USA, CANADA</div>
          <div className="mb-4">
            <a
              href="tel:+19292141820"
              className="text-white hover:text-orange-400 transition-colors duration-200 text-lg block mb-4"
            >
              +1 (929) 214-1820
            </a>
          </div>
          <div className="mb-8">
            <a
              href="mailto:hello@resolute-logistics.com"
              className="text-white hover:text-orange-400 transition-colors duration-200 text-lg block"
            >
              hello@resolute-logistics.com
            </a>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#"
              className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-3 rounded"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-3 rounded"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200 p-3 rounded"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="text-orange-400 text-base font-semibold">THE #1 DISPATCH SERVICES</div>

          <div className="space-y-4 text-base">
            <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200 block">
              Sitemap
            </a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200 block">
              Privacy Notice
            </a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200 block">
              Terms & Conditions
            </a>
          </div>

          <div className="text-white text-sm leading-relaxed pt-4">
            Copyright 2018 - 2025.<br />
            DevSum. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;