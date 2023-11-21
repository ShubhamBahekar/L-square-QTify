import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  './carousel.css'

export default function index({data,type})
{
    return ( 
    <div className="carousel-container">
    <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        // navigation={true}
        navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}

        virtual
      >
       {data.map(cardData=>(
            <SwiperSlide   key={cardData.id}>
           <Card 
           type="songs"
           imgSrc={cardData.image} 
           label ={cardData.title}
           followersCount= {type==="songs"? cardData.likes:cardData.follows}
           />
             </SwiperSlide>
           ))}
          </Swiper>
          <div className="arrow-left arrow"><img src="leftIcon.png" /></div>
          <div className="arrow-right arrow"><img src="rightIcon.png"/></div>
          </div>
          
          )
}