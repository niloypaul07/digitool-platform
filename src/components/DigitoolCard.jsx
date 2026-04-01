import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DigitoolCard = ({digitool,carts , activeCarts}) => {
    const [isBuyNow, setisBuyNow]=useState(false);
           const tagColors = {
      "best seller": "bg-[#FEF3C6] text-[#F59E0B]", 
      "new": "bg-[#DBFCE7] text-[#10B981]",
      "special": "bg-gray-200 text-gray-700",
      "popular":"bg-[#E1E7FF] text-[#4F39F6]"
    };

    const buyNowButton=()=>{
        setisBuyNow(true);

        const isFound= carts.find(item=> item.id === digitool.id)
        if(isFound){
          toast.error("Item already in cart");
          return
        }

        activeCarts([...carts,digitool])
        toast.success("Item added into cart");
    }
    return (
        <div>
    
      <div key={digitool.id}>
        <div className="rounded-2xl shadow p-6 flex flex-col space-y-4">
          
         
          <div className="flex justify-end">
            <span className={`badge ${tagColors[digitool.tagType]}`}>
              {digitool.tag}
            </span>
          </div>

          {/* Icon, Name, Description */}
          <div className="space-y-4">
            <img
              className="border border-[#F2F2F2] rounded-full p-3 "
              src={digitool.icon}
              alt={digitool.name}
            />
            <h2 className="font-bold text-2xl text-[#101727]">{digitool.name}</h2>
            <p className="text-[16px] text-[#627382]">{digitool.description}</p>
            
            {/* Price */}
            <div className="">
              <span className="text-4xl md:text-2xl font-semibold">
                ${digitool.price}
              </span>
              <span className="text-base md:text-lg ml-1">
                {digitool.period === "monthly" ? "/Mo" : digitool.period === "yearly" ? "/Yr" : "/One-Time"}
              </span>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mt-4 text-left">
              {digitool.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#30B868]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Buy Button */}
            <button onClick={buyNowButton}  className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full mt-4">
              {isBuyNow? 'Added to cart' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>
    
            
        </div>
    );
};

export default DigitoolCard;