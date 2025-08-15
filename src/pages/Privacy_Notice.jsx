import React from 'react';
export default function Privacy_Notice(){

    return (
        <main>
            {/* hero section */}
              <section className='relative w-full h-[400px] sm:h-[320px] md:h-[550px] flex flex-col items-center justify-start text-center pt-10'
            style={{
                backgroundImage:"url('/images/policy_bg_1920@3x.png')",
                backgroundSize:"cover",
                backgroundPosition:"center",

            }}
            >
                {/* overlay */}
                <div className='absolute inset-0 bg-black/70'></div>
                {/* text content */}
                
                <div className='relative z-10 px-4 sm:px-6 md:px-8 max-w-2xl text-center'>
                    <a href=""
                    className='inline-block text-[12px] sm:text-xs tracking-tight   text-[#8c8b8b] font-bold
                     px-2 py-1 rounded transition-colors duration-300 hover:text-orange-600'
                    >
                     Truck Dispatch
                    </a>
                    <span  className='text-[12px]  sm:text-xs  tracking-tight text-[#8c8b8b]  font-bold'
                    >
                         | Privacy Notice
                    </span>
                <h1 className='mt-24 text-[18px] sm:text-[24px] md:text-[40px] font-semibold  text-white'>
                    Privacy Notice <br />
                </h1>
               
                </div>
        </section>
        {/* paras */}
         <section className='px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-6 '>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Resolute Freight Agency, Inc. Privacy Notice
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>Last update 1/21/21. 
                </p>
                 <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                  Resolute Freight Agency takes care of your personal information and does everything possible to protect it. This Privacy Notice is written to help you understand what your personal information is collected, stored and used, and what happens to it when you use our website 
                  In this Privacy Notice we answer the following questions:
                </p>
                <p className='mt-6 text-[11px] sm:text-[13px]  md:text-[15px] leading-relaxed text-lg'>
                    In this <span className='text-orange-500'>Privacy Notice</span> we answer the following questions:
                </p>
                {/* questions */}
                <ol className='list-decimal marker:text-orange-500 pl-4 sm:pl-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-1'>
                    <li>Who are we?</li>
                    <li>What is the Privacy Notice covered by?</li>
                    <li>What information do we collect, how and why?</li>
                    <li>How long do we keep your information?</li>
                    <li>Do we share information with third parties?</li>
                    <li>Do we use cookies?</li>
                    <li>What rights do I have regarding my information?</li>
                    <li>How do we update Privacy Notice?</li>
                </ol>
               
            </section>
              {/* point 1 */}
                 <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    1. Who Are We?
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                  We are Resolute Freight Agency, Inc., Delaware C-corporation, EIN: 83-3039682.
                  Our office is located at 101 Greenwich Street, Suite 1202, New York, NY, 10006.
                  Hereinafter, Resolute Freight Agency will be referred to as "we" and "our".
                  We are the operator of your personal information, which means that we determine
                  what, for what purpose and how your personal information will be processed.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                       If you have any questions, you can contact us by sending an email to
                  hello@resolute-logistics.com. You can also send us a letter at the address:
                 101 Greenwich Street, Suite 1202, New York, NY, 10006.
                </p>
                </section>


                {/* point 2 */}
                 
                 <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    2. What Is The <span className='text-orange-500'>Privacy Notice</span> Covered By?
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                 This Privacy Notice applies to our website.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Website Address: {' '}
                    <a 
                    href="/hotshot"
                    className=" underline hover:text-orange-400 "
                    >Home</a>
                    
                </p>
                </section>
                {/* point 3 */}
                <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    3. <span className='text-orange-500'>What Information</span> Do We Collect, How And Why?
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                 The information we process is divided into two categories: technical information and information that is provided to us by user and client.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                   Technical information. When you visit our site, some information is collected automatically. We need technical information to operate, maintain, and improve our website. This includes information such as IP address, UTM parameters, geolocation, device type, browser type, cookies, and information about your interaction with the site - session ID.
                </p>
                 <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    The session ID includes your interaction with the site, the name of the site from which you went to our site, the functions you use, the pages viewed on our site, the way you use our site, and the actions you take if such actions are present.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    The next categories of information are given to us by the user him/herself. 
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                   Personal information provided by the client. To perform a contract we need the following information: full name, email, phone number, FID, SSN, driver's license, position, company name, payment information. trucks' numbers, MC number.
                </p>
                 <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Personal information provided by the user. For full interaction with our site, we may collect your name, phone number, email, and company name.
                </p>
                 <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Once again, briefly about what personal information we collect:
                </p>
                <ol className='list-disc marker:text-orange-500 pl-4 sm:pl-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-1'>
                    <li>Type of information</li>
                    <li>Description of information</li>
                    <li>Reasons for processing</li>
                    <li>PI provided by client</li>
                    <li>To perform a contract we need the following information: full name, email, phone number, FID, SSN, driver's license, position, company name, payment information. trucks' numbers, MC number.</li>
                    <li>Performance of the contract</li>
                    <li>PI provided by client</li>
                    <li>Truck number, company name, MC number.</li>
                    <li>Analytics;</li>
                    <li>Statistics</li>
                    <li>PI provided by client</li>
                    <li>Full name, email, phone number</li>
                    <li>Marketing</li>
                    <li>PI provided by user</li>
                    <li>Full name, email, and company name</li>
                    <li>Performance of the contract;</li>
                    <li>Providing a service</li>
                    <li>PI provided by user</li>
                    <li>Name, phone number, email</li>
                    <li>Marketing</li>
                    <li>Automatically collected data</li>
                    <li>Technical information;</li>
                    <li>Cookies</li>
                    <li>Website operation;</li>
                    <li>Analytics;</li>
                    <li>Statistics</li>

                </ol>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Pay your attention. We knowingly do not process the personal information of users under the age of 18 without consent from legal representative(s). If you are such a user, or you are the legal representative of the user, please let us know by email
                </p>
                </section>
                {/* point 4 */}
                <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    4. How Long Do We Keep <span className='text-orange-500'>Your Information?</span> 
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                 We store personal information in the following categories:
                </p>
                 <ol className='list-disc marker:text-orange-500 pl-4 sm:pl-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-1'>
                    <li>client information</li>
                    </ol>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    We store personal client information for the duration of the service and 36 months after completion.
                </p>
                <ol className='list-disc marker:text-orange-500 pl-4 sm:pl-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-1'>
                    <li>user information</li>
                    </ol>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    We store users' personal information for 18 months.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    However, you can exercise your right to delete your information. In this case, your information will be deleted from our servers within 30 days of your request.
                </p>
                </section>
                {/* point 5 */}
              
                <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    5. Do We <span className='text-orange-500'>Share Information </span> With Third Parties?
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                 We use your personal information to perform a contract and for communication between us and the client, and between us and the user. We transfer your information on the following grounds:
                </p>
                 
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Consent. We transfer your personal information based on your explicit consent.
                </p>
                
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Compliance with the law. We will disclose your personal information to third parties to the extent that it is necessary:
                </p>
                <ol className='list-disc marker:text-orange-500 pl-4 sm:pl-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-1'>
                    <li>to comply with a government request, court order, or applicable law;</li>
                    <li>to prevent unlawful use of our site;</li>
                    <li>to protect against claims of third parties;</li>
                    <li>to help prevent or investigate fraud.</li>
                    </ol>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                   Transfer to third parties: We transfer your personal information to third parties on the basis of public offer for processing on our behalf, subject to technical and organizational measures to protect your personal information. We may transfer your information to certain companies, consultants, and contractors, like dispatchers, hired to provide certain services on our behalf.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Your SMS consent and customer phone numbers will not be shared with any third parties or affiliates for marketing purposes.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    While transferring we use appropriate safeguard measures, like limited access and NDA's.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    We use Zoho as an internal CRM system. You can learn more about the Zoho Privacy Notice here: https://www.zoho.com/privacy.html. 
                </p>
                 <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    We will ask for your consent unless the transfer of information is part of a contract.
                </p>
                </section>
            {/* point 6 */}
            
                <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    6. Do We Use <span className='text-orange-500'>Cookies?</span>
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                 We use cookies necessary for the functioning of the site. Using cookies, we receive the technical information specified in clause 3 and out Cookie Policy.
                </p>
                 
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                   If you want to disable cookies, then you can find instructions for managing your browser settings at these links:
                </p>
                
               
                <ol className='list-disc marker:text-orange-500 pl-4 sm:pl-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-1'>
                    <li>Internet Explorer</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                    <li>Chrome</li>
                    <li>Opera</li>
                    <li>Vivaldi</li>
                    </ol>
               
                
                </section>
                {/* point 7 */}
               
            
                <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center  font-bold text-lg sm:text-xl md:text-3xl mb-4">
                    7. What Rights Do I  <span className='text-orange-500'>Have Regarding </span>My Information?
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                 You, as subjects of personal information, have the following rights:
                </p>
                 
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                   The right to access information. You can request an explanation of the processing of your personal information.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    The right to correct information. We take reasonable steps to accurately record the personal information that you provide to us, as well as any subsequent updates. We encourage you to review, update, and correct the personal information that we maintain about you.
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    Right to be forgotten. You can send us a request to delete your personal information from our systems. You may request that we delete personal information about you that is inaccurate, incomplete, irrelevant for legitimate purposes, or is being processed in a way which infringes any applicable legal requirements.If you would like to review, change or delete personal information we have collected from you or you had submitted or permanently delete your personal information, please contact us by an email at hello@resolute-logistics.com
                </p>
                <p className='text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg'>
                    If you would like to review, change or delete personal information we have collected from you or you had submitted or permanently delete your personal information, please contact us by an email at hello@resolute-logistics.com
                </p>
                </section>
                {/* point 8 */}
                <section className="px-4 sm:px-6 md:px-12 lg:px-18 py-12 text-gray-200 -mt-18">
                  {/* Question */}
                    <h2 className="text-center  font-bold text-lg sm:text-xl md:text-3xl mb-4">
                   8. How Do We Update <span className='text-orange-500'>Privacy Notice</span>?
                   </h2>

                   {/* Paragraph */}
                
                  <p className="text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-lg">
                    This privacy policy and the relationships falling under its effect are regulated by the US federal laws and NY State Constitution. Existing laws and requirements for the processing of personal information are subject to change. In this case, we will publish a new version of the Privacy Notice on our website. If significant material changes are made that affect your privacy and confidentiality, we will notify you by email or display information on the website and ask for your consent.
                </p>
                 
              
                </section>
        </main>
    )
}