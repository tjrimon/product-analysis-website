import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReview] = useReviews();
    return (
        <div className='grid grid-cols-3 gap-10 py-12 px-6 container mx-auto'>
            {reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)}
        </div>
    );
};

export default Reviews;