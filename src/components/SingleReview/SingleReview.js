import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';

const SingleReview = ({ review }) => {
    const { name, reviews, rating, image } = review
    return (
        <div className='bg-slate-300 p-5 text-center w-3/4'>
            <img className='rounded mx-auto' alt='' src={image} />
            <div className='pt-3'>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>
            <h1 className='text-2xl font-semibold py-3'>{name}</h1>
            <p>{reviews}</p>
        </div>
    );
};

export default SingleReview;