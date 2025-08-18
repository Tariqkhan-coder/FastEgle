import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://resolute-logistics.com/optimized/uploads/design/contacts/contact_bg_1366@2x.webp')`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
          <div
            className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-400"
            data-aos="fade-down"
          >
            <a href="/" className="hover:text-orange-400 duration-200">
              Truck Dispatch
            </a>
            <span className="mx-1 sm:mx-2">|</span>
            <span>Contacts</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 text-center font-bold"
            data-aos="fade-up"
          >
            Contacts
          </h1>

          {/* Description */}
          <div
            className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-xs sm:text-sm md:text-base leading-tight mb-3 sm:mb-4 font-normal px-2">
              You are on the Resolute Logistics company contacts page. Contact us in a convenient way to get
              <a href="/" className='hover:text-orange-400 duration-200'> truck dispatch services </a>
              or clarify any details about the company's work.
            </p>

            {/* Contact Information */}
            <div className="text-xs sm:text-sm mb-3 sm:mb-4 space-y-2">
              <div className="flex items-center justify-center space-x-2" data-aos="fade-up" data-aos-delay="300">
                <div className="font-medium text-center">
                  <span className="whitespace-nowrap">📍 Address:</span> 3303 GEIBERGER COURT
                  LAREDO, TX   78045
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2" data-aos="fade-up" data-aos-delay="400">
                <span className="font-medium">☎️ Phone: </span>
                +1 (800) 834-1898
              </div>

              <div className="flex items-center justify-center space-x-2" data-aos="fade-up" data-aos-delay="500">
                <span className="font-medium">✉️ Mail: </span>
                hello@resolute-logistics.com
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 font-normal px-2" data-aos="fade-up" data-aos-delay="600">
              Choose the qualified services of TOP companies in the USA and Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh]"
        data-aos="fade-up"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.918991653856!2d-80.91264628475981!3d35.03780378035251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856997b6a4a4d6f%3A0xe5f8b9d3e8e8e8e8!2s11443%20Savannah%20Creek%20Dr%2C%20Charlotte%2C%20NC%2028273%2C%20USA!5e0!3m2!1sen!2s!4v1625078500000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'brightness(0.8) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Resolute Logistics Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;