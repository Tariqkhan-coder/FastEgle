import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { FaqsSection } from "../data/FaqsSection";
import { FaqsCard } from "../components/FaqsCard";

const countries = [
  { code: "US", dial: "+1", flag: "https://flagcdn.com/us.svg" },
  { code: "PK", dial: "+92", flag: "https://flagcdn.com/pk.svg" },
  { code: "IN", dial: "+91", flag: "https://flagcdn.com/in.svg" },
  { code: "GB", dial: "+44", flag: "https://flagcdn.com/gb.svg" },
];

export default function CenteredBgText({
  image = "./src/assets/flatbedimg.webp",
  topLink = "Truck Dispatch / Flat Bed / Step Deck",
  title = (
    <>
      Step Deck and Flatbed <br /> Dispatch Service
    </>
  ),
  subtitle = "Our company offers flatbed dispatch service and step decks dispatch service for owner operators and fleet owners. Here you can get some more information about features of receiving loads for the trucks with flatbed and step deck trailers.",
  extraText = "As an owner of a Flatbed or Step Deck, you are sure to want your investment to recoup ASAP.",
  finalText = "All you actually need to achieve this goal is to keep your vehicle running and carrying the best-paying Flatbed and Step Deck loads available in the USA, with downtime and deadhead trips reduced to the minimum.",
  lastText = "Take all the advantages of our step deck or flatbed dispatch services.",
  heightClass = "h-[650px]",
}) {
  const [openFaqId, setOpenFaqId] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(0);


    const listTexts = [
      "Personal step deck/flatbed dispatcher attached to each client — You will get a friendly step deck/flatbed dispatcher who will comb through all available load boards for flatbed freight to find the best deals and book loads as far ahead as possible. The same person will conduct negotiations with brokers/shippers and handle all the paperwork that comes with your flatbed truck loads. Your dispatcher will stay in touch with you 24/7 and will help you with any issues that might arise during your trip.",
      "Professional support tailored to your business type — Our step deck & flatbed dispatch service is not about grabbing trailer loads — it’s about helping people to reach their goals!.",
      "Quality customer care and transparency — Our dedicated flatbed and step deck dispatchers are praised for building excellent communication, providing friendly customer assistance, and delivering mental agility to tackle issues even before they arise. Be it negotiations for deals found on a flatbed load board or resolving disputes with shippers, we do the job honestly since our dispatch company grows as you grow.",
    ];

  const handleFaqToggle = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const FaqsColumn1 = FaqsSection.slice(0, 3);
  const FaqsColumn2 = FaqsSection.slice(3, 6);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <section
        className={`relative w-full ${heightClass} bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <Motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-white/40 font-semibold text-xs md:text-sm uppercase tracking-wider text-center">
            {topLink}
          </p>
        </Motion.div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <Motion.h1
            className="mb-3 text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {title}
          </Motion.h1>
          {[subtitle, extraText, finalText, lastText].map((text, i) => (
            <Motion.p
              key={i}
              className="max-w-xl text-center text-white/80 text-xs md:text-base leading-relaxed mb-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {text}
            </Motion.p>
          ))}
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-3">
              Step Deck/Flatbed Truck Dispatch from Resolute Logistics
            </h2>
            <p className="text-gray-600 mb-6">
              That’s exactly what Resolute Logistics can do for you by spotting
              the most advantageous deals and booking the loads on your behalf
              while you will be operating your vehicle in a hassle-free way.
            </p>
            <p className="text-gray-600 mb-6">
              Besides creating an uninterrupted stream of revenue running into
              your pocket, our{" "}
              <a
                href="https://resolute-logistics.com/"
                className="underline underline-offset-2 decoration-black hover:text-black"
              >
                dispatching services
              </a>{" "}
              will support your flatbed and step deck trucking services
              around-the-clock, starting from handling all the paperwork and
              ending with conflict resolution.
            </p>
          </Motion.div>
          <Motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="./src/assets/flatbed-dispatch.jpg"
              alt="Dispatch Services"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </Motion.div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <Motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="./src/assets/step-deck-dispatch-services.jpg"
              alt="Dispatch Services"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </Motion.div>
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-3">
              Ongoing Dispatch from Professionals in Flatbed and Step Deck
              Trucking
            </h2>
            <p className="text-gray-600 mb-4">
              Having over 15 years of total experience in brokerage, we know for
              sure that flatbed freight loads can bring higher earnings per mile
              than any other type of equipment, especially with the use of
              high-quality step deck or flatbed truck dispatching.
            </p>
            <p className="text-gray-600 mb-4">
              A flatbed doesn’t have any sides and roof what allows him to
              accommodate many kinds of oversized cargo and freight of
              irregular shape, ranging from pipes and beams to heavy machinery
              and shipping containers. Note that commercial flatbed truck
              dispatch services can save your time and bring much more profit.
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-3">
              Benefits of Step Deck Dispatching
            </h2>
            <p className="text-gray-600 mb-6">
              Aluminum flatbed trailers even expand the capacity since their
              lighter weight allows carrying more loads without obtaining
              overweight permits. However, Resolute Logistics works with 48 and
              53 ft. Flatbed trucks of any design and keeps track of permits
              required in each scenario.
            </p>
            <p className="text-gray-600 mb-6">
              Our step deck dispatcher also monitors step deck freight rates and
              does Resolute Logistics best to keep the drivers busy with hauling
              tall loads, which is a perfect fit for this type of equipment.
            </p>
          </Motion.div>
          <Motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="./src/assets/dispatching-step-decks.jpg"
              alt="Dispatch Services"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </Motion.div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <Motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="./src/assets/flatbed-dispatch (1).jpg"
              alt="Dispatch Services"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </Motion.div>
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-3">
              Benefits of Flatbed Dispatching
            </h2>
            <p className="text-gray-600 mb-4">
              Although flatbed rates and load-to-truck ratios are usually higher
              than those of dry vans or reefers, dealing with heavy and abnormal
              loads is not a joke.
            </p>
            <p className="text-gray-600 mb-4">
              The drivers need to stay focused on securing and hauling
              potentially dangerous flatbed loads instead of making calls,
              stressing out over negotiations with brokers and shippers, or
              struggling with things like finding a truck stop or emergency
              roadside service for their Freightliner flatbed.
            </p>
          </Motion.div>
        </div>
      </section>

 <section className="relative h-[110vh] w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
            src="./src/assets/what-we-do-bg_768@2x.webp"
          alt="Light Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 w-full max-w-6xl px-6 mt-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 58 68"
  className="w-16 h-16 object-contain -mt-16"
 fill="yellow">
  <path d="M57.7661 0.658065C57.5323 0.877419 56.8307 1.75484 56.5968 2.19355C54.9597 4.16774 53.5565 5.70323 53.3226 6.14194L53.0887 6.58065L53.3226 6.36129C53.3226 6.36129 53.5565 6.36129 53.5565 6.14194C53.5565 6.14194 54.7258 5.26452 54.7258 5.48387C54.9597 5.48387 54.7258 5.70323 54.7258 5.92258C54.4919 6.36129 54.4919 7.01935 54.7258 7.23871C54.7258 7.23871 54.9597 7.01935 54.9597 6.8C55.4274 6.14194 56.3629 5.04516 56.3629 5.26452C56.3629 5.26452 56.3629 5.48387 56.129 5.92258C55.8952 6.58065 55.4274 7.67742 54.7258 8.55484C54.2581 8.99355 54.0242 9.2129 54.0242 9.2129C54.0242 9.2129 54.2581 9.2129 54.7258 9.2129H55.1936L54.7258 9.87097C54.4919 10.3097 53.5565 11.8452 52.621 13.1613C51.6855 14.6968 50.75 16.4516 50.2823 16.8903C49.5806 17.9871 49.1129 18.8645 48.879 19.3032C48.879 19.7419 45.6048 25.4452 44.4355 27.4194C43.2661 29.1742 43.0323 29.6129 43.2661 30.271V30.7097L42.5645 31.1484C42.0968 31.5871 41.629 32.0258 41.3952 32.2452C41.1613 32.6839 40.6936 33.5613 40.9274 34C40.9274 34.2194 40.9274 34.4387 40.6936 34.6581C40.4597 35.3161 37.6532 39.7032 35.7823 41.8968C34.1452 44.529 34.1452 44.529 33.4436 45.8452C32.9758 46.5032 31.3387 49.5742 29.2339 53.0839C27.3629 56.3742 25.4919 59.2258 25.4919 59.4452C25.0242 60.3226 24.5565 61.2 23.8548 61.8581C23.1532 62.2968 22.9194 62.7355 22.2177 64.0516C21.9839 64.7097 21.5161 65.1484 21.2823 65.3677L21.0484 65.8064H20.3468C19.6452 65.8064 19.1774 65.8064 19.1774 65.5871C19.1774 65.3677 19.1774 65.3677 19.1774 65.3677C18.9436 65.3677 17.5403 66.0258 17.3065 66.2452C16.8387 66.4645 16.8387 66.6839 17.0726 67.1226C17.0726 67.3419 17.3065 67.5613 17.3065 67.5613C17.3065 67.7806 17.0726 67.7806 16.8387 68C16.6048 68 16.6048 67.7806 15.9032 67.3419L15.2016 66.9032L14.5 67.3419C13.7984 68 13.5645 68 13.0968 67.7806C13.0968 67.5613 12.629 67.3419 12.629 67.1226C12.1613 66.6839 11.6935 66.0258 11.4597 66.0258L11.2258 66.2452C10.9919 66.6839 10.7581 67.1226 10.2903 67.3419C10.0565 67.5613 9.82258 67.7806 9.82258 67.7806C9.35484 67.7806 7.48387 61.4194 3.97581 48.9161C3.50806 46.2839 2.80645 44.0903 2.10484 42.1161C0.935484 39.0452 0.935484 38.8258 0.467742 38.1677C0.233871 37.9484 0 37.729 0 37.729C0 37.5097 1.16935 36.8516 1.6371 36.8516C1.6371 36.8516 2.10484 37.071 2.33871 37.071C2.57258 37.071 2.80645 37.2903 3.04032 37.2903C3.27419 37.2903 3.27419 36.8516 2.80645 36.1936C2.80645 35.7548 2.57258 35.3161 2.57258 35.3161C2.57258 34.8774 3.27419 34 3.27419 34C3.50806 34 4.20968 34.6581 4.44355 35.0968C4.67742 35.5355 5.37903 35.9742 5.84677 36.4129C6.31452 36.6323 6.54839 36.6323 6.78226 35.9742C7.25 35.5355 7.25 35.5355 7.01613 35.0968C7.01613 34.6581 7.01613 34.2194 7.01613 33.7806V33.1226L7.48387 32.9032C7.95161 32.9032 8.18548 32.9032 8.8871 32.9032C9.58871 33.1226 10.0565 33.1226 10.0565 33.1226C10.2903 33.1226 10.5242 32.2452 10.7581 31.5871C10.7581 31.1484 10.7581 31.1484 10.9919 30.929C11.4597 30.7097 13.3306 30.0516 13.5645 30.271C13.5645 30.271 13.5645 30.4903 13.7984 30.7097C13.7984 31.3677 13.7984 31.3677 13.7984 32.0258C13.7984 33.1226 13.7984 33.7806 14.0323 33.5613C14.5 33.5613 14.5 33.5613 14.5 34C14.5 34.4387 14.2661 34.6581 14.0323 35.0968C13.7984 35.7548 13.7984 35.9742 13.7984 37.2903C13.7984 38.8258 14.0323 40.3613 14.7339 42.7742C15.2016 45.1871 16.1371 48.2581 16.8387 49.3548C16.8387 49.7935 16.8387 49.7935 17.0726 49.5742C17.7742 49.3548 18.7097 47.8194 19.879 45.6258C20.8145 43.871 21.75 42.1161 23.621 39.0452C26.1936 34.8774 27.5968 32.9032 28.5323 32.0258C29.4677 31.1484 30.1694 30.271 31.8065 27.6387C32.5081 26.7613 33.2097 25.6645 33.4436 25.4452C33.9113 24.7871 34.6129 24.129 34.8468 24.129C34.8468 24.129 34.1452 25.6645 33.4436 26.9806C32.5081 28.7355 31.1048 30.7097 28.7661 34C26.4274 37.5097 23.621 42.3355 22.6855 44.0903C22.4516 44.3097 21.75 45.6258 21.0484 46.9419C19.6452 49.1355 18.9436 50.8903 18.9436 51.1097C18.9436 51.329 18.9436 51.1097 19.1774 51.1097C19.4113 50.8903 19.6452 50.671 19.6452 50.4516C20.1129 49.7935 43.0323 14.2581 43.7339 13.3806C44.2016 12.9419 44.6694 12.5032 45.371 12.0645C46.5403 11.1871 47.0081 10.9677 47.9436 9.65161C48.4113 9.2129 48.879 8.55484 49.1129 8.33548C49.5807 7.89677 50.0484 7.45807 50.2823 7.01936C50.75 6.58065 50.9839 5.92258 51.2177 5.70323C51.6855 5.26452 58 0 58 0C58 0 58 0.219355 57.7661 0.658065Z" />
</svg>
            <Motion.p
              key={selected}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="mt-5"
            >
              {listTexts[selected]}
            </Motion.p>
            <Motion.div
              className="w-50 h-[1px] bg-amber-200 mt-6"
              layout
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{
                transform: `translateY(${selected * 70}px)`,
              }}
            />
            <p className="text-xs mt-6">
              Our step deck & flatbed dispatch service is not about grabbing trailer loads — it’s about helping people to reach their goals!
            </p>
          </div>
          <div className="flex justify-end">
<ol>
  {["01", "02", "03"].map((num, idx) => (
    <li
      key={num}
      className="flex flex-row gap-4 p-2 cursor-pointer"
      onClick={() => setSelected(idx)}
    >
      {/* Number */}
      <span
        className={`text-2xl ${
          selected === idx ? "text-yellow-400" : "text-white"
        }`}
      >
        {num}
      </span>

      {/* Text */}
      <p
        className={`text-2xl transition-colors duration-300 ${
          selected === idx ? "text-yellow-400" : "text-white"
        }`}
      >
        {listTexts[idx].split(" — ")[0]}
      </p>
    </li>
  ))}
</ol>
          </div>

        </div>
      </div>
    </section>
      <section id="faqs" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#002140] text-white">
        <Motion.div
          className="w-full max-w-5xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <Motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Frequently Asked Questions about Step Deck & Flatbed Dispatching
            </Motion.h1>
            <Motion.p
              className="max-w-md mx-auto text-sm sm:text-base text-gray-300 leading-relaxed py-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Before you start working with Resolute Logistics, you may be
              interested in the step deck and flatbed dispatch services we
              provide, and what duties we have. You can look through the FAQ
              section and find the answers to the questions which are frequently
              asked.
            </Motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[FaqsColumn1, FaqsColumn2].map((column, i) => (
              <Motion.div
                key={i}
                className="space-y-4"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                {column.map((faq) => (
                  <FaqsCard
                    key={faq.id}
                    faq={faq}
                    isOpen={openFaqId === faq.id}
                    onClick={() => handleFaqToggle(faq.id)}
                  />
                ))}
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </section>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-orange-400 text-[#002147] p-3 rounded-xl shadow-lg hover:bg-orange-300 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      <Motion.div
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[rgb(249,249,249)] px-4 md:px-16 py-10 gap-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="./src/assets/section_form_428@2x.webp"
            alt="Person with laptop"
            className="rounded-lg shadow-md object-cover max-w-[400px] md:max-w-[350px] h-auto"
          />
        </Motion.div>
        <Motion.div
          className="w-full md:w-1/2 p-8 rounded-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Motion.h2
            className="text-3xl font-bold mb-6 text-black"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Write To Start Dispatch
          </Motion.h2>
          <Motion.div
            className="space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="border-b border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-[#0b1c2d] flex-1 py-2"
              />
              <select className="border-b border-gray-400 focus:outline-none focus:border-[#0b1c2d] flex-1 py-2 text-black">
                <option>I already have one</option>
                <option>I need factoring</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="E-MAIL*"
                className="border-b border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-[#0b1c2d] flex-1 py-2"
              />
              <div className="w-64 relative">
                <div className="flex items-center border-b border-gray-400">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center px-2 py-2 cursor-pointer select-none"
                    type="button"
                  >
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.code}
                      className="w-6 h-4 mr-2 object-cover"
                    />
                    <span className="mr-1 text-gray-700">
                      {selectedCountry.dial}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <input
                    type="tel"
                    placeholder="PHONE*"
                    className="focus:outline-none focus:border-[#0b1c2d] flex-1 py-2 placeholder-gray-400 text-gray-700"
                  />
                </div>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full mt-1 max-h-40 w-full overflow-auto rounded border bg-white shadow-lg z-10">
                    {countries.map((country) => (
                      <li
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country);
                          setDropdownOpen(false);
                        }}
                        className="cursor-pointer flex items-center px-3 py-2 hover:bg-gray-100"
                      >
                        <img
                          src={country.flag}
                          alt={country.code}
                          className="w-6 h-4 mr-2 object-cover"
                        />
                        <span className="mr-2">{country.code}</span>
                        <span className="text-gray-600">{country.dial}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <textarea
              placeholder="MESSAGE"
              className="border-b border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-[#0b1c2d] w-full py-2"
            />
            <div className="flex items-center gap-4 text-gray-700">
              <span>How should we contact you?</span>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Phone
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> E-mail
              </label>
            </div>
            <label className="flex items-center gap-2 text-gray-700 text-sm">
              <input type="checkbox" /> I have read and agree to the
              <a href="#" className="text-purple-600 underline">
                Privacy Notice
              </a>
            </label>
            <button
              type="submit"
              className="bg-black text-yellow-400 px-8 py-2 rounded-full hover:bg-gray-900 transition font-bold"
            >
              SEND
            </button>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </div>
  );
}