"use client"
import React from 'react'
import about1 from "../images/about_bg_1920.webp"
import { motion } from 'framer-motion'

const About_page = () => {
  return (
    <div className='flex flex-col items-center w-full bg-gradient-to-tr  from-[#002147] to-[#002140]'>
      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }} className="relative">
<img src={about1} alt="bg-image" className='object-cover object-center w-full h-[300px] md:h-[550px]'/>
<span className='absolute flex flex-col items-center justify-center inset-0 '>
  <h1 className='bg-clip-text text-shadow-xs text-shadow-white bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 outline-1 outline-white  stroke-teal-200 bg-transparent text-4xl md:text-6xl text-clip text-transparent z-20'>About Us</h1>
  
</span>
<div className='absolute inset-0 bg-black/65 bg-opacity-5'/>


        </motion.div>
         <motion.div initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.7,ease:"easeIn"}}
         className='m-5 px-2 space-y-3'>
        
          <span>
            <h1 className='text-3xl font-bold text-white'>
  About Us
</h1>
<p className='text-lg font-light text-white m-4 tracking-wide'>  Resolute Logistics Company was founded in 2017 in New York, NY; furthermore, its founders have 15-year working experience in Logistics and Finance markets of the USA, Canada and Europe. The aim of the company is to make the drivers&rsquo; life easier when they are on the road and help them solve recurring issues that are connected with cargo transportation, paperwork and its processing, and getting paid on time.
</p>
          </span>

<span><h1 className='text-3xl font-bold text-white'>
  About Team
</h1>
<p className='text-lg font-light text-white m-4 tracking-wide'>Today our company has over 50 experienced Dispatchers that are split into mini-teams. Every mini-team has its Team Leader who provides coordination, control and development of employees. Such a working model allows them to cooperate efficiently within the team, providing quick response to personal requests of our clients and keeping top quality dispatching service. \n
Our Dispatchers take a special training course, pass exams and only then are allowed to get down to work under the supervision of our experienced mentors. A lot of our dispatchers have significant working experience in the Logistics industry of the USA.
Our teams are located in different parts of the world, such as the USA, Canada, Europe and Ukraine. It allows us to be mobile and sustainable, share our experience, and optimize costs as well as improve our working performance within the team. We are especially proud of our Ukrainian team that shows one of the best results in performance and quality service of our customers being located on the territory of Ukraine.
Having great experience in Trucking, we have faced the issues that drivers are lied to or not told everything as it is. It is about the price for cargo, the term of payment, specific requirements to hauling, etc. That&rsquo;s why we initially made a decision that we&rsquo;ll give them the most accurate and truthful information and will become their attorneys, defending their interests in front of the cargo owners, and also in front of the other participants of the market.
Our clients value it a lot when they work with us as well as our individual approach to each client.</p></span>

<span>
  <h2  className='text-2xl  text-white'>Learn more about our services:&nbsp;</h2>
<ul className='flex flex-col items-start space-y-1 m-4'>
  <li className='text-lg font-light text-white underline hover:text-orange-500'>Reefer and Dry Van Dispatch Service</li>
  <li className='text-lg font-light text-white  underline hover:text-orange-500'>Step Deck and Flatbed Dispatch Service</li>
  <li className='text-lg font-light text-white underline hover:text-orange-500'>Power Only Dispatch Service</li>
  <li className='text-lg font-light text-white  underline hover:text-orange-500'>Hotshot Dispatch Service</li>
  <li className='text-lg font-light text-white  underline hover:text-orange-500'>Box Truck Dispatch Service</li>
</ul>
</span>

<span>
<h1 className='text-3xl font-bold text-white'>
  About Our Clients
</h1>
<p className='text-lg font-light text-white m-4 tracking-wide'>Our clients are drivers / owners of trucks or small / medium trucking companies in the USA.
  We help our clients find better loads, negotiate about the best cost, ease the pain with paperwork and provide good customer support.
  It allows truck owner operators to concentrate on the road and not get distracted by dealing with recurring issues and questions that need to be solved.
  For Owner Operators we assign one of our dispatchers who usually provides service for 4-5 trucks, Team Leader, whom he can always reach out on any recurring matter and a Customer Service Specialist who monitors the quality of service and satisfaction with our service.
  For companies with 30 + trucks we attach a particular team of Dispatchers that work exclusively with the trucks of one client and become his Outsource team working remotely. It helps us save large budget and company source on recruiting new Dispatchers and training them, coordinating and controlling their work, giving them room in the office and benefits package. The client pays a fixed fee for each truck that is serviced by our team, which is sustainably lower than keeping a full-time Dispatcher in the company.
</p>
</span>

        
        </motion.div>
    </div>
  )
}

export default About_page