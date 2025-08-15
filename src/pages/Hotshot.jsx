import React from 'react';
import HeroSection1 from '../components/HeroSection1';
import SecondSection1 from '../components/SecondSection1';
import ThirdSection1 from '../components/ThirdSection1';
import Choose from '../components/Choose';
import Questions from '../components/Questions';
import Form from '../components/Form';
export default function Hotshot(){
    return(
        <main>
            <HeroSection1/>
            <SecondSection1/>
            <ThirdSection1/>
            {/* benfits of hotshot*/}
            <Choose/>
             <section className='px-18 py-12 text-gray-200 space-y-6 max-w-[1000px] '>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                     Unlike many other hotshot dispatch companies, Resolute Logistics offers end-to-end support for hotshot owner-operators so that they can focus on doing their job without any stress and hassle. The whole of our experienced, committed, and agile team will work towards this goal, as excellent customer care is our top priority. Hotshotting is easy when you&rsquo;ve got professional 
                     <a
                      className=" underline decoration-gray-300 " 
                       href="https://resolute-logistics.com/"> dispatch services</a> for hotshot loads!
                </p>
            </section>
            <Questions/>
            <Form/>
            

        </main>
    )
}