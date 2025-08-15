export default function HeroSection(){
    return(
        <section className='relative w-full h-[400px] sm:h-[320px] md:h-[550px] flex flex-col items-center justify-start text-center pt-10'
            style={{
                backgroundImage:"url('/images/shutterstock_1784613809.jpg')",
                backgroundSize:"cover",
                backgroundPosition:"center",

            }}
            >
                {/* overlay */}
                <div className='absolute inset-0 bg-black/70'></div>
                {/* text content */}
                
                <div className='relative z-10 px-4 sm:px-6 md:px-8 max-w-2xl text-center'>
                    <a href=""
                    className='inline-block text-[12px] sm:text-xs tracking-tight   text-[#8c8b8b] font-bold
                     px-2 py-1 rounded transition-colors duration-300 hover:text-orange-600'
                    >
                     Truck Dispatch
                    </a>
                    <span  className='text-[12px]  sm:text-xs  tracking-tight text-[#8c8b8b]  font-bold'
                    >
                         | Power Only
                    </span>
                <h1 className='mt-24 text-[18px] sm:text-[24px] md:text-[40px] font-semibold  text-white'>
                    Power Only Dispatch <br />Services
                </h1>
                <p className="text-[11px] sm:text-[13px] md:text-[15px] text-gray-200 text-center mx-auto max-w-[510px]">
                    Power only trucking is not more complicated than earning money with any other type of equipment. Yet, many power only carriers struggle to connect with right shippers and third-party logistics providers in a bid to pay off the investments and make a profit.
                </p>
                 <p className="mt-4 text-[11px] sm:text-[13px] md:text-[15px] text-gray-200 text-center mx-auto max-w-[510px]">
                    If you are one of them, Resolute Logistics offers a helping hand in power only dispatch service and ultimate support of your business, starting from searching for power unit only loads and ending with paperwork done on your behalf.
                </p>
                </div>
        </section>
    )
}