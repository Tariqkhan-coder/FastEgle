import { Link } from "react-router-dom";
import prices_images from "../assets/Images/prices/index";

const Breadcrumb = ({ pageName, title, description, height = "45vh" }) => {
  return (
    <section
      className="relative bg-cover bg-center z-10 overflow-hidden"
      style={{
        backgroundImage: `url(${prices_images.prices_bg})`,
        height: height,
      }}
    >
      <div className="w-full h-full bg-black/60">
        <div className="container">
          <div className="flex flex-col gap-20 items-center">
            <div className="pt-8">
              <h3 className="text-center text-accent cursor-pointer text-sm font-semibold">
                <Link to="/">Truck Dispatch </Link>
                <span className="text-white/50 cursor-default">
                  | {pageName}
                </span>
              </h3>
            </div>

            <div className="text-center">
              <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
                {title}
              </h1>
              <p className="w-full max-w-99 text-center mt-4 w-full text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs */}
      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_left)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_left"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#132c44" />
                <stop
                  offset="100%"
                  stopColor="#ff6b00"
                  stopOpacity="0.5"
                />{" "}
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_right)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_right)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_right"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff6b00" />
                <stop offset="1" stopColor="#ff6b00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_right"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff6b00" />
                <stop offset="1" stopColor="#ff6b00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Breadcrumb;
