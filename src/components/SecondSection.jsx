
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
const SecondSection = ()=>{
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
                className='flex-1 flex flex-col justify-center bg-[#002140] p-6 rounded-lg'
                initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
                >
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight'>Professional Dispatching Services for <span className='text-orange-500'>Power Only</span> Trucking Companies</h2>
                    <p className='text-[11px] sm:text-[13px] md:text-[15px]  text-gray-200 leading-relaxed text-lg'>
                        Although power only trucking rates seem not as lucrative as earnings of flatbed or dry van operators, a combo of a driver and a tractor can still be competitive and profitable. Quite a number of shippers and 3PLs use leased trailers to scale up their capacities during peak shipping seasons or weekend surges, and they are eager to source power only trucks for hauling their cargo. Even those shippers who operate their own fleets often look for power only carriers needed to correct network imbalances or cover seasonal fluctuations.
                    </p>
                </motion.div>
                {/* right side */}
                <div className='flex-1'>
                    <img 
                    src="/images/power-only-dispatch-services.jpg" 
                    alt="Powers Only" 
                    className={`w-full h-full object-cover shadow-lg transition-opacity duration-700 ease-in-out
              ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionProperty: 'opacity, transform' }}/>
                </div>
            </div>
        </section>
    )
}
export default SecondSection;