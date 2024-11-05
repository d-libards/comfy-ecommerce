import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We're changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vero
          sequi nihil repudiandae soluta velit nulla impedit magnam corporis
          qui?
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Slick Carousel */}
      <div className="hidden lg:block lg:w-full bg-neutral rounded-box py-4 px-8">
        <Slider {...settings}>
          {carouselImages.map((img, index) => {
            return (
              <div className="flex justify-center px-1" key={index}>
                <img
                  src={img}
                  className="rounded-box h-[30rem] w-full object-cover"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
