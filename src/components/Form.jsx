import React, { useState } from 'react';
import FloatingLabel from './FloatingLabel';
import FloatingLabelSelect from './FloatLabelSelect';
import FloatLabelPhone from './FloatLabelPhone';
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    factoring: '',
    email: '',
    phone: '',
    message: '',
    contactByPhone: false,
    contactByEmail: false,
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const factoringOptions = [
    { value: 'option1', label: "I already have one" },
    { value: 'option2', label: "I don't have one" },
    { value: 'option3', label: 'I want to switch' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.privacyAccepted) newErrors.privacyAccepted = 'You must accept the privacy notice';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('Form submitted:', formData);
    // Submit to API here
  };

  return (
    <section className="max-w-[1300px] mx-auto px-6 py-12 bg-[#002140]">
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Left: Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/Screenshot 2025-08-13 114110.png"
            alt="Contact Illustration"
            className="w-full h-full object-cover pl-12"
          />
        </motion.div>

        {/* Right: Form */}
        <div 
        className="flex-[1.1] flex flex-col justify-center  p-6 rounded-lg"
         >
          <h2 className="text-3xl font-bold mb-6 text-white">Write To Start <span className='text-orange-500'>Dispatch</span></h2>
          <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
         
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }} // bigger delay so it comes after image
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <FloatingLabel
                  label="YOUR NAME*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <FloatingLabelSelect
                label="Factoring*"
                name="factoring"
                value={formData.factoring}
                onChange={handleChange}
                options={factoringOptions}
              />

              <div>
                <FloatingLabel
                  label="EMAIL*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <FloatLabelPhone
                  label="PHONE*"
                  name="phone"
                  value={formData.phone}
                  onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                  defaultCountry="us"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <FloatingLabel
                label="MESSAGE*"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Checkbox */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white font-semibold">
              <p className="whitespace-nowrap">How should we contact you?</p>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="contactByPhone"
                  checked={formData.contactByPhone}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="ml-2 font-normal">Phone</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="contactByEmail"
                  checked={formData.contactByEmail}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="ml-2 font-normal">Email</span>
              </label>
            </div>

            {/* Button + Privacy */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-14 rounded-full transition duration-300 ease-in-out hover:shadow-lg"
              >
                Send
              </button>
              <label className="inline-flex items-center text-gray-300 font-normal">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="ml-2">
                  I have read and agree to{' '}
                  <a
                   href="/privacy_notice" 
                   className="underline hover:text-orange-400">
                    privacy notice
                  </a>
                </span>
              </label>
              {errors.privacyAccepted && (
                <p className="text-red-500 text-sm">{errors.privacyAccepted}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Form;
