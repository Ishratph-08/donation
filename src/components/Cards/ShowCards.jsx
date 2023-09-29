import React from 'react';
import { Link } from 'react-router-dom';

const ShowCards = ({card}) => {
    const {cardBg,categoryBg, id,image,title,category,price,titleTextcolor}= card || {}
    return (

    <div>
      
          
             <Link to={`/donationcard/${id}`}>
              <div className=" container mx-auto my-8 relative flex  flex-col rounded bg-white bg-clip-border text-gray-700 shadow-md">
              
                  <div className="relative mx-8 mt-4  overflow-hidden rounded bg-white bg-clip-border">
                     <img src= {image} className="h-[194px] w-[312px] object-cover"/>      
     
                        <div className="p-6"  style={{backgroundColor:cardBg}}>
                            <div className="mb-2 flex items-center justify-between">
                                   <p className=" block font-sans text-base font-medium leading-relaxed antialiased">
                                    {category}
                                   </p> 
                                   
                                   <div className='text-2xl style={{color:categoryBg}}'>
                                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                  {/* {categoryBg} */}
                                    </p> 
                                </div>
                            
                              </div>
                                  <p className="block font-sans text-xl font-bold leading-normal antialiased opacity-75">
                                    {title}
                                  </p>
                           <div>
                    </div>        
                    
                </div>
                </div>
                

         
          </div>

          </Link> 
    </div>
    

  
    

    );
};

export default ShowCards;