import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';

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
    heading: '',
    subheading: '',
    cta: 'Explore Now'
  }
];

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[400px] flex flex-col space-y-14 justify-center items-center text-center text-white rounded-xl"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slide.heading}
            </motion.h2>

            <motion.p
              className="text-lg mt-2 font-semibold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slide.subheading}
            </motion.p>

            <motion.button
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded font-semibold rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {slide.cta}
            </motion.button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
