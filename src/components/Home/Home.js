import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeBanner from '../HomeBanner/HomeBanner';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="container mx-auto">
                <h2 className='text-center text-4xl uppercase font-mono font-bold pt-12'>Testimonial</h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 py-12 px-6 '>
                    {reviews.slice(0, 3).map(review => <SingleReview key={review.id} review={review}></SingleReview>)}
                </div>
                <div className='text-center pb-12'>
                    <button className='bg-orange-400 text-white rounded my-5 py-2 px-5'><Link to='/reviews'>See All Reviews</Link></button>
                </div>
            </div>

        </div>
    );
};

export default Home;