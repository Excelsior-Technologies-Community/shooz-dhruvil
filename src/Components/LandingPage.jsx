import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { MdOutlineMessage } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useWishList } from "../context/WishlistContext";
import { useCartList } from "../context/CartContext";

const slides = [
  {
    bg: "/banner-1.webp",
    tag: "STEP INTO STYLE",
    heading: "Discover The Latest",
    headingSpan: "Trends In Footwear",
    desc: "From classic sneakers to trendy boots, our",
    descSpan: "collection has something for everyone.",
    textAlign: "md:ml-130 lg:ml-140",
  },
  {
    bg: "/banner-2.webp",
    tag: "ELEVATE YOUR LOOK",
    heading: "Find The Perfect Pair",
    headingSpan: "Of Shoes To Complete.",
    desc: "Explore our wide range of styles, colors, and",
    descSpan: "materials to find the perfect shoes for any occasion.",
    textAlign: "md:ml-120 lg:ml-130",
  },
  {
    bg: "/banner-3.webp",
    tag: "COMFORT MEETS FASHION",
    heading: "Discover Shoes That Look",
    headingSpan: "Great And Feel Even Better.",
    desc: "Our collection features comfortable and stylish footwear",
    descSpan: "designed to keep your feet happy all day long.",
    textAlign: "md:mr-130 lg:mr-140",
  },
];

const tabs = ["FEATURED", "NEW ARRIVALS", "BEST SELLER"];

const sneakersProducts = {
  FEATURED: [
    {
      id: 1,
      img: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",
      price: "$25.00",
      name: "Classic White Tennis Sneakers",
      brand: "SportyFeet",
      brandColor: "#ae3f4f",
    },
    {
      id: 2,
      img: "/product-19_49ae4265-2610-48a8-b934-1a24b6136832.webp",
      price: "$25.00",
      name: "Waterproof Hiking Boots",
      brand: "TrailGear",
      hasTimer: true,
    },
    {
      id: 3,
      img: "/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.webp",
      price: "$21.00",
      name: "Classic Leather Sneakers",
      brand: "UrbanStep",
      brandColor: "#ae3f4f",
    },
    {
      id: 4,
      img: "/product-26_a72ab182-4323-4754-aa41-d64401571e17.webp",
      price: "$25.00",
      name: "High-Top Canvas Sneakers",
      brand: "TrendyFeet",
    },
  ],
  "NEW ARRIVALS": [
    {
      id: 5,
      img: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",
      price: "$30.00",
      name: "Running Sport Sneakers",
      brand: "SpeedX",
      brandColor: "#ae3f4f",
    },
    {
      id: 6,
      img: "/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.webp",
      price: "$28.00",
      name: "Casual Slip-On Shoes",
      brand: "EasyWalk",
    },
    {
      id: 7,
      img: "/product-19_49ae4265-2610-48a8-b934-1a24b6136832.webp",
      price: "$35.00",
      name: "Premium Leather Oxfords",
      brand: "LuxStep",
      brandColor: "#ae3f4f",
    },
    {
      id: 8,
      img: "/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.webp",
      price: "$22.00",
      name: "Low-Top Skate Shoes",
      brand: "StreetKick",
    },
  ],
  "BEST SELLER": [
    {
      id: 9,
      img: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",
      price: "$25.00",
      name: "Classic White Tennis Sneakers",
      brand: "SportyFeet",
      brandColor: "#ae3f4f",
    },
    {
      id: 10,
      img: "/product-17.webp",
      price: "$25.00",
      name: "Waterproof Hiking Boots",
      brand: "TrailGear",
      hasTimer: true,
    },
    {
      id: 11,
      img: "/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.webp",
      price: "$21.00",
      name: "Classic Leather Sneakers",
      brand: "UrbanStep",
      brandColor: "#ae3f4f",
    },
    {
      id: 12,
      img: "/product-26_a72ab182-4323-4754-aa41-d64401571e17.webp",
      price: "$25.00",
      name: "High-Top Canvas Sneakers",
      brand: "TrendyFeet",
    },
  ],
};

const collections = [
  { id: 1, image: "/col-5.webp", text: "Athletic Footwear" },
  { id: 3, image: "/col-6.webp", text: "Luxury Leather Shoes" },
  { id: 4, image: "/col-2.webp", text: "Sandles & Slides" },
  { id: 5, image: "/col-1.webp", text: "Sustainable Footwear" },
];

