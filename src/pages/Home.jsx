
import ToyCard from "../components/ToyCard";
// import Swiper from 'swiper';
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
// import { Navigation } from 'lucide-react';
import slider1 from "../assets/download.jpeg";
import slider2 from "../assets/images.jpeg";
import slider3 from "../assets/images (1).jpeg";
import slider4 from "../assets/images (2).jpeg";
import Navbar from "../components/Navbar";
import { useLoaderData } from "react-router";
import Toy from "../components/Toy";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Kids from "../components/Kids";
import Testimonials from "../components/Testimonial";
import useTitle from "../dynamicTitle/useTitle";

// import { SwiperSlide } from 'swiper/react';
// const swiper = new Swiper(...);
const Home = () => {
  useTitle('Home')
  const data=useLoaderData()
  
  const filteredToys = data.filter(
  (toy) => toy.publish === "popular" 
);

// console.log(filteredToys);

useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-5 z-0 " data-aos="fade-up">
        
     <div className="mt-1">
       <Swiper
      
        navigation={true}
        autoplay={true}
        modules={[Autoplay]}
        className="mySwiper "
      >
        
        
        <SwiperSlide>
          <img className="w-screen rounded-sm h-[300px] md:h-[500px]" src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen rounded-sm h-[300px] md:h-[500px]" src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen rounded-sm h-[300px] md:h-[500px]" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen rounded-sm h-[300px] md:h-[500px]" src={slider2} alt="" />
        </SwiperSlide>
      </Swiper>
     </div>

      <div className="mt-16 space-y-4">
        <h1 className="text-2xl font-bold">Popular Toys</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* <Products/> */}
        
        {
          filteredToys.map(filteredToy=><Toy filteredToy={filteredToy} key={filteredToy.toyId}/>)
        }
      </div>

      </div>
      
        
         <Kids />
        <Testimonials />
      
    </div>
  );
};

export default Home;
