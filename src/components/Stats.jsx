import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] py-10'>
    
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-around text-center gap-6'>
        
        <div>
            <h1 className='text-2xl md:text-[60px] font-bold text-white'>50K</h1>
            <p className='text-white'>Active Users</p>
        </div>

        <div>
            <h1 className='text-2xl md:text-[60px] font-bold text-white'>200+</h1>
            <p className='text-white'>Premium Tools</p>
        </div>

        <div>
            <h1 className='text-2xl md:text-[60px] font-bold text-white'>4.9</h1>
            <p className='text-white'>Rating</p>
        </div>

    </div>

</div>
    );
};

export default Stats;