import ServicesBox from "./ServicesBox";
import OfferList from "./OfferList";
import { motion } from "framer-motion";

const ServicesTwo = () => {
  const leftContainer = {
    hidden: { x: -150, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: "easeOut" as const,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };
  const bottomContainer = {
    hidden: { y: 150, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: "easeOut" as const,
        duration: 0.8,
        delay: 0.2,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const rightContainer = {
    hidden: { x: 150, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: "easeOut" as const,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={leftContainer}
          >
            <ServicesBox
              packageName1="Only Dispatch"
              packageName2="Lite"
              subtitle="Complete load management from booking to delivery"
            >
              <OfferList
                text="Semi trucks – 5% of Gross Revenue"
                status="active"
              />
              <OfferList
                text="Hotshot trucks - 8% of Gross Revenue"
                status="active"
              />
              <OfferList
                text="Box trucks - 10% of Gross Revenue"
                status="active"
              />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="inactive" />
              <OfferList text="Free Lifetime Updates" status="inactive" />
            </ServicesBox>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={bottomContainer}
          >
            <ServicesBox
              packageName1="Only Factoring"
              packageName2="Basic"
              subtitle="Fast payments, client support, document management, fuel cards, and more."
            >
              <OfferList
                text="All trucks – 3% of the freight value"
                status="active"
              />
              <OfferList text="Use with Unlimited Projects" status="iactive" />
              <OfferList text="Commercial Use" status="inactive" />
              <OfferList text="Extra Feature" status="inactive" />
              <OfferList text="Bonus Support" status="inactive" />
              <OfferList text="Free Trial" status="inactive" />
            </ServicesBox>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={rightContainer}
          >
            <ServicesBox
              packageName1="Factoring + Dispatch"
              packageName2="Plus"
              subtitle="Full-service support for seamless operations. Best package of ours."
            >
              <OfferList
                text="Semi trucks – 7% of Gross Revenue"
                status="active"
              />
              <OfferList
                text="Hotshot trucks – 10% of Gross Revenue"
                status="active"
              />
              <OfferList
                text="Box trucks – 12% of Gross Revenue"
                status="active"
              />

              <OfferList text="Extra Feature" status="inactive" />
              <OfferList text="Bonus Support" status="inactive" />
              <OfferList text="Free Trial" status="inactive" />
            </ServicesBox>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ServicesTwo;
