import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import { ArrowBigLeft } from "lucide-react";
import useTitle from "../dynamicTitle/useTitle";
const ViewMore = () => {
  useTitle('Toy-Details')
  const data = useLoaderData();
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState({});
  console.log(data, id, toyDetails);
  useEffect(() => {
    const toyDetail = data.find((singleToy) => singleToy.toyId == id);
    setToyDetails(toyDetail);
  }, [data, id]);
  // console.log(toyDetails);
  const hendleTryBtn = (e) => {
    e.preventDefault();

    // const name=e.target.name.value
    // const email=e.target.email.value
    // console.log(name,email);
    Swal.fire({
      title: "try now Successfully submited",
      icon: "success",
      draggable: true,
    });
    e.target.reset();
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    Aos.refresh();
  }, [data]); // re-run when new elements are rendered

  return (
    <div className="max-w-7xl  mx-auto py-4 ">
      <div className="mt-2 mb-3">
        <div className="relative group ml-5 md:ml-10 btn backdrop-blur-md bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
          <Link to={"/"}>
            {" "}
            <ArrowBigLeft className="text-gray-700" />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Back
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 px-4">
        <div className="md:w-[50%]" data-aos="fade-right">
          <img
            className="min-h-[calc(100vh-289px)] rounded-sm w-full"
            src={toyDetails.pictureURL}
            alt=""
          />
        </div>
        <div className=" space-y-4  md:w-[50%]" data-aos="fade-left">
          <h1 className="text-4xl font-bold">{toyDetails.toyName}</h1>
          <div className="flex justify-between w-[70%]">
            <h1 className="text-xl font-bold">{toyDetails.subCategory}</h1>
            <p>Rating:{toyDetails.rating}</p>
          </div>
          <div className="border-b-2 border-gray-300 pb-5">
            <div className="flex justify-between w-[70%]">
              <h1>Price: ${toyDetails.price}</h1>
              <h1>Abailable: {toyDetails.availableQuantity}</h1>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 pb-5">
            <p className="text-gray-500">
              Description: {toyDetails.description}
            </p>
          </div>
          <div className="text-xl font-bold">
            <h1>Stall Name: {toyDetails.sellerName}</h1>
            <p>Email Address: {toyDetails.sellerEmail}</p>
          </div>

          <div className="max-w-6/12 mx-auto">
            <div className="card bg-base-200 shadow-sm space-y-4 p-4">
              <form onSubmit={hendleTryBtn}>
                <fieldset className="fieldset w-full">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your email name"
                    name="name"
                    required
                  />
                  <label className="label">Email Address</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your email address"
                    name="email"
                    required
                  />

                  <button className="btn text-white btn-primary  mt-4">
                    Try Now!
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
