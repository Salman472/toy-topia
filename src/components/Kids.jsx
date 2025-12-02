import Aos from 'aos';
import React, { useEffect } from 'react';

const Kids = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
    return (
        <div data-aos="fade-up">
            <section className="bg-[#eaf8f9] relative overflow-hidden py-16 md:py-24 rounded-md my-4" >
      {/* Background decorative shapes */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#c7eef1] rounded-bl-[50%]"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#c7eef1] rounded-tr-[50%]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10 ">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg space-y-6 "  data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            COMFY CLOTHES FOR THE <br /> NAUGHTY KIDS
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Etiam placerat nisl vel porta fermentum. Vestibulum ut sodales quam.
            Ut in vestibulum augue.
          </p>

          <button className="bg-[#91cdd4] hover:bg-[#7fc3ca] text-white font-semibold px-6 py-3 rounded-full transition duration-300 bg-transparent">
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end relative " data-aos="fade-left">
          <img
            src={'https://i.ibb.co.com/tTxznf3n/download-7.jpg'}
            alt="Baby playing with toys"
            className=" z-10"
          />

          {/* Decorative toys images (optional) */}
          <img
            src="https://i.ibb.co.com/tTxznf3n/download-7.jpg"
            alt="Toys"
            className="absolute bottom-0 left-[-50px] w-[300px] md:w-[350px]"
          />
        </div>
      </div>

      {/* Decorative cartoon elephant (optional) */}
      <img  data-aos="fade-right"
        src="https://i.ibb.co.com/vCH2L21d/download-4.jpg"
        alt="Elephant"
        className="absolute bottom-0 left-5 w-[120px] md:w-[150px]"
      />
    </section>
        </div>
    );
};

export default Kids;
