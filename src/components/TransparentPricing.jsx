import React from 'react';

const TransparentPricing = () => {
    return (
        <div>
  
  <h1 className="text-center mt-14 md:mt-20 text-[#101727] text-3xl md:text-[48px] font-bold px-4">
    Simple, Transparent Pricing
  </h1>
  <p className="text-center text-[#627382] px-4 text-sm md:text-base">
    Choose the plan that fits your needs. Upgrade or downgrade anytime.
  </p>

  {/* Cards */}
  <div className="max-w-6xl mx-auto px-4 my-10 md:my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

    {/* Starter */}
    <div className="card bg-base-100 shadow-sm h-full">
      <div className="card-body bg-[#f2f2f2] rounded-2xl flex flex-col justify-between p-5 md:p-6">
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Starter</h2>
          <p className="text-sm md:text-[16px] text-[#627382] mb-4">
            Perfect for getting started
          </p>

          <span>
            <span className="text-4xl md:text-[60px] font-semibold">$0</span>
            <span className="text-base md:text-[20px]">/Month</span>
          </span>
        </div>

        <ul className=" flex flex-col gap-2 text-sm md:text-xs">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>High-resolution image generation</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Customizable style templates</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Batch processing capabilities</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Community support</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Advanced analytics</span>
          </li>
        </ul>

        <div className="mt-6">
          <button className="btn bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-full w-full">
            Get Started Free
          </button>
        </div>
      </div>
    </div>


   
    <div className="card bg-base-100 shadow-sm relative h-full sm:col-span-1 lg:col-span-1">
      
      <span className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-[10px] md:text-xs px-3 md:px-4 py-1 rounded-full shadow-md">
        Most Popular
      </span>

      <div className="card-body bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-2xl flex flex-col justify-between p-5 md:p-6">
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Pro</h2>
          <p className="text-sm md:text-[16px] text-white mb-6 ">
            Best for professionals
          </p>

          <span>
            <span className="text-4xl md:text-[60px] font-semibold">$29</span>
            <span className="text-base md:text-[20px]">/Month</span>
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-sm">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Unlimited projects</li>
          <li>✔ Cloud sync</li>
          <li>✔ Advanced analytics</li>
        </ul>

        <div className="mt-6">
          <button className="btn bg-white text-[rgba(79,57,246,1)] rounded-full w-full">
            Start Pro Trial
          </button>
        </div>
      </div>
    </div>


   
    <div className="card bg-base-100 shadow-sm h-full">
      <div className="card-body bg-[#f2f2f2] rounded-2xl flex flex-col justify-between p-5 md:p-6">
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Entireprise</h2>
          <p className="text-sm md:text-[16px] text-[#627382] mb-6 ">
            For teams and businesses
          </p>

          <span>
            <span className="text-4xl md:text-[60px] font-semibold">$99</span>
            <span className="text-base md:text-[20px]">/Month</span>
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-sm md:text-xs">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>SLA guarantee</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Custom branding</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Dedicated support</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Custom integrations</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Team collaboration</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Everything in Pro</span>
          </li>
        </ul>

        <div className="mt-6">
          <button className="btn bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-full w-full">
            Contact Sales
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
    );
};

export default TransparentPricing;