import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


import Slider1 from '../assets/Slider-1.jpg';
import Slider2 from '../assets/Slider-2.jpeg';
import Slider3 from '../assets/Slider-3.webp';

const slides = [
  {
    image: Slider1,
    heading: 'MegaMerx Super Deals',
    subheading: 'Get up to 40% OFF on Electronics & Gadgets!',
    cta: 'Shop Now'
  },
  {
    image: Slider2,
    heading: 'Bulk Orders, Bigger Savings',
    subheading: 'Order 500+ units & enjoy exclusive prices.',
    cta: 'Browse Categories'
  },
  {
    image: Slider3,
    heading: 'New Arrivals in Fashion & Apparel',
    subheading: 'Latest trends at wholesale rates.',
    cta: 'Explore Now'
  }
];

const BannerSlider = () => {
  return (
    
    <Swiper
    
      spaceBetween={30}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true} // ✅ Enable navigation
      modules={[Autoplay, Navigation]} // ✅ Register module here
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[400px] flex flex-col justify-center items-center text-center text-white rounded-xl"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-4xl font-bold">{slide.heading}</h2>
            <p className="text-lg mt-2">{slide.subheading}</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
              {slide.cta}
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    
  );
};

export default BannerSlider;
