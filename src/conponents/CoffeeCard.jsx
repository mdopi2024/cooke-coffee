import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {

  const navigate= useNavigate()

    const data = useLoaderData()
    const {category} = useParams()
    console.log(category)
    
    const [categoryCoffee,setCategoryCoffee]= useState([])
  

    useEffect(()=>{
      if(category){
        const filterByCategory = [...data].filter(c => c.category === category);
      setCategoryCoffee(filterByCategory)
      }
      else{
        setCategoryCoffee(data.slice(0,6))
      }
    },[data,category])
    return (
       <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
           {
           categoryCoffee.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
           }
          
        </div>
        <button className='btn btn-warning ' onClick={()=>navigate('/coffees')}>View All</button>
       </>
    );
};

export default CoffeeCard;