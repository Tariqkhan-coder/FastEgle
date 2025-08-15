import React, { useState } from 'react';

const FloatingLabel = ({ label, type = 'text', name, value, onChange, required = false }) => {
  const [focused, setFocused] = useState(false);

  const isActive = focused || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-orange-500 outline-none py-2 text-white placeholder-transparent"
        placeholder={label}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className={`
          absolute left-0 top-2 text-gray-400 text-sm transition-all
          pointer-events-none
          peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
          ${isActive ? 'top-[-10px] text-orange-500 text-xs' : ''}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabel;
