import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import PRODUCT1 from '../assets/product1.png'
import PRODUCT2 from '../assets/product2.png'
import PRODUCT3 from '../assets/product3.png'
import PRODUCT4 from '../assets/product4.png'
import './product.css'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


const data = [
  {
    id: 1,
    username: 'Gotland black jacket',
    price: 'N156000',
    image: PRODUCT1,
  },
  {
    id: 2,
    username: 'Blue Sport Pants',
    price: 'N85000',
    image: PRODUCT2,
  },
  {
    id: 3,
    username: 'Knox Quilted Jacket',
    price: 'N10000',
    image: PRODUCT3,
  },
  {
    id: 4,
    username: 'SWEAT PANTS',
    price: 'N25000',
    image: PRODUCT4,
  },
];


const Product = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  
  return (
    <Swiper data-aos="fade-up"
    data-aos-duration="3000"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        // When screen width is 768 pixels or less, show 1 slide
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        // When screen width is 1024 pixels or less, show 2 slides
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // When screen width is 1200 pixels or less, show 3 slides
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.slice(0, 4).map((user) => (
        <SwiperSlide key={user.id} className='slide' id='products'>
          <div className='slide-content'>
            <div className='user-image'>
              <img src={user.image} alt='image' className='user-photo' />
              <h5>{user.username}</h5>
              <p className='user-price'>
                <i>{user.price}</i>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

 
export default Product;
