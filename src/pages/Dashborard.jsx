import React, { useEffect, useState } from 'react';
import Heading from '../conponents/Heading';
import { getAllData } from '../ultilities';
import Card from '../conponents/Card';


const Dashborard = () => {
    
  const [coffees,setCoffees]= useState([])
  useEffect(()=>{
     const favorites = getAllData()
     setCoffees(favorites)
  },[])

    return (
       <>
       <Heading title='Welcome to Dashboard' subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.' ></Heading>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {
        coffees.map(coffees=><Card key={coffees.id} coffee={coffees}></Card>)
        }
       
     </div>
       </>
    );
};

export default Dashborard;