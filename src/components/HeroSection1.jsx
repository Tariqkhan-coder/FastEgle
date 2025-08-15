export default function HeroSection1(){
    return(
        <section className='relative w-full h-[400px] sm:h-[320px] md:h-[550px] flex flex-col items-center justify-start text-center pt-10'
            style={{
                backgroundImage:"url('/images/htsht.jpg')",
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
                    <span  className='text-[12px]  sm:text-xs  tracking-tight text-[#8c8b8b] font-bold'
                    >
                         | Hotshot
                    </span>
                <h1 className='mt-24 text-[18px] sm:text-[24px] md:text-[40px] font-semibold  text-white'>
                    Hotshot Dispatch Services 
                </h1>
                <p className="text-[11px] sm:text-[13px] md:text-[15px] text-gray-200 text-center mx-auto max-w-[510px]">
                    Hotshot trucking can bring you some of the highest rates per mile among all trucking equipment types since it almost always implies urgency. But urgency is exactly the thing that makes it difficult for drivers to keep track of offers and grab the best deals in between runs.
                </p>
                 <p className="mt-5 text-[11px] sm:text-[13px] md:text-[15px] text-gray-200 text-center mx-auto max-w-[510px]">
                   Hotshot dispatch services provided by Resolute Logistics remove the obstacle to your business development by undertaking all back-office functions and booking hotshot orders on your behalf.
                </p>
                </div>
        </section>
    )
}