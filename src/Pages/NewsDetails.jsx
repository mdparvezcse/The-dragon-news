import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailscard from '../Components/NewsDetailscard';

const NewsDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    
    const newsDetails = data.find(
    singleData => singleData.id == id
);
    return (
        <div className='mt-5'>
            <header>
            </header>
            <main className='w-11/12 mx-auto'>
                <section className='grid grid-cols-12'>
                    <div className='col-span-9'>
                        {
                            newsDetails ? <NewsDetailscard newsCard={newsDetails}></NewsDetailscard>
                            : <p>Data Not Found</p>
                        }
                    </div>
                    <div className='col-span-3'>
                        <RightAside></RightAside>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;