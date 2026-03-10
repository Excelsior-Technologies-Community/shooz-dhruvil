import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const LandingPage = () => {
  const navigate = useNavigate();
  const handlebtnClick = () => {
    navigate("/collections");
  };

  return (
    <>
      <div className="relative w-full h-105 mt-5 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('/banner-1.webp')]">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative md:ml-130 lg:ml-140">
          <p className=" text-sm text-white">STEP INTO STYLE</p>
          <h1 className=" text-white font-bold md:text-3xl lg:text-4xl text-xl mt-5">
            Discover The Latest{" "}
            <span className="block">Trends in Footwear</span>
          </h1>
          <p className="text-white mt-5">
            From classic sneakers to trendy boots, our{" "}
            <span className="block">
              collection has something for everyone.
            </span>
          </p>
          <button
            onClick={handlebtnClick}
            className="bg-[#ae3f4f] hover:bg-black cursor-pointer flex justify-center items-center gap-1 w-36 h-12 text-white mt-5 tracking-wider text-sm"
          >
            SHOP NOW <MdArrowRightAlt />
          </button>
        </div>
      </div>
      <section className="max-w-6xl mx-auto mt-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-[url('/grid-three-1.webp')] bg-cover bg-right h-60 flex flex-col justify-center items-start pl-10">
          <p className="text-sm tracking-widest">TRENDING</p>

          <p className="text-2xl pt-3 font-semibold">
            Men <span className="block">Collections</span>
          </p>

          <button
            onClick={handlebtnClick}
            className="pt-3 tracking-widest underline text-[#ae3f4f] underline-offset-4 text-md cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>

        <div className="bg-[url('/grid-three-3.webp')] bg-cover bg-right h-60 flex flex-col justify-center items-start pl-10">
          <p className="text-sm tracking-widest">LATEST</p>

          <p className="text-2xl pt-3 font-semibold">
            Women <span className="block">Collections</span>
          </p>

          <button
            onClick={handlebtnClick}
            className="pt-3 tracking-widest underline text-[#ae3f4f] underline-offset-4 text-md cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>

        <div className="bg-[url('/grid-three-2.webp')] bg-cover bg-right h-60 flex flex-col justify-center items-start pl-10">
          <p className="text-sm tracking-widest">COMFORT</p>

          <p className="text-2xl pt-3 font-semibold">
            Kids <span className="block">Collections</span>
          </p>

          <button
            onClick={handlebtnClick}
            className="pt-3 tracking-widest underline text-[#ae3f4f] underline-offset-4 text-md cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
