import { motion } from "motion/react";
import Button from "../../../components/Button";
import VideoModal from "./VideoModal";
import { useState } from "react";
import video from "../../../assets/video.mp4";

export default function Achivements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  const containerLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };
  const containerRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };
  return (
    <section className="relative z-1">
      <div className="flex flex-col lg:flex-row items-center gap-x-20 gap-y-12 py-15 md:py-25">
        <div className="w-full lg:max-w-[800px] flex items-center">
          <div className="h-full w-[280px] pointer-events-none hidden md:block">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 180 600"
              preserveAspectRatio="xMinYMid"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M180 0V600"
                stroke="url(#professionalGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />

              <path
                d="M120 120C80 180 40 220 60 300C80 380 140 400 100 480"
                stroke="#f97316"
                strokeWidth="1.2"
                strokeOpacity="0.4"
                fill="none"
              />

              {[...Array(15)].map((_, row) =>
                [...Array(4)].map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={20 + col * 40}
                    cy={80 + row * 30}
                    r={0.8 + Math.random() * 0.4}
                    fill="#f97316"
                    fillOpacity={0.15 + Math.random() * 0.1}
                  />
                ))
              )}

              <rect
                x="30"
                y="240"
                width="60"
                height="120"
                rx="2"
                transform="rotate(-5 30 240)"
                fill="url(#highlightGradient)"
              />

              <defs>
                <linearGradient
                  id="professionalGradient"
                  x1="180"
                  y1="0"
                  x2="180"
                  y2="600"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f97316" stopOpacity="0" />
                  <stop offset="0.3" stopColor="#f97316" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="highlightGradient"
                  x1="30"
                  y1="240"
                  x2="90"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f97316" stopOpacity="0.05" />
                  <stop offset="1" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={containerLeft}
            className="container"
          >
            <div className="">
              <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
                Achivements
              </h1>
              <p className="w-full my-4 md:my-7 text-sm md:text-base">
                Through our trusted factoring partner, we provide customized
                factoring services to match the demands of each transportation
                client. We simplify operations for trucking companies and
                professionals through efficient load management, timely
                delivery, and optimized routing. Our industry expertise and
                innovative technology allow us to respond to market changes
                while maintaining good connections with carriers, shippers, and
                brokers. From fleet management to freight factoring services,
                our solutions help you succeed.
              </p>
              <p className="w-full my-4 md:my-7 text-sm md:text-base">
                Our unwavering commitment to excellence is reflected in our
                personalized support to each client. We believe transparent
                communication and proactive assistance are the cornerstone of
                successful partnerships. That's why our team offers 24/7 client
                support, addressing challenges quickly and ensuring seamless
                operations at every stage of the process. Whether you're an
                owner-operator seeking dependable assistance or a fleet manager
                striving for growth in the US or Canada, we're dedicated to
                driving your success with unmatched reliability, innovation, and
                professionalism.
              </p>
              <Button
                size="lg"
                className="w-full md:w-auto font-normal text-md"
              >
                Start factoring
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={containerRight}
          className="relative w-full lg:max-w-[650px] rounded-xl pr-3 md:pr-5 pl-3 md:pl-5 lg:pl-0"
        >
          <img
            src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full rounded-xl"
          />

          <div
            onClick={isOpen}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="relative w-18 h-18 md:w-20 md:h-20 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.3,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ea580c",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="absolute inset-0 border-2 border-soft-white rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: 1.5,
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.span
                className="absolute inset-0 border-2 border-white rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: 1.8,
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 text-white ml-1 z-20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        <div className="absolute top-0 right-0 -z-1 opacity-100">
          <svg
            width="238"
            height="531"
            viewBox="0 0 238 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="422.819"
              y="-70.8145"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 422.819 -70.8145)"
              fill="url(#paint0_linear_83:2)"
            />
            <rect
              opacity="0.3"
              x="426.568"
              y="144.886"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 426.568 144.886)"
              fill="url(#paint1_linear_83:2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_83:2"
                x1="517.152"
                y1="-251.373"
                x2="517.152"
                y2="459.865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f97316" stopOpacity="1" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_83:2"
                x1="455.327"
                y1="-35.673"
                x2="455.327"
                y2="675.565"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f97316" stopOpacity="1" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={onClose}
        videoUrl={video}
        title="Great Achievements Showcase"
      />
    </section>
  );
}
