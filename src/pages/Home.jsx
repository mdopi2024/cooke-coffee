import React from 'react';
import Banner from '../conponents/Banner';
import Heading from '../conponents/Heading';
import Category from '../conponents/Category';
import { Outlet, useLoaderData } from 'react-router-dom';


const Home = () => {
    const categories = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <Heading title='Browse Coffees by Category' subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'></Heading>

            {/* tab part */}
           <Category categories={categories} ></Category>
           <Outlet></Outlet>

        </div>
    );
};

export default Home;