import React, { useEffect } from "react";
import { Star } from "lucide-react"; // for stars
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Aos from "aos";

const testimonials = [
  {
    id: 1,
    name: "Jessica Lisa",
    title: "Fashion Designer",
    img: "https://i.ibb.co/2hY8KZt/user1.jpg", // replace with your image
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 2,
    name: "Jessica Lisa",
    title: "Fashion Designer",
    img: "https://i.ibb.co/2hY8KZt/user1.jpg",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 3,
    name: "Jessica Lisa",
    title: "Fashion Designer",
    img: "https://i.ibb.co/2hY8KZt/user1.jpg",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum excepteur sint occaecat cupidatat non proident.",
  },
];

const Testimonials = () => {
    
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
  return (
    <section className="bg-[#9AD8D6] py-16 bg-transparent">
      <div className="text-center mb-12 px-4 " data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          WHAT PARENTS SAY
        </h2>
        <p className="text-gray-700 mt-3 max-w-xl mx-auto">
          Etiam placerat nisl vel porta fermentum. Vestibulum ut sodales quam.
          Ut in vestibulum augue.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-6"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white rounded-xl p-6 relative text-center shadow-lg mb-14 " data-aos="fade-up">
              {/* Stars */}
              <div className="flex justify-center mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#facc15" strokeWidth={0} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed ">
                {t.review}
              </p>

              {/* Speech bubble arrow */}
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>

              {/* Profile */}
              <div className="absolute bottom-[-75px] left-1/2 -translate-x-1/2 flex flex-col items-center ">
                <img
                  src={'https://i.ibb.co.com/xS1kbJZn/mother-daughter-having-fun-outdoor-family-playing-laughing-together-park-sitting-green-field-sunny-d.webp'}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
                />
                <h4 className="font-bold mt-2 text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
