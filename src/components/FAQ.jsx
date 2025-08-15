import React from 'react'
import {useState} from 'react';
import { Plus,Minus } from 'lucide-react';

const FAQ = () =>{

    const faqs = [
        {
            question:'How to Get Power Only Dispatch Services?',
            answer:'If you are willing to get Power Only Dispatch Services, you can fill out the application form online, send a request, or contact us to help you with necessary information about the paperwork, prices, and the services we provide. Our sales representatives will assist you with any questions you may have.',
        },
        {
            question:'Why do we Choose Resolute Logistics for the Power Only Dispatch?',
            answerIntro:'Because you  need to spend your time looking for loads, and worry that the broker is not capable of paying. Power Only Dispatch solves all the issues you may have, for instance: ',
            answerList:[
                'Looks through power only load boards to find the best-paying deals.',
                ' Fills out all the paperwork and does set-up.',
                'Negotiates about a better rate for the load.',
                "Solves any problems that may happen, such as not getting loaded, or negotiate any additional service (driver's assistance, extra stops, etc).",'Provides support 24/7.',
                'Once the load is dropped, the dispatch collects your billing documents and forward them to brokers for payment.',
            ]
        },
         {
            question:'How Much Does Power Only Dispatch Service Cost?',
            answer:'Resolute Logistics cares about its clients, so we strive to be trustworthy and robust. Our pricing model is transparent, and it means that we have no additional expenses, and no hidden fees. Resolute logistics relies on openness and flexibility. So our services depend on the percentage of profit you get. The percentage we take for Power Only Dispatch Service is 5 % of the gross revenue. So you don&rsquo;t need to pay for services unless you drive.'
        },
    ];
    const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
const rightColumn = faqs.slice(Math.ceil(faqs.length / 2));

    const [openIndex,setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return(
        <section className='py-12 px-4'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white'>
                Frequently Asked Questions <span className='text-orange-500'>About Power</span> Only Dispatching
            </h2>
            <p className=' mx-auto text-center text-gray-200 mb-10 max-w-[500px]'>
                Before you start working with Resolute Logistics, you may be interested in the services we provide, and what duties we have. You can look through FAQ section and find the answers to the questions which are frequently asked.
            </p>
            {/* grid questions */}
            
            
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-[1100px]">
  {[leftColumn, rightColumn].map((column, colIndex) => (
    <div key={colIndex} className="flex flex-col gap-6 ">
      {column.map((faq, index) => {
        const actualIndex = colIndex === 0 ? index : index + leftColumn.length;
        return (
          <div 
          key={actualIndex}
           className="border  p-4 shadow-sm  bg-[#002140]">
            <button
              className="flex justify-between items-center w-full text-left min-h-[60px]"
              onClick={() =>
                setOpenIndex(openIndex === actualIndex ? null : actualIndex)
              }
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="flex items-center justify-center w-8 h-8 border border-orange-500 rounded-full text-gray-200 bg-orange-500 shrink-0">
                {openIndex === actualIndex ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </button>

           {openIndex === actualIndex && (
           <div className="mt-3 text-gray-200 text-sm">
             {faq.answerIntro ? (
                 <>
              <p>{faq.answerIntro}</p>
               <ul className="list-none  mt-6 space-y-1 text-[12px]">
               {faq.answerList.map((item, i) => (
               <li key={i}>{item}</li>
               ))}
            </ul>
      </>
    ) : (
      <p>{faq.answer}</p>
    )}
  </div>
)}
          </div>
        );
      })}
    </div>
  ))}
</div>

        </section>
    )
}
export default FAQ;