const fashionSneakers = [
  {
    id: 1,
    image: "/five-col-banner-1.webp",
    title: "COMFORTS MEETS FASHION",
    text: "Discover shoes",
    spanText: "that look great",
    btnText: "SHOP NOW",
  },
  {
    id: 2,
    image: "/five-col-banner-2.webp",
    title: "ELEVATE YOUR LOOK",
    text: "Find the perfect pair of",
    spanText: "shoes",
    btnText: "SHOP NOW",
  },
  {
    id: 3,
    image: "/five-col-banner-3.webp",
    title: "STEPS INTO STYLE",
    text: "The Latest trends in",
    spanText: "footware",
    btnText: "SHOP NOW",
  },
];

const fashionSneaker2 = [
  {
    id: 1,
    image: "/five-col-banner-4.webp",
    title: "SHOP BY BRAND",
    text: "Find Your favorite",
    spanText: "brand and style",
    btnText: "SHOP NOW",
  },
  {
    id: 2,
    image: "/five-col-banner-5.webp",
    title: "SALE AND CLEARANCe",
    text: "Shop our latest deals",
    spanText: "and discounts",
    btnText: "SHOP NOW",
  },
];

const SeasonSale = [
  {
    id: 1,
    image: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",
    name: "Classic White Tennis Sneakers",
    price: "$25.00",
  },
  {
    id: 2,
    image: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",
    name: "Classic White Tennis Sneakers",
    price: "$25.00",
  },
  {
    id: 3,
    image: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",
    name: "Classic White Tennis Sneakers",
    price: "$25.00",
  },
  {
    id: 4,
    image: "/product-17.webp",
    name: "Waterproof Hiking Boots",
    price: "$25.00",
  },
  {
    id: 5,
    image: "/product-17.webp",
    name: "Waterproof Hiking Boots",
    price: "$25.00",
  },
  {
    id: 6,
    image: "/product-17.webp",
    name: "Waterproof Hiking Boots",
    price: "$25.00",
  },
  {
    id: 7,
    image: "/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.webp",
    name: "Classic Leather Sneakers",
    price: "$21.00",
  },
  {
    id: 8,
    image: "/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.webp",
    name: "Classic Leather Sneakers",
    price: "$21.00",
  },
  {
    id: 9,
    image: "/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.webp",
    name: "Classic Leather Sneakers",
    price: "$21.00",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const handlebtnClick = () => {
    navigate("/collections");
  };

  const { isWishlisted, toggleWishlist } = useWishList();
  const { togglecartlist, iscartlisted } = useCartList();

  const [activeTab, setActiveTab] = useState("FEATURED");

  return (
    <>
      <div className="mt-5">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={900}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-105"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-105 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.bg}')` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className={`relative ${slide.textAlign}`}>
                  <p className="text-sm text-white tracking-widest">
                    {slide.tag}
                  </p>
                  <h1 className="text-white font-bold md:text-3xl lg:text-4xl text-xl mt-5">
                    {slide.heading}{" "}
                    <span className="block">{slide.headingSpan}</span>
                  </h1>
                  <p className="text-white mt-5">
                    {slide.desc} <span className="block">{slide.descSpan}</span>
                  </p>
                  <button
                    onClick={handlebtnClick}
                    className="bg-[#ae3f4f] hover:bg-black cursor-pointer flex justify-center items-center gap-1 w-36 h-12 text-white mt-5 tracking-wider text-sm"
                  >
                    SHOP NOW <MdArrowRightAlt />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      <section className="max-w-6xl mx-auto mt-20 mb-16 px-4">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">
            The Latest Trends In Athletic Footwear
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Sneakers &amp; Kicks
          </h2>
        </div>

        <div className="flex justify-center gap-10 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm tracking-widest pb-2 cursor-pointer transition-all duration-200 ${activeTab === tab
                ? "border-b-2 border-gray-900 text-gray-900 font-semibold"
                : "text-gray-400 hover:text-gray-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {sneakersProducts[activeTab].map((product) => (
            <div
              key={product.id}
              className="cursor-pointer group"
            >
              <div className="bg-[#FBF9F7] group-hover:scale-105 flex justify-center items-center h-52 overflow-hidden relative mb-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-60 w-80 object-contain transition-transform duration-300"
                />
              </div>

              <p className="flex justify-start items-center gap-3 text-sm font-semibold text-gray-800">
                {product.price}
                <button
                  className={`w-6 h-6 transition-colors duration-200`}
                  onClick={() => { toggleWishlist(product), navigate('/wishlist') }}
                  title={isWishlisted(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {isWishlisted(product.id) ?
                    <FaHeart className="text-[#ae3f4f] w-5 h-5" />
                    :
                    <CiHeart className="text-gray-400 hover:text-[#ae3f4f] w-5 h-5" />}
                </button>
                <button
                  className="w-5 h-5"
                  onClick={() => { togglecartlist(product), navigate('/cart') }}
                  title={iscartlisted(product.id) ? "Remove from cart" : "Add to cart"}
                >
                  {iscartlisted(product.id) ?
                    <BsCartCheckFill className="text-[#ae3f4f] w-5 h-5" />
                    :
                    <FaCartPlus className="text-gray-400 hover:text-[#ae3f4f] w-5 h-5" />}
                </button>
              </p>

              <p className="text-sm text-gray-700 mt-0.5">{product.name}</p>
              <p
                className="text-xs mt-0.5"
                style={{ color: product.brandColor || "#888" }}
              >
                {product.brand}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-100 flex justify-end items-center bg-[url('/wide-banner.webp')] bg-center bg-cover bg-no-repeat">
        <div className="w-xl flex flex-col h-56 md:mr-20 pr-5">
          <p className="tracking-wider text-[12px] self-end">
            COMFORTS MEETS FASHION
          </p>
          <h1 className="md:text-4xl text-xl font-semibold self-end mt-3">
            Discover Shoes that look great
          </h1>
          <span className="block md:text-4xl text-xl font-semibold self-end mt-1">
            and feel even better
          </span>
          <p className="text-[12px] self-end mt-3 pl-16 md:pl-0">
            Our collection features comfortable and stylish footwear designed to
            keep your feet happy all day long
          </p>
          <button
            onClick={handlebtnClick}
            className="bg-[#ae3f4f] hover:bg-black w-34 h-10 text-white flex justify-center items-center gap-1 mt-7 self-end text-sm cursor-pointer"
          >
            SHOP NOW <MdArrowRightAlt />
          </button>
        </div>
      </section>
      <div
        className="w-full overflow-hidden h-13 flex items-center 
bg-[linear-gradient(90deg,rgba(88,119,40,1),rgba(185,110,17,1)_38%,rgba(198,75,40,1)_85%,rgba(236,35,48,1)_100%)]"
      >
        <div className="whitespace-nowrap animate-marquee text-white text-[15px] font-medium">
          <span className="mx-8">
            Enjoy 20% off your entire order with the code SHOEFRESH20.
          </span>
          <span className="mx-8">
            Get 15% off your first purchase when you sign up.
          </span>
          <span className="mx-8">
            Enjoy 20% off your entire order with the code SHOEFRESH20.
          </span>
          <span className="mx-8">
            Get 15% off your first purchase when you sign up.
          </span>
          <span className="mx-8">
            Enjoy 20% off your entire order with the code SHOEFRESH20.
          </span>
          <span className="mx-8">
            Get 15% off your first purchase when you sign up.
          </span>
          <span className="mx-8">
            Enjoy 20% off your entire order with the code SHOEFRESH20.
          </span>
        </div>
      </div>
      <h4 className="tracking-wider text-center text-[12px] text-gray-500 mt-16">
        STYLES AND COMFORT FOR EVERY SEASON
      </h4>
      <h2 className="text-center text-4xl font-semibold mt-2">
        Boots & Booties
      </h2>
      <p className="text-center text-[12px] text-gray-600 mt-4">
        Check out our collection of the top New Products{" "}
        <span className="block"> that encourage conversion.</span>
      </p>
      <div className="max-w-6xl mx-auto mt-7 px-4 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mb-10 ">
        {collections.map((item) => (
          <div
            key={item.id}
            className="w-70 md:w-56 lg:w-65 h-64 group  flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <button
              onClick={handlebtnClick}
              className="bg-white text-black w-40 h-10 text-[14px] md:text-[15px] font-semibold mb-4 hover:bg-[#ae3f4f] hover:text-white transition"
            >
              {item.text}
            </button>
          </div>
        ))}
      </div>
      <section className="w-full bg-[#333333] px-4 md:px-6 lg:px-8 py-16">
        <h5 className="tracking-wider text-center text-[12px] text-white font-semibold">
          FASHION SNEAKER
        </h5>

        <h1 className="text-white text-center text-3xl md:text-4xl font-semibold pt-3">
          Timeless styles for everyday wear
        </h1>

        <p className="text-center text-white text-sm pt-3">
          High-performance footwear for sports and
          <span className="block">workouts</span>
        </p>

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {fashionSneakers.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-start transition-transform duration-300 hover:scale-105 p-6 h-55 md:h-62.5 bg-cover bg-center bg-no-repeat rounded-md"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <p className="text-white tracking-wider text-[11px] font-semibold">
                {item.title}
              </p>

              <p className="text-white text-xl md:text-2xl font-semibold pt-2">
                {item.text}
              </p>

              <p className="text-white text-xl md:text-2xl font-semibold">
                {item.spanText}
              </p>

              <button
                onClick={handlebtnClick}
                className="text-white tracking-wider text-[12px] pt-5 underline underline-offset-5 cursor-pointer"
              >
                {item.btnText}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {fashionSneaker2.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-start transition-transform duration-300 hover:scale-105 p-6 h-55 md:h-62.5 bg-cover bg-center bg-no-repeat rounded-md"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <p className="text-white tracking-wider text-[11px] font-semibold">
                {item.title}
              </p>

              <p className="text-white text-xl md:text-2xl font-semibold pt-2">
                {item.text}
              </p>

              <p className="text-white text-xl md:text-2xl font-semibold">
                {item.spanText}
              </p>

              <button
                onClick={handlebtnClick}
                className="text-white tracking-wider text-[12px] pt-5 underline underline-offset-5 cursor-pointer"
              >
                {item.btnText}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-auto bg-[#FFFFFF] pb-16">
        <p className="text-center text-[11px] text-gray-600 tracking-wider pt-10">
          SEASON'S END SALE
        </p>
        <h1 className="md:text-5xl text-2xl text-center font-semibold mt-1">
          Huge discounts on last season's styles
        </h1>
        <p className="text-center pt-4 text-[14px]">
          Himenaeos nascetur tristique consequat mus ad.
          <span className="block">
            Accumsan fringilla in laoreet id bibendum et.
          </span>
        </p>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-x-6 mt-10">
          {SeasonSale.map((item, id) => (
            <div
              key={id}
              className="flex items-center gap-4 py-5 border-b border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain shrink-0"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800 cursor-pointer hover:text-[#ae3f4f]">
                  {item.name}
                </h3>
                <p className="text-sm mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-auto flex flex-col md:flex-row justify-center items-center mx-auto gap-7">
        <div className="w-[1/2] h-auto p-5">
          <p className="tracking-wider text-[12px] md:text-[12px] text-center md:text-start">
            OUT MOST POPULER STYLE
          </p>
          <h1 className="lg:text-4xl text-3xl font-semibold mt-2 text-center md:text-start">
            Save big on shoes <span className="block">from last season</span>
          </h1>
          <p className="md:text-[12px] text-[13px] lg:text-[16px] mt-6 text-center md:text-start">
            Morbi natoque id finibus natoque sapien turpis elementum maximus.
            Sociosqu auctor a urna{" "}
            <span className="block">
              {" "}
              consequat laoreet nisi accumsan magna. Adipiscing vulputate nec
              euismod, a aliquam enim.
            </span>{" "}
            <span className="block">
              {" "}
              Mi facilisi ex est habitant lacus sagittis vitae.
            </span>
          </p>
          <p className="md:text-[12px] text-[13px] lg:text-[16px] mt-6 text-center md:text-start">
            Molestie dolor mus vitae penatibus sed lectus convallis ut neque.
            Leo elementum euismod
            <span className="block">
              {" "}
              penatibus cras sociosqu aliquet tellus.
            </span>
          </p>
          <button
            onClick={handlebtnClick}
            className="bg-[#ae3f4f] hover:bg-black cursor-pointer flex justify-center items-center gap-1 w-34 h-11 text-white mt-10 tracking-wider text-sm mx-auto md:mx-0"
          >
            SHOP NOW <MdArrowRightAlt />
          </button>
        </div>
        <img
          src="/video-pic.webp"
          alt=""
          className="w-[1/2] h-110 p-5 md:w-96 lg:w-110"
        />
      </section>
      <div className="w-full h-20 bg-[linear-gradient(90deg,rgba(149,109,194,1),rgba(78,73,145,1)_20%,rgba(185,61,70,1)_100%)] flex items-center justify-around px-10 mt-10 gap-3">
        <p className="text-white md:text-[16px] text-[12px]">
          Discover Our Stores: Your Local Shoe Haven
        </p>

        <button className="bg-[#4E4991] text-white md:px-6 md:py-2 px-1 py-1  md:text-sm text-[10px] cursor-pointer">
          FIND STORE
        </button>
      </div>

      <section className="w-full bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
            Customer Feedback Highlights
          </h2>
          <p className="text-center text-sm text-gray-400 mt-3 leading-relaxed">
            Laoreet ridiculus congue magna malesuada
            <span className="block">
              phasellus condimentum taciti mus primis.
            </span>
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 items-center justify-items-center">
            <img
              src="/text-logo-1.avif"
              alt="penomé"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-3.avif"
              alt="POWER"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-5.avif"
              alt="CONNECT"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-7.avif"
              alt="vagoda"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-9.avif"
              alt="intrum"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />

            <img
              src="/text-logo-4.avif"
              alt="Renové"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-11.avif"
              alt="ELEVATE"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-6.avif"
              alt="ZAVANA"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-8.avif"
              alt="RIVAL"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
            <img
              src="/text-logo-10.avif"
              alt="voli.me"
              className="h-14 md:h-16 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl h-auto mx-auto px-4">
        <p className="tracking-wider text-sm pt-15 text-gray-400">
          FROM THE BLOG
        </p>
        <h2 className="text-5xl font-bold pt-1">Recently Our Posts</h2>
        <p className="pt-3 text-[13px] text-gray-400">
          Sit amet conse ctetur adipisicing elit, sed do{" "}
          <span className="block">
            {" "}
            eiusmod tempor incididunt ut labore et dolore
          </span>
          <span className="block"> magna aliqua.</span>
        </p>
        <div className="flex flex-col md:flex-row gap-7 max-w-6xl h-auto mt-5 mb-16">
          <div
            className="w-full md:w-1/2 h-100 bg-cover bg-center bg-no-repeat rounded-md flex flex-col justify-end p-8"
            style={{ backgroundImage: `url('/blog-2.webp')` }}
          >
            <div className="flex items-center gap-3">
              <p className="text-sm text-white font-semibold">Oct 28 2024</p>
              <div className="flex items-center gap-2">
                <MdOutlineMessage className="text-white" />
                <span className="text-white font-semibold text-sm">
                  0 comments
                </span>
              </div>
            </div>
            <h2 className="font-semibold text-white text-lg mt-2">
              The Future Of Footware: A Look Ahead
            </h2>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between h-100">
            <div className="flex items-center gap-5 h-30">
              <img
                src="/five-col-banner-4.webp"
                alt="Ecofriendly Footwear"
                className="w-40 h-28 object-cover rounded-md shrink-0"
              />
              <div>
                <p className="flex items-center gap-2 lg:text-sm text-[10px] text-black font-semibold">
                  Oct 28 2024
                  <span className="flex items-center gap-1">
                    <MdOutlineMessage className="text-black" />
                    <span className="text-black font-semibold">0 comments</span>
                  </span>
                </p>
                <h2 className="mt-2 lg:text-[18px] text-[12px] font-semibold">
                  Ecofriendly Footeware: Sustaible Style
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-5 h-30">
              <img
                src="/blog-6.webp"
                alt="Sneaker Care Guide"
                className="w-40 h-28 object-cover rounded-md shrink-0"
              />
              <div>
                <p className="flex items-center gap-2 lg:text-[13px] text-[10px] text-black font-semibold">
                  Oct 17 2024
                  <span className="flex items-center gap-1">
                    <MdOutlineMessage className="text-black" />
                    <span className="text-black font-semibold">0 comments</span>
                  </span>
                </p>
                <h2 className="mt-2 lg:text-[18px] text-[12px] font-semibold">
                  The Ultimate Guide to Sneaker Care
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-5 h-30">
              <img
                src="/blog-5.webp"
                alt="Style Your Sneakers"
                className="w-40 h-28 object-cover rounded-md shrink-0"
              />
              <div>
                <p className="flex items-center gap-2 lg:text-sm text-[10px] text-black font-semibold">
                  Oct 17 2024
                  <span className="flex items-center gap-1">
                    <MdOutlineMessage className="text-black" />
                    <span className="text-black font-semibold">0 comments</span>
                  </span>
                </p>
                <h2 className="mt-2 lg:text-[18px] text-[12px] font-semibold">
                  How to Style Your Favorite Sneaker
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl h-auto flex flex-col md:flex-row justify-center items-stretch mx-auto px-4 my-16">
        <div className="bg-[#ae3f4f] w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white">
            SUBSCRIBE TO OUR NEWS <span className="md:block">ARTICALS</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-4 md:mt-10 gap-2 sm:gap-0">
            <input
              type="text"
              required
              placeholder="Your Email"
              className="flex-1 h-10 bg-white pl-3 outline-none"
            />
            <button className="bg-black text-white text-sm h-10 px-4 cursor-pointer whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <img
          src="imgi_285_newslatter-image.jpg"
          alt=""
          className="w-full md:w-1/3 h-52 sm:h-60 md:h-auto object-fit"
        />
      </div>
    </>
  );
};

export default LandingPage;
