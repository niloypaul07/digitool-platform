import React, { use } from 'react';
import DigitoolCard from './DigitoolCard';

const Digitools = ({digiToolPromise}) => {

    const digiTools= use(digiToolPromise);
    
    

    return (
        <div>

           <div>
            <h1 className="text-center mt-14 md:mt-20 text-[#101727] text-3xl md:text-[48px] font-bold px-4">
    Premium Digital Tools
  </h1>
  <p className="text-center text-[#627382] px-4 mb-14 md:mb-20 text-sm md:text-base">
Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.  </p>
           </div>

           <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mb-20">
{digiTools.map((digitool) => {
    return<DigitoolCard key={digitool.id} digitool={digitool} />
})}
</div>
            
        </div>
    );
};

export default Digitools;