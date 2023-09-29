
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import Banner from './../../components/Banner/Banner';

const Home = () => {

    const cards =useLoaderData()
    // console.log(cards);
    return (
        <div>
          <Banner></Banner>
          <Cards cards = {cards} > </Cards>
        </div>
    );
};

export default Home;