
import React from 'react'
import bg from "../images/dry-van-dispatch.jpg"
import image from "../images/dry-van-dispatch.jpg"
// import Aos from 'aos'
import bg2 from "../images/bgimage2.webp"
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TiTick } from "react-icons/ti";

import { FaqsData } from '../data/FaqsData';
import { FaqsCard } from '../components/FaqsCard';

// function Faqs({ faq, isOpen, onClick }){
//     return(
//         <div className="rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
//       <div
//         className="p-5 cursor-pointer flex justify-between items-center"
//         onClick={onClick}
//       >
//         <h3 className="font-medium text-base text-white pr-4 leading-relaxed">
//           {faq.question}
//         </h3>
//         <div className="flex-shrink-0">
//           <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center transition-transform duration-300 ease-in-out">
//             {isOpen ? (
//               <svg 
//                 className="w-4 h-4 text-black transition-transform duration-300 ease-in-out"
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
//               </svg>
//             ) : (
//               <svg 
//                 className="w-4 h-4 text-black transition-transform duration-300 ease-in-out"
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//               </svg>
//             )}
//           </div>
//         </div>
//       </div>
      
//       <div 
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="px-5 pb-5">
//           <div className="pt-2 border-t border-white/10">
//             <p className="text-gray-300 text-sm leading-relaxed mt-3">
//               {faq.answer}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     )
// }

const toggledata=[
  {
    id:1,
    heading:"Fast load searching",
    desc:"Our fast load searching service ensures you are never waiting around for your next job. We leverage a vast network of brokers and shippers to quickly match your reefer truck with the best-paying, temperature-sensitive freight available. This proactive approach reduces downtime and helps keep your truck on the road, improving your overall efficiency and profitability. We understand that time is money, and with our rapid refrigerated load dispatching, you can maximize your revenue by staying consistently booked with high-quality loads."
  },
    {
    id:2,
    heading:"Paperwork handling",
    desc:"At Resolute Logistics, we take the hassle of administrative work off your plate with our complete paperwork handling. From rate confirmations to contracts and billing, we manage all the necessary documentation for your shipments. This allows you to focus on the road and your deliveries, while we ensure all the paperwork is accurate, timely, and fully compliant. By taking care of these tedious tasks, we streamline your workflow and free up valuable time for you to concentrate on driving and meeting your deadlines."
  },
  {
    id:3,
    heading:" Personal Reefer Dispatcher",
    desc:"Each driver working with Resolute Logistics is paired with a personal reefer dispatcher who is dedicated to understanding your unique needs and preferences. Your personal dispatcher works closely with you to secure the best loads and plan your routes, ensuring you are always matched with freight that fits your schedule and goals. This one-on-one attention means you have a trusted partner who is consistently working in your best interest, optimizing your load dispatching experience and helping you grow your business."
  },
  {
    id:4,
    heading:"24/7 Support",
    desc:"Our commitment to your success extends beyond regular business hours. With 24/7 support, we provide round-the-clock assistance to help you navigate any challenges that may arise during your shipments. Whether it&rsquo;s unexpected delays, route changes, or urgent issues, our team is available to offer real-time solutions and guidance. This continuous support ensures your operations run smoothly at all times, keeping your deliveries on track and giving you peace of mind knowing that we&rsquo;re always here when you need us."
  }
]
const reeferdata=[
    {
        id:1,
        heading:"Get the best refrigerated load dispatching solutions",
        desc:"At Resolute Logistics, we offer industry-leading reefer dispatch services tailored to meet the unique demands of temperature-sensitive freight. Whether you're transporting perishable food items, pharmaceuticals, or other climate-controlled products, our experienced truck dispatch&nbsp;team ensures you are matched with the right loads to keep your business moving efficiently. We understand the complexities of refrigerated transport and are committed to finding you the best-paying, high-quality loads that suit your reefer truck's capacity and requirements.",
        img:image
    },
     {
        id:2,
   img:image,
        desc:"Our reefer dispatch goes beyond just finding loads; we provide full-service support that includes route optimization, real-time updates, and ongoing communication. We monitor the progress of your deliveries to ensure on-time arrival and help you avoid delays, traffic issues, or unexpected disruptions. By taking care of the logistics, we allow you to focus on driving while ensuring your refrigerated cargo reaches its destination under the right conditions, every time.Partnering with us means gaining access to a vast network of shippers and brokers who trust us for their refrigerated transportation needs. Our goal is to help you increase profitability by minimizing empty miles, reducing downtime, and maintaining a consistent flow of temperature-controlled freight."
    },
     {
        id:3,
        img:image,
        heading:"Freight Reefer Dispatching for Owner Operators &amp; Fleet Owners",
        desc:"Our reefer dispatcher will handle loads for owner-operators and fleet owners to maximize your efficiency and profitability. At Resolute Logistics, we connect you with high-paying, temperature-sensitive loads, optimize your routes, and provide 24/7 support, ensuring your refrigerated freight arrives on time while minimizing downtime and empty miles. Contact us now to get hiqh-quality refrigerated truck dispatching service."
    },
]
const Refeer_page = () => {
     const [opentoggleId, setOpentoggleId] = useState(1);
const [openFaqId, setOpenFaqId] = useState(null);
      const handleToggle = (id) => {
        if (openFaqId===id)return;
    // setOpentoggleId((prevId) => (prevId === id ? null : id));
    setOpentoggleId(id)
  };
  const handleFaqToggle = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };
    const FaqsColumn1 = FaqsData.slice(0, 3);
    const FaqsColumn2 = FaqsData.slice(3, 6);
  
  return (
    <div className='w-full space-y-6 md:space-y-10'>
       
 <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }} className="relative ">
