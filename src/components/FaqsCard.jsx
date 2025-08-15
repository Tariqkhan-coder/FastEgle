import React from 'react';

 export const FaqsCard = ({ faq, isOpen, onClick }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
      <div
        className="p-5 cursor-pointer flex justify-between items-center"
        onClick={onClick}
      >
        <h3 className="font-medium text-base text-white pr-4 leading-relaxed">
          {faq.question}
        </h3>

        
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center transition-transform duration-300 ease-in-out">
            {isOpen ? (
              <svg 
                className="w-4 h-4 text-black transition-transform duration-300 ease-in-out"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
              </svg>
            ) : (
              <svg 
                className="w-4 h-4 text-white transition-transform duration-300 ease-in-out"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            )}
          </div>
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5">
          <div className="pt-2 border-t border-white/10">
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


