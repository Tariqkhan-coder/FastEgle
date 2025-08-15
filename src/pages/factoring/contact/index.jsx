import { Phone, Mail } from "lucide-react";
import Button from "../../../components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [phoneChecked, setPhoneChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log({
        ...values,
        contactPreference: {
          phone: phoneChecked,
          email: emailChecked,
        },
      });
    },
  });

  const leftContainer = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  const rightContainer = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  return (
    <section className="relative z-1 bg-dark-blue">
      <div className="container py-15 md:py-35">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-10">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={leftContainer}
            className="flex flex-col"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Want to contact?
            </h2>

            <p className="mb-8 text-soft-white max-w-md">
              Contact us in any convenient way to order services or get detailed
              information on your question.
            </p>

            <motion.div
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow"
                whileHover={{
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="text-white text-sm w-5 h-5" />
              </motion.div>
              <motion.p
                className="text-soft-white cursor-pointer hover:text-accent"
                whileHover={{ x: 3 }}
              >
                +1 (929) 214-1820
              </motion.p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow"
                whileHover={{
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="text-white text-sm w-5 h-5" />
              </motion.div>
              <motion.p
                className="text-soft-white cursor-pointer hover:text-accent"
                whileHover={{ x: 3 }}
              >
                hello@resolute-logistics.com
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={rightContainer}
            className="bg-bg p-5 md:p-8 shadow-md"
          >
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="relative w-full">
                <input
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={`peer w-full border-b focus:outline-none py-2 transition-all duration-300 placeholder-transparent ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-border-blue focus:border-accent"
                  }`}
                  placeholder="Name *"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-accent transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  NAME *
                </label>
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              {/* Email Field */}
              <div className="relative w-full mb-6">
                <input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`peer w-full border-b focus:outline-none py-2 transition-all duration-300 placeholder-transparent ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-border-blue focus:border-accent"
                  }`}
                  placeholder="E-MAIL *"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-sm text-accent transition-all duration-300
      peer-placeholder-shown:text-base peer-placeholder-shown:top-2
      peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  E-MAIL *
                </label>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative w-full mb-6">
                <input
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className={`peer w-full border-b focus:outline-none py-2 transition-all duration-300 placeholder-transparent ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-500"
                      : "border-border-blue focus:border-accent"
                  }`}
                  placeholder="PHONE *"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-sm text-accent transition-all duration-300
      peer-placeholder-shown:text-base peer-placeholder-shown:top-2
      peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  PHONE *
                </label>
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative w-full mb-6">
                <textarea
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows="2"
                  className={`peer w-full border-b focus:outline-none py-2 transition-all duration-300 placeholder-transparent resize-none ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : "border-border-blue focus:border-accent"
                  }`}
                  placeholder="MESSAGE"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-sm text-accent transition-all duration-300
      peer-placeholder-shown:text-base peer-placeholder-shown:top-2
      peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  MESSAGE
                </label>
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Contact Preference */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-white font-normal">
                  How should we contact you?
                </p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-accent cursor-pointer whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={phoneChecked}
                      onChange={() => setPhoneChecked(!phoneChecked)}
                    />
                    <motion.div
                      className={`w-[17px] h-[17px] border rounded-sm flex items-center justify-center ${
                        phoneChecked ? "border-accent" : "border-border-blue"
                      }`}
                      whileTap={{ scale: 0.9 }}
                    >
                      {phoneChecked && (
                        <motion.svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M3 7L6 10L11 4"
                            stroke="#f97316"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                    </motion.div>
                    Phone
                  </label>

                  <label className="flex items-center gap-2 text-sm text-accent cursor-pointer whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={emailChecked}
                      onChange={() => setEmailChecked(!emailChecked)}
                    />
                    <motion.div
                      className={`w-[17px] h-[17px] border rounded-sm flex items-center justify-center ${
                        emailChecked ? "border-accent" : "border-border-blue"
                      }`}
                      whileTap={{ scale: 0.9 }}
                    >
                      {emailChecked && (
                        <motion.svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M3 7L6 10L11 4"
                            stroke="#f97316"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                    </motion.div>
                    E-mail
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="text-sm font-normal"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="300"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          />
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25:217)"
          />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#f97316" stopOpacity="0" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#f97316" stopOpacity="0" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          />
          <defs>
            <radialGradient id="paint5_radial_25:218" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#f97316" />
            </radialGradient>
          </defs>

          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          />

          <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />

          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" stopOpacity="0" />
              <stop offset="1" stopColor="#f97316" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" stopOpacity="0" />
              <stop offset="1" stopColor="#f97316" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" stopOpacity="0" />
              <stop offset="1" stopColor="#f97316" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" stopOpacity="0" />
              <stop offset="1" stopColor="#f97316" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
