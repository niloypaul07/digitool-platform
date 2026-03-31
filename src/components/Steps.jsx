import React from 'react';
import user from '../assets/user.png'
import box from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Steps = () => {
    return (
        <div>
            <div className=' bg-[#f9fafcFF]'>
                <h1 className='text-center pt-20 text-[#101727] text-[48px] font-bold'>Get Started in 3 Steps</h1>
        <p className='text-center text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        

  <div className="max-w-6xl mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

  {/* CARD 1 */}
  <div className="h-full flex flex-col bg-white p-6 rounded shadow">
    <div className="flex justify-end">
      <h2 className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full w-10 h-10 flex justify-center items-center font-semibold text-white mb-6">
        01
      </h2>
    </div>

    <div className="text-center space-y-5 flex-1">
      <div className="flex justify-center">
        <img src={user} className="w-20 h-20 bg-purple-200 p-5 rounded-full" />
      </div>

      <h3 className="font-bold text-xl lg:text-2xl">Create Account</h3>
      <p className="text-base lg:text-l text-[#627382]">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="h-full flex flex-col bg-white p-6 rounded shadow">
    <div className="flex justify-end">
      <h2 className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full w-10 h-10 flex justify-center items-center font-semibold text-white mb-6">
        02
      </h2>
    </div>

    <div className="text-center space-y-5 flex-1">
      <div className="flex justify-center">
        <img src={box} className="w-20 h-20 bg-purple-200 p-5 rounded-full" />
      </div>

      <h3 className="font-bold text-xl lg:text-2xl">Start Creating</h3>
      <p className="text-base lg:text-l text-[#627382]">
        Download and start using your premium tools immediately.
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="h-full flex flex-col bg-white p-6 rounded shadow">
    <div className="flex justify-end">
      <h2 className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full w-10 h-10 flex justify-center items-center font-semibold text-white mb-6">
        03
      </h2>
    </div>

    <div className="text-center space-y-5 flex-1">
      <div className="flex justify-center">
        <img src={rocket} className=" w-20 h-20 bg-purple-200 p-5 rounded-full" />
      </div>

      <h3 className="font-bold text-xl lg:text-2xl">Choose Products</h3>
      <p className="text-base lg:text-ll text-[#627382]">
          Browse our catalog and select the tools.that fit your needs.</p>
    </div>
  </div>

</div>
            
            
        </div>
        </div>
    );
};

export default Steps;