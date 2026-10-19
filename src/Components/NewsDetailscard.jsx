import React from 'react';
import Header from './Header';
import { Link } from 'react-router';

const NewsDetailscard = ({ newsCard }) => {
    const {category_id, title, image_url, details } = newsCard;

    return (
        <div className='mx-6'>
            <img className='w-full mb-5' src={image_url} alt={title} />
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p className='my-5 font-semibold text-accent'>{details}</p>
            <Link to={`/allCategories/${category_id}`}><button className="btn btn-secondary">Back to Categories</button></Link>
        </div>
    );
};

export default NewsDetailscard;