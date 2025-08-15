import React from 'react';

const Choose = () =>{
    return(
        <section className=' py-12 px-6 md:px-12 bg-[#002140]'>
             <h2 className='mb--24 px-4 py-4 pr-10 text-2xl sm:text-3xl md:text-4xl font-bold  text-white max-w-[800px] '>
                      Benefits of <span className='text-orange-500'> Hotshot Dispatch </span> 
                       in Resolute Logistics
                </h2>
                <section className='px-4 py-4 pr-10 text-gray-200 space-y-6 max-w-[920px] '>
                <p className='pt--12 text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                     The partnership with the Resolute Logistics hotshot dispatch service eliminates the need to painfully grow your own client base.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>Boasting a totaled fright brokerage experience of 15 years, our team has established good contact with top brokers on the US market.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                     The experts of our hot shot dispatch service excel in communication, which allows us to negotiate the best-paying loads for drivers and build positive relationships with shippers and brokers. In addition, we grant hotshot operators access to other benefits.
                </p>
            </section>

            <div className='max-w-6xl mx-auto'>
                {/* heading */}
                <h2 className='px-2 py-4 pr-4 text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white max-w-[800px]'>
                      Why Choose<span className='text-orange-500'> Resolute Logistics' </span> 
                       Hotshot Dispatch Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 text-sm sm:text-base leading-relaxed">
          <ul className="space-y-1 list-disc list-outside pl-6 pt--2 text-[14px] marker:text-orange-500">
            <li>We assign a personal hotshot dispatcher to each client to stay in touch 24/7 and resolve any issue you might encounter while on the road. These dispatchers are trained to work with every owner-operator as an individual business with their individual strengths. Long runs or medium range ones, Texas or Iowa, owned or rental hotshot truck - we can make it all work.</li>
            <li>We provide our dispatchers for hotshot loads with ongoing industry-specific training to anticipate problems even before they arise.</li>
            <li>Our truck dispatch for hotshot loads include handling all the paperwork, starting with preparing set-up packets and ending with billing.</li>
            <li>Your dedicated hotshot trucking dispatcher will schedule your runs as far ahead as possible to ensure that downtime and deadhead mileage are reduced to the minimum.</li>
           
          </ul>

          <ul className="space-y-1 list-disc list-outside text-[14px]  pl-6  md:pt-6 pt-0 marker:text-orange-500">
            <li>We will select loads based on your preferences and capabilities while respecting your right to decline an offer that doesn't seem to contribute to reaching your goals. We have partnerships with suppliers and brokers all around the USA and will never leave you without work.</li>
            <li>If any dispute arises with shippers and brokers, we advise you on the most suitable solution, and can communicate with another party on your behalf.</li>
            <li>Our dispatch service for hotshot operators is aimed at helping your business to grow; so, if you want to switch to semi-trucks one day, we will develop a plan for you to hit the target and guide you throughout your big rig journey.</li>
           
          </ul>
        </div>
            </div>
        </section>
    )
}
export default Choose;