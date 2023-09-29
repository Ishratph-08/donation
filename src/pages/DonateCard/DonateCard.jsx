import React from 'react';

const DonateCard = ({donateCard}) => {
    const {cardBg, categoryBg, id, image, title, category, price, titleTextColor} = donateCard ||{}

    console.log(donateCard);
    return (

        <div>
          
              
                 
                  <div className=" container mx-auto my-8 relative flex  flex-col rounded bg-white bg-clip-border text-gray-700 shadow-md">
                  
                      <div className="relative mx-8 mt-4  overflow-hidden rounded bg-white bg-clip-border">
                         <img src={image} className="h-[70vh] w-[300vh] object-cover"/> 
                         </div>
                         
         
                            <div className="p-6"  style={{backgroundColor:cardBg}}></div>
                                <div className="mb-2 flex items-center justify-between">
                                       <p className=" block font-sans text-base font-medium leading-relaxed antialiased">
                                        {category}
                                       </p> <div>
                                       <div className="p-6" style={{color:categoryBg}}></div>
                                        
                                       
                                      
                                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                      {/* {categoryBg} */}
                                        </p>
                                        </div> 
                                    </div>
                                
                                  </div>
                                      <p className="block font-sans text-2xl font-bold leading-normal antialiased opacity-75">
                                        {title}
                                      </p>
                                   <div>

                        </div> <div className="p-6" style={{color:titleTextColor}}></div>
                        <div className="p-6"  style={{backgroundColor:cardBg}}></div>
                    </div>
                   
                    
            
             
          
    
             
       
        
    
      
        
    
        );
};

export default DonateCard;