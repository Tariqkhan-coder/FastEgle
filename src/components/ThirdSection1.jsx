import React , {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
const ThirdSection1 = ()=>{
     const [showImage, setShowImage] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowImage(true);
        }, 1000); // 2000ms = 2 seconds delay before showing image
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <section className='max-w-6xl mx-auto px-6 py-12'>
            <div className='flex flex-col-reverse md:flex-row items-stretch gap-8'>
                {/* left side */}
                 <div className='flex-1'>
                    <img 
                    src="/images/services-near-me.jpg" 
                    alt="Powers Only" 
                    className={`w-full h-full object-cover shadow-lg transition-opacity duration-700 ease-in-out
              ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionProperty: 'opacity, transform' }}/>
                </div>
               
                {/* right side */}
                <motion.div 
                className='flex-1 flex flex-col justify-center bg-[#002140] p-6 rounded-lg'
                initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
                >
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 leading-tight'>Why Dispatch Service is a   <span className='text-orange-500'>Must-Have</span> for Hotshots</h2>
                    <p className='mt-6 text-[11px] sm:text-[13px] md:text-[15px]  text-gray-200 leading-relaxed text-lg'>
                       However, you wouldn&rsquo;t need to even think of hotshot dispatch services if it was all that simple. Hotshot loads are unpredictable and time-sensitive by their nature, which means that you cannot rely on a steady income, yet you have to be ready for a trip at a moment&rsquo;s notice.&nbsp;
                    </p>
                     <p className='text-[11px] sm:text-[13px] md:text-[15px]  text-gray-200 leading-relaxed text-lg mt-6'>
                        Deadheading may eat away at your budget, as it is more difficult to find backhauls for hotshot drivers. Besides, the low threshold results in fierce competition, and that is where our hotshot dispatch company can make all the difference.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
export default ThirdSection1;