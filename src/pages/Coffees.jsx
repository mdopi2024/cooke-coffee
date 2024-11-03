import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../conponents/Card';

const Coffees = () => {
    const data = useLoaderData()

const [coffees, setCoffees]=useState(data)

const handleSort = sortBy =>{
    if(sortBy === 'popurarity'){
       const sorted = [...data].sort((a,b)=>b.popularity-a.popularity)
       setCoffees(sorted)

    }else if (sortBy === 'rating'){
        const sorted1 = [...data].sort((a,b)=>b.rating-a.rating)
        setCoffees(sorted1)
 
    }
}

    return (
       <>
          <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-thin'>
            Sort Coffee&apos; by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className='space-x-4'>
          <button
            onClick={() => handleSort('popurarity')}
            className='btn btn-warning'
          >
            Sort By Popularity 
          </button>
          <button
            onClick={() => handleSort('rating')}
            className='btn btn-warning'
          >
            Sort By Rating 
          </button>
        </div>
      
       </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {
        coffees.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
        }
       
     </div>
       </>
    );
};

export default Coffees;