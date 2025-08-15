import React from 'react'
import {useState} from 'react';
import { Plus,Minus } from 'lucide-react';

const Questions = () =>{

    const faqs = [
        {
            question:'How much does hotshot dispatch service cost?',
            answer:'Our hotshot dispatch service cost 5% of your gross revenue. That means $50 off a load worth $1000, etc.',
        },
        {
            question:'Why exactly does Resolute Logistics provide a better hotshot dispatch service than the others?',
            answer:'It&rsquo;s complicated, and sort of a trade secret as well. To start with, we have partnerships with many suppliers and brokers all around the USA, and thus can provide our customers with loads that don&rsquo;t ever hit public load boards. We are the best of all hotshot dispatch companies for owner-operators! ',
            // answerList:[
            //     'Looks through power only load boards to find the best-paying deals.',
            //     ' Fills out all the paperwork and does set-up.',
            //     'Negotiates about a better rate for the load.',
            //     "Solves any problems that may happen, such as not getting loaded, or negotiate any additional service (driver's assistance, extra stops, etc).",'Provides support 24/7.',
            //     'Once the load is dropped, the dispatch collects your billing documents and forward them to brokers for payment.',
            // ]
        },
         {
            question:'Are There any Strings Attached to our Hotshot Truck Dispatch Service?',
            answer:'No, we only make money with dispatchers&rsquo; fees, which depend on your loads&rsquo; prices. That&rsquo;s really all there is to it.'
        },
         {
            question:'Why do we choose Resolute Logistics for the hotshot trucking dispatch services?',
            answer:'Resolute Logistics is the best option as we provide better service for a more reasonable cost compared to other dispatch companies for hotshot loads. Check out independent feedback and see for yourself.'
        },
         {
            question:'How to Get the Best Hotshot Dispatch Service?',
            answer:'Simply apply for Resolute Logistics hotshot dispatch service! A member of our Sales team will reach out to you right away, and if there are no issues with the application, you will be assigned a dispatcher, and they will start working with you right away.'
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
                Frequently Asked Questions <span className='text-orange-500'>About Resolute Logistics</span> Hotshot Dispatch Service
            </h2>
            <p className=' mx-auto text-center text-gray-200 mb-10 max-w-[500px]'>
              When signing up for a service, it&rsquo;s normal to be worried about its quality and cost. Fortunately, we have nothing to hide regarding either. In fact, hiring a dispatcher will most likely end up in you saving more money, since you will have access to much better loads and a degree of financial protection from slow days and unexpected events.
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
export default Questions;