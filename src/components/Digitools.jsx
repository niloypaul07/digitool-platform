import React, { use } from 'react';
import DigitoolCard from './DigitoolCard';

const Digitools = ({digiToolPromise , carts , activeCarts}) => {

    const digiTools= use(digiToolPromise);
    
    

    return (
        <div>

           

           <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mb-20">
{digiTools.map((digitool) => {
    return<DigitoolCard key={digitool.id} digitool={digitool} carts={carts} activeCarts={activeCarts} />
})}
</div>
            
        </div>
    );
};

export default Digitools;