import React from 'react';
import contextImage from '../../images/context-api.png'
import semanticImage from '../../images/semantic.jpg'

const Blogs = () => {
    return (
        <div className='md:flex justify-center'>
            <div className='grid items-center mx-auto justify-center lg:grid-cols-2'>
                <div className='p-8 bg-slate-400 text-center mt-24 mx-6 w-[350px]'>
                    <img className='mx-auto' src={contextImage} alt="" />
                    <h3 className='text-3xl py-5'>What is Context API</h3>
                    <p><span className='font-bold'>Ans : </span> Sometime we need to pass the value into specific component. If we use the props then we need to do props drilling. But props drilling is hard to maintain when the child are many. For this solution contest API is designed. We can pass values into child component by Context API in a very easy way</p>
                </div>
                <div className='p-8 bg-slate-400 text-center mt-24 mx-6 w-[350px]'>
                    <img className='mx-auto' src={semanticImage} alt="" />
                    <h3 className='text-3xl py-5'>What is Semantic Tag</h3>
                    <p><span className='font-bold'>Ans : </span> It introduces meaning to web page rather than presentation. Suppose h1 tag. People know what is a heading. It provide additional meaning in the markup. Browser can recognized them as some type of coding. </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;