import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <div>
            <div className='px-4 md:px-6  max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20 '>
            <BannerSlider></BannerSlider>
            </div>
            <Categories></Categories>
        </div>
    );
};

export default Home;