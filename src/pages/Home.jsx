import React from 'react';
import HomeSwiper from '../components/carousel/HomeSwiper';
import FounderMessage from '../components/extraSection/FounderMessage';
import HomemadeRecipes from '../components/extraSection/HomemadeRecipes';
import ShareRecipe from '../components/extraSection/ShareRecipe';

const Home = () => {
    return (
        <div>
           <HomeSwiper></HomeSwiper>
           <HomemadeRecipes></HomemadeRecipes>
           <ShareRecipe></ShareRecipe>
           <FounderMessage></FounderMessage>

        </div>
    );
};

export default Home;