import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const DonationCard = () => {

    const [data, setData] = useState();
    useEffect(()=>{
        const lodedData = useLoaderData();
        setData(data)
    },[])



    console.log(data)
    return (

       
        <div>
            
        </div>
    );
};

export default DonationCard;