import { TruckElectric } from "lucide-react";
import CustomSvg from "../../public/svg";
import Truck from "../../public/truck";
import Questions from "./../components/Questions";
import Form from "../components/Form";

function BoxTruck() {
  return (
    <div className="div">
      {/* header */}
      <div className="flex justify-center items-center bg-[url('/bxtruck_320.jpg')] bg-cover bg-center bg-no-repeat overflow-x-hidden 2xl:h-[50vh] h-[100vh] relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
          <div className="flex justify-center items-center w-full h-full max-w-screen relative z-10 px-4">
            <div className="content max-w-[600px] w-full">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
                Box Truck Dispatch Service
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg mt-4 text-center mb-[15px] leading-relaxed">
                Sick and tired of struggling with paperwork and hunting for
                decent freight rates in between trips? Our box truck dispatch
                service will relieve you of all the common headaches truck
                drivers are forced to encounter daily.
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg mt-4 text-center leading-relaxed">
                Sick and tired of struggling with paperwork and hunting for
                decent freight rates in between trips? Our box truck dispatch
                service will relieve you of all the common headaches truck
                drivers are forced to encounter daily.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* dispatches */}
      <div className="flex flex-col justify-center items-center bg-white w-full">
        {/* /* dispatch container 1 */}
        <div className="flex flex-col lg:flex-row mt-20 lg:mt-40 gap-6 lg:gap-10 mb-2 px-4 lg:px-0 w-full max-w-7xl">
          <div className="content flex flex-col max-w-full lg:max-w-[45vw] w-full">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 leading-tight">
              Get the best Dry Van loads with our expert dispatchers
            </h1>
            <p className="text-black mb-6 leading-relaxed text-sm md:text-base">
              Having 15 years of experience in freight brokerage, we are very
              much aware of the benefits you can derive from owning or leasing a
              box truck.
            </p>
          </div>
          <div className="img-cont max-w-full lg:max-w-[45vw] w-full">
            <img
              className="w-full h-auto object-cover object-center"
              src="public/box-truck-dispatch-service.jpg"
              alt=""
              loading="lazy"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>
        {/* /* dispatch container 2 */}
        <div className="flex flex-col lg:flex-row mt-20 lg:mt-40 gap-6 lg:gap-10 mb-2 px-4 lg:px-0 w-full max-w-7xl">
          <div className="img-cont max-w-full lg:max-w-[45vw] w-full">
            <img
              className="w-full h-auto object-cover object-center"
              src="public/box-truck-dispatch2.jpg"
              alt=""
              loading="lazy"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
          <div className="content flex flex-col max-w-full lg:max-w-[45vw] w-full">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 leading-tight">
              Experts in Dispatching Box Trucks Help You Grow
            </h1>
            <p className="text-black mb-6 leading-relaxed text-sm md:text-base">
              Having 15 years of experience in freight brokerage, we are very
              much aware of the benefits you can derive from owning or leasing a
              box truck.
            </p>
            <p className="text-black leading-relaxed text-sm md:text-base">
              Having 15 years of experience in freight brokerage, we are very
              much aware of the benefits you can derive from owning or leasing a
              box truck.
            </p>
          </div>
        </div>
        {/* /* dispatch container 3 */}
        <div className="flex flex-col lg:flex-row mt-20 lg:mt-40 gap-6 lg:gap-10 mb-15 px-4 lg:px-0 w-full max-w-7xl">
          <div className="content flex flex-col max-w-full lg:max-w-[45vw] w-full">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 leading-tight">
              Experts in Dispatching Box Trucks Help You Grow
            </h1>
            <p className="text-black mb-6 leading-relaxed text-sm md:text-base">
              Having 15 years of experience in freight brokerage, we are very
              much aware of the benefits you can derive from owning or leasing a
              box truck.
            </p>
            <p className="text-black leading-relaxed text-sm md:text-base">
              Having 15 years of experience in freight brokerage, we are very
              much aware of the benefits you can derive from owning or leasing a
              box truck.
            </p>
          </div>
          <div className="img-cont max-w-full lg:max-w-[45vw] w-full">
            <img
              className="w-full h-auto object-cover object-center"
              src="public/straight-truck-dispatch-service3.jpg"
              alt=""
              loading="lazy"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>
      </div>
      {/* goals section */}
      <section className="flex flex-col md:flex-row justify-center items-center bg-[url('/public/goals-section-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-x-hidden 2xl:h-[40vh] h-[100vh] relative w-full">
        <div className="inset-0  flex justify-center items-center">
          <div className="content-goals flex flex-col md:flex-row justify-center items-center h-full w-full max-w-7xl mx-auto px-2">
            <div className="left flex flex-col w-full md:max-w-[45vw] mb-8 md:mb-0">
              <div className="svg-cont mb-3">
                <CustomSvg />
              </div>
              <div className="left-content">
                <p className="text-white text-sm sm:text-base md:text-lg leading-tight">
                  Be it rate confirmations, insurance papers, invoices, or
                  set-up packets, your dispatcher will handle each document
                  professionally, without bothering you over trifles. Since we
                  provide end-to-end dispatch box truck services, you just need
                  to deliver cargo and check that your payment has already
                  arrived.
                </p>
              </div>
              <div className="separator border-t border-yellow-400 my-6 max-w-[20vw]"></div>
              <div className="text-after-separator text-white text-sm sm:text-base">
                We are pros in dispatching box trucks, and you can leave all
                back-office aspects to us!
              </div>
            </div>
            <div className="right flex flex-col gap-6 sm:gap-8 md:gap-12 w-full md:max-w-[70vw] 2xl:max-w-[80vw]">
              <div className="row1 flex-1/2">
                <p className="count inline mr-3 text-2xl sm:text-3xl md:text-4xl text-amber-300">
                  01
                </p>
                <p className="text inline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Document Management
                </p>
              </div>
              <div className="row2">
                <p className="count inline mr-3 text-2xl sm:text-3xl md:text-4xl text-amber-300">
                  02
                </p>
                <p className="text inline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Route Optimization
                </p>
              </div>
              <div className="row3">
                <p className="count inline mr-3 text-2xl sm:text-3xl md:text-4xl text-amber-300">
                  03
                </p>
                <p className="text inline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Document Management
                </p>
              </div>
              <div className="row4">
                <p className="count inline mr-3 text-2xl sm:text-3xl md:text-4xl text-amber-300">
                  04
                </p>
                <p className="text inline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Load Planning
                </p>
              </div>
              <div className="row5">
                <p className="count inline mr-3 text-2xl sm:text-3xl md:text-4xl text-amber-300">
                  05
                </p>
                <p className="text inline text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Document Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* frequently ask question  */}
      <Questions />
      {/* contact form */}
      <Form />
    </div>
  );
}

export default BoxTruck;
