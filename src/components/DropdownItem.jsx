import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const DropdownItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-600 last:border-b-0">
      <button
        className="w-full py-6 px-0 flex items-center justify-between text-left hover:text-orange-400 transition-colors duration-300 focus:outline-none group"
        onClick={() => onClick(item.id)}
      >
        <div className="flex items-center space-x-4">
          <span className="text-2xl lg:text-3xl font-bold text-orange-400 min-w-[60px]">
            {item.number}
          </span>
          <span className="text-xl lg:text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
            {item.title}
          </span>
        </div>
        
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-orange-400 transform transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white group-hover:text-orange-400 transform transition-transform duration-300" />
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-800 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pb-6 pl-16 pr-4">
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
};
