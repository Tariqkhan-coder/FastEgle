import { motion } from "framer-motion";
import factoring_images from "../../../assets/Images/factoring";
import { servicesOneData } from "./servicesOneData";

export default function Services() {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${factoring_images.services})` }}
    >
      <div className="container py-15 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[650px]"
        >
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Factoring services made simple
          </h1>
          <p className="w-full my-4 md:my-7 text-sm md:text-base">
            Get paid faster and focus on moving freight - we'll handle the rest.
            Once you've delivered your freight, our factoring service ensures
            you get paid quickly. Send us your paperwork, and in just 1 business
            day, we'll transfer the payment directly to you. No need to wait
            30-60 days for brokers to pay - we handle that part for you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          transition={{ staggerChildren: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 space-y-10 mt-20"
        >
          {servicesOneData.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ backgroundColor: "transparent" }}
                animate={{ backgroundColor: "#f97316" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-15 h-15 text-white rounded-full flex items-center justify-center font-semibold text-xl outline-2 outline-dashed outline-white outline-offset-3"
              >
                {step.number}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm mt-1 max-w-[200px]">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