<img src={bg} alt="bg-image" className='object-cover object-center w-full h-[550px]'/>
<span className='absolute flex flex-col items-center justify-center inset-0 space-y-4 px-4 py-4'>
  <h1 className='bg-clip-text text-shadow-xs text-shadow-white bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700   bg-transparent text-2xl md:text-6xl text-clip text-transparent z-20 '>Reefer Dispatch Service</h1>
  <p className='text-sm md:text-lg font-normal text-center z-20 w-full max-w-xl text-white'>Reefer dispatch service is a specialized logistics and transportation management solution focused on coordinating loads that require refrigerated trailers to maintain specific temperature-controlled conditions. Our service helps truck drivers find suitable freight, plan routes, and manage schedules for perishable goods like food, pharmaceuticals, and chemicals. Our reefer truck dispatcher ensures that the right equipment and conditions are available to meet the strict temperature requirements throughout the shipment process.</p>
</span>
<div className='absolute inset-0 bg-black/65 bg-opacity-5'/>


        </motion.div>

<div className={`px-3 py-3 mt-5 flex flex-col gap-5   mx-auto w-full items-center justify-center place-content-center`}>
{
    reeferdata.map((item)=>(
        <div  key={item.id} className={` lg:max-w-5xl flex w-full   items-center justify-center gap-4 ${item.id%2==0?"flex-col lg:flex-row-reverse":"flex-col lg:flex-row"}`}>
            <motion.span   initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, margin: "100px 0px 0px 0px" }} data-aos="fade-right" className='flex flex-col w-full md:w-1/2 items-start space-y-2'>
<h1 className='font-bold text-2xl md:text-3xl text-start'>
                {item.heading}
            </h1>
            <p className='text-start'>
{item.desc}
            </p>
            </motion.span>
            <img src={image} alt="side-image"/>
        </div>
    ))
}
</div>



 <div className="relative ">
<img src={bg2} alt="bg-image" className='object-cover object-center w-full h-[600px]'/>
{/* For larger screens */}
<div className='hidden absolute lg:flex inset-0'>

