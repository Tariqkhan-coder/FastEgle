import { motion } from "motion/react";
import factoring_images from "../../../assets/Images/factoring/index";
export default function About() {
  const container = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };
  return (
    <section>
      <div className="container py-15 md:py-24">
        {/* About 1 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={container}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10"
        >
          <div className="relative w-full lg:w-[562px] h-full">
            <img
              src={factoring_images.about1}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute left-0 -bottom-6 md:-bottom-12 text-accent text-6xl md:text-9xl">
              1.
            </h1>
          </div>
          <div className="w-full lg:max-w-[650px]">
            <h1 className="max-w-[500px] text-white text-3xl md:text-4xl font-semibold leading-tight">
              Get paid fast with reliable factoring solutions
            </h1>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              In the trucking business, delays in receiving payments can make it
              difficult to meet day-to-day operational demands. Resolute
              Logistics offers a reliable factoring service that helps trucking
              companies get paid faster, typically within 24 hours of submitting
              their freight bills. This immediate cash flow is a game-changer
              for owner-operators and fleets, ensuring they have the financial
              stability to cover critical expenses like fuel, repairs, and wages
              without waiting 30-60 days for customer payments. This service
              lets you focus on business growth rather than worrying about cash
              flow gaps.
            </p>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Resolute Logistics streamlines factoring. Simply submit your bills
              to obtain much of the invoice value upfront. You focus on great
              service while we manage the rest, including client payment
              follow-up. With factoring fees as low as 3% of transportation
              costs, our straightforward pricing model lets you know what to
              expect. Our U.S. and Canadian operations ensure constant cash flow
              wherever you operate. You may prosper as a freight factoring
              company in a competitive market with Resolute Logistics.
            </p>
          </div>
        </motion.div>
        {/* About 2 */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={container}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10 my-10 md:my-20"
        >
          <div className="w-full lg:max-w-[650px] order-2 lg:order-1">
            <h1 className="max-w-[500px] text-white text-3xl md:text-4xl font-semibold leading-tight">
              Why choose resolute logistics for freight factoring?
            </h1>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              The right freight company can significantly impact your financial
              health and business growth. Resolute Logistics stands out by
              offering services beyond simply advancing payments. Our team's 15+
              years of brokerage and logistics experience ensure we understand
              the unique challenges of the trucking industry. Whether you're an
              independent owner-operator or managing a fleet, we tailor our
              solutions to meet your needs, helping you easily navigate the
              complexities of cash flow management.
            </p>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Transparency is at the core of our services. With a
              straightforward 3% factoring fee, you'll never encounter hidden
              costs or surprises. Moreover, we provide fuel cards with
              significant savings, allowing you to reinvest in your business and
              reduce operational expenses. Our 24/7 support team ensures issues
              are addressed quickly and effectively, so you're never left
              waiting for answers. Resolute Logistics is more than a trucking
              factoring company-we're a trusted partner focused on helping you
              succeed in today's competitive market. You can confidently manage
              your operations and finances with reliable freight factoring
              services.
            </p>
          </div>

          <div className="relative w-full lg:w-[562px] h-full order-1 lg:order-2">
            <img
              src={factoring_images.about2}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute left-0 -bottom-6 md:-bottom-12 text-accent text-6xl md:text-9xl">
              2.
            </h1>
          </div>
        </motion.div>
        {/* About 3 */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={container}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10"
        >
          <div className="relative w-full lg:w-[562px] h-full">
            <img
              src={factoring_images.about3}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute left-0 -bottom-6 md:-bottom-12 text-accent text-6xl md:text-9xl">
              3.
            </h1>
          </div>
          <div className="w-full lg:max-w-[650px]">
            <h1 className="max-w-[500px] text-white text-3xl md:text-4xl font-semibold leading-tight">
              Dispatch and factoring services in one solution
            </h1>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Making smart financial decisions is vital for trucking companies
              striving to stay competitive and grow. Resolute Logistics offers
              tailored transport solutions that address the unique needs of the
              trucking industry, helping businesses of all sizes thrive. With
              our services, you no longer have to worry about cash flow
              interruptions or long payment delays. Instead, you can focus on
              taking advantage of new opportunities to expand and improve your
              operations.
            </p>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Resolute Logistics offers more than factoring; we provide tools
              and resources to support your success. Our online platform makes
              it easy to submit invoices, monitor payment status, and manage
              your account from any location, ensuring maximum convenience and
              transparency. We also prioritize customer relationships, providing
              personalized service that adapts to your evolving needs. Whether
              you're an owner-operator or running a large fleet, our flexible
              solutions are designed to grow your business. Partnering with a
              proven trucking factoring service, like Resolute Logistics,
              ensures consistent support and success.
            </p>
          </div>
        </motion.div>
        {/* About 4 */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={container}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10 my-10 md:my-20"
        >
          <div className="w-full lg:max-w-[650px] order-2 lg:order-1">
            <h1 className="max-w-[500px] text-white text-3xl md:text-4xl font-semibold leading-tight">
              The smart choice for trucking factoring
            </h1>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Making smart financial decisions is vital for trucking companies
              striving to stay competitive and grow. Resolute Logistics offers
              tailored transport solutions that address the unique needs of the
              trucking industry, helping businesses of all sizes thrive. With
              our services, you no longer have to worry about cash flow
              interruptions or long payment delays. Instead, you can focus on
              taking advantage of new opportunities to expand and improve your
              operations.
            </p>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Resolute Logistics offers more than factoring; we provide tools
              and resources to support your success. Our online platform makes
              it easy to submit invoices, monitor payment status, and manage
              your account from any location, ensuring maximum convenience and
              transparency. We also prioritize customer relationships, providing
              personalized service that adapts to your evolving needs. Whether
              you're an owner-operator or running a large fleet, our flexible
              solutions are designed to grow your business. Partnering with a
              proven trucking factoring service, like Resolute Logistics,
              ensures consistent support and success.
            </p>
          </div>

          <div className="relative w-full lg:w-[562px] h-full order-1 lg:order-2">
            <img
              src={factoring_images.about4}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute left-0 -bottom-6 md:-bottom-12 text-accent text-6xl md:text-9xl">
              4.
            </h1>
          </div>
        </motion.div>

        {/* About 5 */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          variants={container}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10"
        >
          <div className="relative w-full lg:w-[562px] h-full">
            <img
              src={factoring_images.about5}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute left-0 -bottom-6 md:-bottom-12 text-accent text-6xl md:text-9xl">
              5.
            </h1>
          </div>
          <div className="w-full lg:max-w-[650px]">
            <h1 className="max-w-[500px] text-white text-3xl md:text-4xl font-semibold leading-tight">
              24/7 support and easy document management
            </h1>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Making smart financial decisions is vital for trucking companies
              striving to stay competitive and grow. Resolute Logistics offers
              tailored transport solutions that address the unique needs of the
              trucking industry, helping businesses of all sizes thrive. With
              our services, you no longer have to worry about cash flow
              interruptions or long payment delays. Instead, you can focus on
              taking advantage of new opportunities to expand and improve your
              operations.
            </p>
            <p className="w-full my-4 text-soft-white md:my-7 text-sm md:text-base">
              Resolute Logistics offers more than factoring; we provide tools
              and resources to support your success. Our online platform makes
              it easy to submit invoices, monitor payment status, and manage
              your account from any location, ensuring maximum convenience and
              transparency. We also prioritize customer relationships, providing
              personalized service that adapts to your evolving needs. Whether
              you're an owner-operator or running a large fleet, our flexible
              solutions are designed to grow your business. Partnering with a
              proven trucking factoring service, like Resolute Logistics,
              ensures consistent support and success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
