import React from 'react';

const BenefitsSection = () =>{
    return(
        <section className=' py-12 px-6 md:px-12'>

            <div className='max-w-6xl mx-auto'>
                {/* heading */}
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white max-w-[800px]'>
                      Benefits of  <span className='text-orange-500'>Power Only Dispatch</span> in
                       Resolute Logistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 text-sm sm:text-base leading-relaxed">
          <ul className="space-y-1 list-disc list-outside pl-6 pt--2 text-[14px] marker:text-orange-500">
            <li>You will get a dedicated dispatcher trained to work with power only freight to provide power only dispatch services.</li>
            <li>Your personal assistant will search through power only load boards to find the best-paying deals and pair them with backhauls so that your tractor can generate more profit for you.&nbsp;</li>
            <li>We will select orders according to your wishes, and you retain the right to decline power only truck loads that don&rsquo;t fit into your preferred lane, require too much skill, or don&rsquo;t satisfy you in any other way.</li>
            <li>Since rates for different types of load as well as for regional, long-haul, and local power only loads can vary drastically, we will negotiate the best possible terms based on constant monitoring and analysis of spot rates and loads-to-trucks ratio.</li>
            <li>Your power only dispatcher will complete all the required set-up paperwork for you to hit the road without worries.</li>
          </ul>

          <ul className="space-y-1 list-disc list-outside text-[14px]  pl-6  md:pt-6 pt-0 marker:text-orange-500">
            <li>You will stay connected to your dedicated power only dispatch throughout the entire trip to get advice and support 24/7.</li>
            <li>While you will be doing your job, our team will continue combing through power only load boards with rates to plan your future trips as far in advance as possible and thus provide you with a strong revenue stream.</li>
            <li>Once you drop off the load, we will collect your billing documents and forward them to brokers/freight factoring companies for payment.&nbsp;</li>
            <li>If any dispute with a shipper or broker arises, our experts will engage in negotiations to find the most beneficial solution for all the parties.</li>
            <li>Whether you want to stick to hot shot power only services or wish to grow to semi-trucks, our experienced team will offer you effective ways to</li>
            <li>develop your business.</li>
          </ul>
        </div>
            </div>
        </section>
    )
}
export default BenefitsSection;