< motion.span initial={{ opacity: 0, y: -50 }}
       whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true}} className='  px-6 py-6 mx-auto place-content-center my-auto '>
  {
    toggledata.map((item)=>(
      <div key={item.id} className='w-full  flex items-center  lg:h-[60px]'>


      <span className='items-start w-1/2'>
  {
    item.id==opentoggleId && (
     < AnimatePresence mode='wait'>
      <motion.div 
      initial={{ opacity: 0,}}
        animate={{ opacity: 1 }}
        transition={{duration:0.6,ease:"easeIn"}}
        className='  h-full '
      >

        
          <svg style={{marginBottom:23}} width="78" height="68" viewBox="0 0 58 68" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M57.7661 0.658065C57.5323 0.877419 56.8307 1.75484 56.5968 2.19355C54.9597 4.16774 53.5565 5.70323 53.3226 6.14194L53.0887 6.58065L53.3226 6.36129C53.3226 6.36129 53.5565 6.36129 53.5565 6.14194C53.5565 6.14194 54.7258 5.26452 54.7258 5.48387C54.9597 5.48387 54.7258 5.70323 54.7258 5.92258C54.4919 6.36129 54.4919 7.01935 54.7258 7.23871C54.7258 7.23871 54.9597 7.01935 54.9597 6.8C55.4274 6.14194 56.3629 5.04516 56.3629 5.26452C56.3629 5.26452 56.3629 5.48387 56.129 5.92258C55.8952 6.58065 55.4274 7.67742 54.7258 8.55484C54.2581 8.99355 54.0242 9.2129 54.0242 9.2129C54.0242 9.2129 54.2581 9.2129 54.7258 9.2129H55.1936L54.7258 9.87097C54.4919 10.3097 53.5565 11.8452 52.621 13.1613C51.6855 14.6968 50.75 16.4516 50.2823 16.8903C49.5806 17.9871 49.1129 18.8645 48.879 19.3032C48.879 19.7419 45.6048 25.4452 44.4355 27.4194C43.2661 29.1742 43.0323 29.6129 43.2661 30.271V30.7097L42.5645 31.1484C42.0968 31.5871 41.629 32.0258 41.3952 32.2452C41.1613 32.6839 40.6936 33.5613 40.9274 34C40.9274 34.2194 40.9274 34.4387 40.6936 34.6581C40.4597 35.3161 37.6532 39.7032 35.7823 41.8968C34.1452 44.529 34.1452 44.529 33.4436 45.8452C32.9758 46.5032 31.3387 49.5742 29.2339 53.0839C27.3629 56.3742 25.4919 59.2258 25.4919 59.4452C25.0242 60.3226 24.5565 61.2 23.8548 61.8581C23.1532 62.2968 22.9194 62.7355 22.2177 64.0516C21.9839 64.7097 21.5161 65.1484 21.2823 65.3677L21.0484 65.8064H20.3468C19.6452 65.8064 19.1774 65.8064 19.1774 65.5871C19.1774 65.3677 19.1774 65.3677 19.1774 65.3677C18.9436 65.3677 17.5403 66.0258 17.3065 66.2452C16.8387 66.4645 16.8387 66.6839 17.0726 67.1226C17.0726 67.3419 17.3065 67.5613 17.3065 67.5613C17.3065 67.7806 17.0726 67.7806 16.8387 68C16.6048 68 16.6048 67.7806 15.9032 67.3419L15.2016 66.9032L14.5 67.3419C13.7984 68 13.5645 68 13.0968 67.7806C13.0968 67.5613 12.629 67.3419 12.629 67.1226C12.1613 66.6839 11.6935 66.0258 11.4597 66.0258L11.2258 66.2452C10.9919 66.6839 10.7581 67.1226 10.2903 67.3419C10.0565 67.5613 9.82258 67.7806 9.82258 67.7806C9.35484 67.7806 7.48387 61.4194 3.97581 48.9161C3.50806 46.2839 2.80645 44.0903 2.10484 42.1161C0.935484 39.0452 0.935484 38.8258 0.467742 38.1677C0.233871 37.9484 0 37.729 0 37.729C0 37.5097 1.16935 36.8516 1.6371 36.8516C1.6371 36.8516 2.10484 37.071 2.33871 37.071C2.57258 37.071 2.80645 37.2903 3.04032 37.2903C3.27419 37.2903 3.27419 36.8516 2.80645 36.1936C2.80645 35.7548 2.57258 35.3161 2.57258 35.3161C2.57258 34.8774 3.27419 34 3.27419 34C3.50806 34 4.20968 34.6581 4.44355 35.0968C4.67742 35.5355 5.37903 35.9742 5.84677 36.4129C6.31452 36.6323 6.54839 36.6323 6.78226 35.9742C7.25 35.5355 7.25 35.5355 7.01613 35.0968C7.01613 34.6581 7.01613 34.2194 7.01613 33.7806V33.1226L7.48387 32.9032C7.95161 32.9032 8.18548 32.9032 8.8871 32.9032C9.58871 33.1226 10.0565 33.1226 10.0565 33.1226C10.2903 33.1226 10.5242 32.2452 10.7581 31.5871C10.7581 31.1484 10.7581 31.1484 10.9919 30.929C11.4597 30.7097 13.3306 30.0516 13.5645 30.271C13.5645 30.271 13.5645 30.4903 13.7984 30.7097C13.7984 31.3677 13.7984 31.3677 13.7984 32.0258C13.7984 33.1226 13.7984 33.7806 14.0323 33.5613C14.5 33.5613 14.5 33.5613 14.5 34C14.5 34.4387 14.2661 34.6581 14.0323 35.0968C13.7984 35.7548 13.7984 35.9742 13.7984 37.2903C13.7984 38.8258 14.0323 40.3613 14.7339 42.7742C15.2016 45.1871 16.1371 48.2581 16.8387 49.3548C16.8387 49.7935 16.8387 49.7935 17.0726 49.5742C17.7742 49.3548 18.7097 47.8194 19.879 45.6258C20.8145 43.871 21.75 42.1161 23.621 39.0452C26.1936 34.8774 27.5968 32.9032 28.5323 32.0258C29.4677 31.1484 30.1694 30.271 31.8065 27.6387C32.5081 26.7613 33.2097 25.6645 33.4436 25.4452C33.9113 24.7871 34.6129 24.129 34.8468 24.129C34.8468 24.129 34.1452 25.6645 33.4436 26.9806C32.5081 28.7355 31.1048 30.7097 28.7661 34C26.4274 37.5097 23.621 42.3355 22.6855 44.0903C22.4516 44.3097 21.75 45.6258 21.0484 46.9419C19.6452 49.1355 18.9436 50.8903 18.9436 51.1097C18.9436 51.329 18.9436 51.1097 19.1774 51.1097C19.4113 50.8903 19.6452 50.671 19.6452 50.4516C20.1129 49.7935 43.0323 14.2581 43.7339 13.3806C44.2016 12.9419 44.6694 12.5032 45.371 12.0645C46.5403 11.1871 47.0081 10.9677 47.9436 9.65161C48.4113 9.2129 48.879 8.55484 49.1129 8.33548C49.5807 7.89677 50.0484 7.45807 50.2823 7.01936C50.75 6.58065 50.9839 5.92258 51.2177 5.70323C51.6855 5.26452 58 0 58 0C58 0 58 0.219355 57.7661 0.658065Z" fill="#FFEC55"/>
						</svg>
         
            <p className="text-white text-lg font-semibold leading-relaxed text-start ">
             {item.desc}
            </p>
          
     


      </motion.div>
     
    </AnimatePresence>
    )
  }
  
</span>


      <span  className={` font-semibold   w-1/2 text-lg md:text-3xl  flex items-start md:items-center justify-center gap-3  ${item.id==opentoggleId?"text-yellow-300":"text-white"}`}>
        <h1 className='text-yellow-300 cursor-pointer'>
         0{item.id}
        </h1>
        
        <button   onClick={()=>handleToggle(item.id)}>{item.heading}</button>
        </span>
        </div>
    ))
    
  }
  
