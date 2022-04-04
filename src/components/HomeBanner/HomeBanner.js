import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../images/home-banner.png';

const HomeBanner = () => {
    return (
        <div className='bg-blue-600 bg-home-bg bg-cover bg-center container]'>
            <div className='md:p-0 py-20 px-5 md:flex justify-between items-center container mx-auto h-[90vh]'>
                <div className='md:w-1/2'>
                    <h3 className='text-4xl uppercase text-orange-400 pb-5 font-bold'>Make your Marketing Real With Packbo</h3>
                    <p className='text-white'>We are best marketing agency in market. We have a very good marketing policy. We are 100 member's family.Join with us. We will make your sell better than before </p>
                    <button className='bg-orange-400 text-white rounded mt-5 py-2 px-5'><Link to='/reviews'>Reviews</Link></button>
                </div>
                <div className='md:w-1/2'>
                    <img className='' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;