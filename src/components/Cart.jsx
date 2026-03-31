import React from 'react';

const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div className=' max-w-6xl mx-auto shadow rounded p-5 my-10'>
            <h1 className='text-3xl font-bold my-4'>Your Cart</h1>

            {

                 carts.map(item => <div key={item.id}>
  <div className='flex items-center justify-between gap-5 bg-[#F9FAFC] rounded-xl my-5 p-5'>
    
    
    <div className='flex items-center gap-5'>
      <img
        className='border border-[#F2F2F2] rounded-full p-3 w-12 h-12 object-contain'
        src={item.icon}
        alt=""
      />
      <div>
        <h1 className='font-semibold text-lg sm:text-xl text-[#101727]'>
          {item.name}
        </h1>
        <p className='text-[#627382] text-sm sm:text-lg'>
          ${item.price}
        </p>
      </div>
    </div>

    
    <button className='text-red-500 font-semibold hover:underline'>
      Remove
    </button>

  </div>
  
</div> )

            }

            <div className='flex justify-between items-center font-bold mt-5'>
  <h1 className='text-lg sm:text-xl text-[#101727]'>
    Total
  </h1>

  <p className='text-xl sm:text-3xl text-[#101727]'>
    $0
  </p>
</div>

<button className='w-full mt-8 rounded-3xl text-white cursor-pointer
  py-3 sm:py-3 text-sm sm:text-lg font-semibold
  bg-linear-to-r from-[#4F39F6] to-[#9514FA]
  '> 
  Proceed to Checkout
</button>
           
            
        </div>
    );
};

export default Cart;