import React from 'react';
import ShowCards from './ShowCards';
import { useLoaderData } from 'react-router-dom';

const Cards = () => {

    const cards = useLoaderData();
   
    
  
    return (
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {

               
               cards ?.map(card =><ShowCards key={card.id} card ={card}> </ShowCards> ) 
            }
    </div>
       
    );
};

export default Cards;