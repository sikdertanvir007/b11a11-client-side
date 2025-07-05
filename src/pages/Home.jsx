import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Categories from '../components/Categories';
import FeaturedBrands from '../components/FeaturedBrands';
import HotDeals from '../components/HotDeals';

const Home = () => {
    return (
        <div>
            <div className='px-4 md:px-6  max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20 '>
            <BannerSlider></BannerSlider>
            </div>
            <div className='px-4 md:px-6  max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20'>
            <Categories></Categories>
            </div>
            <div className='px-4 md:px-6  max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20' >
            <FeaturedBrands></FeaturedBrands>
            </div>
            <div className='px-4 md:px-6  max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20' >
            <HotDeals></HotDeals>
            </div>
        </div>
    );
};

export default Home;