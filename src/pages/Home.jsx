
import { useLoaderData } from "react-router";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import FeaturedBrands from "../components/FeaturedBrands";
import HotDeals from "../components/HotDeals";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <Helmet> <title> Home | MegaMerx</title></Helmet>
      <div className='px-4 md:px-6 max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-30'>
        <BannerSlider />
      </div>
      <div className='px-4 md:px-6 max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20'>
        <Categories />
      </div>
      <div className='px-4 md:px-6 max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20'>
        <FeaturedBrands products={products} />
      </div>
      <div className='px-4 md:px-6 max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20'>
        <HotDeals products={products} />
      </div>
    </div>
  );
};

export default Home;
