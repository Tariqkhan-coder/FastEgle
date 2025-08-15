import React, { useState } from 'react';

const FloatLabelSelect = ({ label, name, value, onChange, required, options }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || (value && value.length > 0);

  return (
    <>
      <style>
        {`
          @media (max-width: 640px) {
            select, select option {
              font-size: 14px !important;
            }
          }
        `}
      </style>

      <div className="relative w-full">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="peer w-full border-b-2 border-gray-400 focus:border-orange-500 
            bg-[#002140] outline-none py-2 placeholder-transparent text-gray-200 
            text-sm sm:text-base"
        >
          <option value="" disabled hidden></option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <label
          htmlFor={name}
          className={`
            absolute left-0 top-2 text-gray-400 transition-all pointer-events-none
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-500
            ${isActive ? 'top-[-10px] text-orange-500 text-xs sm:text-sm' : ''}
          `}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default FloatLabelSelect;
