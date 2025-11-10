import React from 'react';
import HomeSwiper from '../components/carousel/HomeSwiper';
import FounderMessage from '../components/extraSection/FounderMessage';
import HomemadeRecipes from '../components/extraSection/HomemadeRecipes';

const Home = () => {
    return (
        <div>
           <HomeSwiper></HomeSwiper>
           <HomemadeRecipes></HomemadeRecipes>
           <FounderMessage></FounderMessage>

        </div>
    );
};

export default Home;