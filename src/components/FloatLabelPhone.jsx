import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FloatLabelPhone = ({ label, value, onChange, required = false, defaultCountry = 'us' }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || (value && value.length > 0);

  return (
    <>
      {/* Inline style injection to override hover background */}
      <style>
        {`
          /* Remove white hover background on flags */
    .country:hover,
    .country.highlight {
      background-color: #002140 !important;
    }

    /* Remove white from dropdown flag button */
    .flag-dropdown {
      background-color: transparent !important;
      border: none !important;
    }
      .flag-dropdown .flag {
      background-color: transparent !important;
    }
      .flag-dropdown:hover .flag {
      background-color: transparent !important;
    }

    /* Change search input background inside dropdown */
    .country-list .search {
      background-color: #002140 !important;
      color: white !important;
      border: none !important;
    }

    /* Remove scrollbar white track & make it match dropdown */
    .country-list::-webkit-scrollbar {
      width: 6px;
    }
    .country-list::-webkit-scrollbar-track {
      background-color: #002140 !important;
    }
    .country-list::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 3px;
    }
      .country:hover {
      background-color: transparent !important;
    }
    
   
     .country:hover {
      background-color: #002140 !important;
    } 
        `}
      </style>

      <div className="relative w-full border-b-2 border-gray-400 focus-within:border-orange-500">
        <PhoneInput
          country={defaultCountry}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          enableSearch
          inputClass="!bg-transparent !border-none !rounded-none !text-white placeholder-transparent !w-full !pl-12 !py-2 !m-0 focus:!shadow-none"
          buttonClass="!bg-[#002140] hover:!bg-[#002140] focus:!bg-[#002140] !border-none !shadow-none !m-0"
          containerClass="!w-full !p-0 !m-0"
          dropdownClass="!bg-[#002140] !text-white !border-none"
          placeholder={label}
          autoComplete="off"
        />
        <label
          className={`
            absolute left-12 text-gray-500 text-sm transition-all pointer-events-none pl-6
            ${isActive ? 'top-[-10px] text-orange-500 text-xs' : 'top-2'}
          `}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default FloatLabelPhone;
