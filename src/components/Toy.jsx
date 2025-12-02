import { useEffect } from "react";
import { NavLink, useParams } from "react-router";

import Aos from "aos";
import "aos/dist/aos.css";
const Toy = ({ filteredToy }) => {
  const { id } = useParams();
  const { toyId, pictureURL, toyName, rating, price, availableQuantity } =
    filteredToy;

  // console.log(id);
  // console.log(filteredToy);

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-base-300"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-lg group-hover:opacity-100 transition-all duration-700"></div>

        {/* Card Content */}
        <div className="relative z-10 bg-base-100 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
          <figure className="overflow-hidden">
            <img
              src={pictureURL}
              alt={toyName}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>

          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">{toyName}</h2>

            <div className="flex justify-between text-gray-500 text-sm">
              <p>💲 Price: ${price}</p>
              <p>📦 Available: {availableQuantity}</p>
            </div>

            <p className="text-sm text-gray-600">⭐ Rating: {rating}</p>

            <div className="flex justify-between mt-4">
              <NavLink
                to={`/view-more/${toyId}`}
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradientMove"></span>
                <span className="relative z-10">View More</span>
              </NavLink>

              <button className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-semibold text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-[length:200%_200%] animate-gradientMove"></span>
                <span className="relative z-10">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toy;
