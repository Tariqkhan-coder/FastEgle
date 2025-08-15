import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
const FourthSection = ()=>{
     const [showImage, setShowImage] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowImage(true);
        }, 1000); // 2000ms = 2 seconds delay before showing image
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <section className='max-w-6xl mx-auto px-6 py-12'>
            <div className='flex flex-col md:flex-row items-stretch gap-8'>
                {/* left side */}
                <motion.div 
                className='flex-[1.1] flex flex-col justify-center bg-[#002140] p-6 rounded-lg'
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                >
                    <h2 className=' mt-12 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight'>Best Power Only <span className='text-orange-500'>Dispatchers</span></h2>
                    <p className='text-[11px] sm:text-[13px] md:text-[15px]  text-gray-200 leading-relaxed text-lg'>
                        With our power only dispatching, you don&rsquo;t need to search for the best power only load board available on the market to keep your tractor busy and earning money.&nbsp;
                    </p>
                      <p className='mt-6 mb-6 text-[11px] sm:text-[13px] md:text-[15px]  text-gray-200 leading-relaxed text-lg'>
                       We deliver more than any load boards for power only operators &mdash; excellent power only dispatch service, as well as customer care and confidence about the future.
                    </p>
                </motion.div>
                {/* right side */}
                <div className=' flex-1'>
                    <img 
                    src="/images/power-only-dispatch.jpg" 
                    alt="Powers Only" 
                    className={`w-full h-full object-cover shadow-lg transition-opacity duration-900 ease-in-out
              ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionProperty: 'opacity, transform' }}
            />
                </div>
            </div>
        </section>
    )
}
export default FourthSection;