/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const currentNews = useLoaderData();
    return (
        <div>
            {id && <h1>this is Category {currentNews.length}</h1>}
            {
                currentNews.map(news =><NewsCard
                key={news._id}
                news ={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;