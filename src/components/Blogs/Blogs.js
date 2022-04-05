import React from 'react';
import contextImage from '../../images/context-api.png'

const Blogs = () => {
    return (
        <div className='md:flex justify-center'>
            <div className='grid items-center mx-auto justify-center lg:grid-cols-2'>
                <div className='bg-slate-400 text-center mt-24 mx-6 md:w-[550px]'>
                    <h3 className='text-2xl'>What is Context API</h3>
                    <img className='mx-auto' src={contextImage} alt="" />
                    <p><span>Ans:</span>Sometime we need to pass the value into specific component. If we use the props then we need to do props drilling. But props drilling is hard to maintain when the child are many. For this solution contest API is designed. We can pass values into child component by Context API in a very easy way</p>
                </div>
                <div className='bg-slate-400 text-center mt-24 mx-6 md:w-[550px]'>
                    <h3 className='text-2xl'>What is Context API</h3>
                    <img className='mx-auto' src={contextImage} alt="" />
                    <p><span>Ans:</span>Sometime we need to pass the value into specific component. If we use the props then we need to do props drilling. But props drilling is hard to maintain when the child are many. For this solution contest API is designed. We can pass values into child component by Context API in a very easy way</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;