import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { EffectCards } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-cards';


const Gallery = () => {
  const images: { url: string; alt: string }[] = [
    { url: "./1.jpg", alt: "image 1" },
    { url: "./2.jpg", alt: "image 1" },
    { url: "./bg.webp", alt: "image 2" },
    { url: "./background.jpeg", alt: "image 3" },
  ];

  return (
    <>
      <h1 className="p-4 text-center text-3xl font-bold">Gallery</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, Pagination , EffectCards]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        effect="cards"
        className="w-full sm:w-1/2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center rounded-lg shadow-lg">
            <img src={image.url} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gallery;
