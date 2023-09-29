import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Statistics from "../pages/Statistics/Statistics";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import DonationCard from "../pages/DonationCard/DonationCard";





const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        // errorElement:<ErrorPage></ErrorPage>,
        children : [
            {
                path :"/",
                element :<Home></Home>,
                loader : ()=>fetch('/data.json')
            },
                
            {
                path : "/donation",
                element :<Donation></Donation>
            },

            {
                path :"/statistics",
                element :<Statistics></Statistics>,

            },
            {
                path : "/donationcard/:id",
                element :<DonationCard></DonationCard>,
                loader : ()=>fetch('data.json')

            }

        ] 
    }
])


export default myCreatedRoute;