</motion.span>

</div>








{/* For Mobiles */}
<motion.div
initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        className='lg:hidden absolute inset-0 place-content-center my-auto '>
  {toggledata.map((item)=>(
<div className="flex flex-col items-center justify-center overflow-hidden transition-all duration-30">
  {/* I want to decrease the distance between the itemheading */}
      <div
      key={item.id}
        className="cursor-pointer"
       onClick={()=>handleToggle(item.id)}
      >
        <h3 className={`leading-relaxed  font-semibold flex-shrink-0 w-full  text-xl sm:text-3xl  flex items-center justify-center mt-4 ${item.id==opentoggleId?"text-yellow-300":"text-white"}`}>
          0{item.id}  {item.heading}
        </h3>

        
      
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          item.id==opentoggleId ? 'max-h-72  opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="m-2">
          <div className=" border-t border-white/10">
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</motion.div>




        </div>

      <section
             id="faqs"
             className="py-16 px-4 sm:px-6 lg:px-8 bg-[#002140] text-white"
           >
             <div className="w-full max-w-5xl mx-auto">
               <div className="text-center mb-12">
                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                   Frequently Asked Questions
                 </h1>
                 <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
                 Have questions about our reefer dispatch? Our FAQ section covers the most common inquiries to help you understand how we can support your business. Explore the answers below to learn more!
                 </p>
               </div>
     
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                 {[FaqsColumn1, FaqsColumn2].map((column, i) => (
                   <div key={i} className="space-y-4">
                     {column.map((faq) => (
                       <FaqsCard
                         key={faq.id}
                         faq={faq}
                         isOpen={openFaqId === faq.id}
                         onClick={() => handleFaqToggle(faq.id)}
                       />
                     ))}
                   </div>
                 ))}
               </div>
             </div>
           </section>
            <div className="">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center bg-no-repeat bg-[#002147]"
        
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
          <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-400">
            <a href="/" className="hover:text-orange-400 duration-200">
              Truck Dispatch
            </a>
            <span className="mx-1 sm:mx-2">|</span>
            <span>Contacts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 text-center font-bold">
            Contacts
          </h1>

          {/* Description */}
          <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-center ">
            <p className="text-xs sm:text-sm md:text-base leading-tight mb-3 sm:mb-4 font-normal px-2">
              You are on the Resolute Logistics company contacts page. Contact us in a convenient way to get
               <a href="/" className='hover:text-orange-400 duration-200'> truck dispatch services </a>
               or clarify any details about the company's work.
            </p>

            {/* Contact Information */}
            <div className="text-xs sm:text-sm mb-3 sm:mb-4 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="font-medium text-center">
                  <span className="whitespace-nowrap">📍 Address:</span> 11443 SAVANNAH CREEK DR CHARLOTTE, NC 28273
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="font-medium">☎️ Phone: </span>
                  +1 (800) 834-1898
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="font-medium">✉️ Mail: </span>
                  hello@resolute-logistics.com
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 font-normal px-2">
              Choose the qualified services of TOP companies in the USA and Canada.
            </p>
          </div>
        </div>
      </div>

      
    </div>
      
    </div>
  )
}

export default Refeer_page