import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReview] = useReviews();
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-10 py-12 px-6 container mx-auto'>
            {reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)}
        </div>
    );
};

export default Reviews;