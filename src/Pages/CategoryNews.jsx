import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [showNews, setShowNews] = useState([]);
    
    
    useEffect(()=>{
        if(id == "0"){
            setShowNews(data);
            return;
        }
        else if(id == "1"){
          const filterNewsData = data.filter(news => news.others.is_today_pick == true);  
          setShowNews(filterNewsData);
          return;
        }
        else{
            const filterNewsData = data.filter(news => id == news.category_id);
            setShowNews(filterNewsData);
            return;
        }
        
    },[data, id])

    return (
        <div>
            <h1 className='font-semibold mb-5'>Total News Found -{showNews.length}</h1>
            <div>
                {
                    showNews.map(news => 
                        <NewsCard key={news.id} news={news}></NewsCard>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;