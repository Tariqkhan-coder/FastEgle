import factoring_images from "../../../assets/Images/factoring/index";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TechIcon from "../../../components/TechIcon";
import { motion } from "motion/react";

export default function TopSection() {
  const scrollToDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const container = {
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

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${factoring_images.top_section})` }}
    >
      <div className="container flex-1 flex flex-col">
        <div className="pt-10">
          <h3 className="text-center text-accent cursor-pointer text-sm font-semibold">
            <Link>Truck Dispatch </Link>
            <span className="text-white/50 cursor-default">
              | Factoring for trucking companies
            </span>
          </h3>
        </div>
        <div className="flex-1 flex items-end pb-25">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="w-full max-w-[650px] bg-dark-blue p-6 md:p-10"
          >
            <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
              Factoring for trucking companies
            </h1>

            <p className="w-full my-4 md:my-7 text-sm md:text-base">
              Get high-quality freight factoring for trucking companies and
              truckers in the USA and Canada.
            </p>

            <div>
              <Button
                size="lg"
                className="w-full md:w-auto font-normal text-md"
              >
                Start factoring
              </Button>
            </div>

            <div className="flex items-center justify-between mt-6 md:mt-10 gap-4">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TechIcon
                    name="youtube"
                    className="bg-accent rounded p-1 h-8 w-8 cursor-pointer hover:orange-600"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TechIcon
                    name="linkedin"
                    className="bg-accent rounded p-1 h-8 w-8 cursor-pointer hover:orange-600"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TechIcon
                    name="facebook"
                    className="bg-accent rounded p-1 h-8 w-8 cursor-pointer hover:orange-600"
                  />
                </motion.div>

                <motion.div
                  className="hidden md:block min-w-[200px] h-[1.1px] rounded bg-accent ml-5"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
              <motion.svg
                className="hide_onMobile cursor-pointer"
                onClick={scrollToDown}
                width="24"
                height="51"
                viewBox="0 0 24 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5044 0.5C17.5594 0.5 22.5044 5.38714 22.5044 11.3714V27.6286C22.5044 33.6129 17.5594 38.5 11.5044 38.5C5.44935 38.5 0.504395 33.6129 0.504395 27.6286V11.3714C0.504395 5.38714 5.44935 0.5 11.5044 0.5Z"
                  stroke="white"
                  strokeWidth="1.0001"
                  strokeMiterlimit="22.9256"
                />

                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5877 9.48755C12.3377 9.48755 13.0877 8.86255 13.0877 7.98755C13.0877 7.23755 12.4627 6.48755 11.5877 6.48755C10.8377 6.48755 10.0877 7.11255 10.0877 7.98755C10.2127 8.86255 10.8377 9.48755 11.5877 9.48755Z"
                  fill="white"
                  transform="translate(0 9)"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.g
                  transform="translate(0 9)"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M5 44L11.8687 50"
                    stroke="white"
                    strokeWidth="1.0001"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 44L12.1313 50"
                    stroke="white"
                    strokeWidth="1.0001"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
