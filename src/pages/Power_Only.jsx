import React from 'react';
import HeroSection from '../components/HeroSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import BenefitsSection from '../components/BenefitsSection';
import FAQ from '../components/FAQ';
import Form from '../components/Form';

export default function Power_Only(){
    return(
        <main>
            <HeroSection/>
            <SecondSection/>
            <ThirdSection/>
            {/* short paras */}
            <section className='px-18 py-12 text-gray-200 space-y-6 max-w-[1000px] '>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                     Our <a className=" underline decoration-gray-300 "
                      href="https://resolute-logistics.com/"
                       
                      > dispatch company</a> solves this problem thanks to our experts with years of experience in freight brokerage and contacts established with top brokers in the U.S.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>You don&rsquo;t need to join the USA Truck Power Only program or hunt for power only loads all by yourself since our dispatching company will provide you with a much better option:
                </p>
            </section>
            <BenefitsSection/>
            <FourthSection/>
            <FAQ/>
            <Form/>
            
        </main>
    )
}