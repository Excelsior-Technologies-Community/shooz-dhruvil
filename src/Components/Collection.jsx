import React from "react";

const Collection = () => {
  const collections = [
    { id: 1, image: "/col-5.webp", text: "Athletic Footwear" },
    { id: 2, image: "/col-4.webp", text: "Boots For Every Occasion" },
    { id: 3, image: "/col-6.webp", text: "Luxury Leather Shoes" },
    { id: 4, image: "/col-2.webp", text: "Sandles & Slides" },
    { id: 5, image: "/col-1.webp", text: "Sustainable Footwear" },
  ];

  const womenCollections = [
    {
      id: 1,
      image: "/backpack.png",
      title: "Example Product Title",
      price: "$19.99",
    },
    {
      id: 2,
      image: "/backpack.png",
      title: "Example Product Title",
      price: "$19.99",
    },
    {
      id: 3,
      image: "/backpack.png",
      title: "Example Product Title",
      price: "$19.99",
    },
    {
      id: 4,
      image: "/backpack.png",
      title: "Example Product Title",
      price: "$19.99",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-10 gap-6 px-4">
        {collections.map((item) => (
          <div
            key={item.id}
            className="group bg-center bg-no-repeat bg-cover flex justify-center items-end h-72 sm:h-80 w-full transition duration-500"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <button className="bg-white text-black w-4/5 py-3 mb-6 text-lg font-semibold cursor-pointer transition-all duration-500 ease-in-out group-hover:bg-[#ae3f4f] group-hover:text-white">
              {item.text}
            </button>
          </div>
        ))}
      </div>

      <div className="w-full bg-gray-200 mt-16 py-16 px-4">
        <div className="max-w-6xl mx-auto flex justify-start">
          <div className="bg-white p-8 md:p-10 max-w-xl">
            <p className="tracking-widest text-sm">STYLE REDEFINED</p>

            <h2 className="text-2xl md:text-4xl pt-4 font-semibold">
              Your Passport To Fashion <span>Elegance</span>
            </h2>

            <p className="pt-4 text-sm md:text-base">
              Indulge in the art of fashion with Gluck. Discover a world of
              sophistication and timeless elegance.
            </p>

            <button className="bg-[#ae3f4f] text-white hover:bg-black cursor-pointer px-6 py-3 mt-6 tracking-wider text-sm">
              DISCOVER NOW
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 mb-20 px-4">
        <p className="text-center text-md tracking-widest text-gray-400">
          BEST WOMEN
        </p>

        <h2 className="text-center font-semibold text-3xl md:text-4xl mt-2">
          Lookbook Style
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-10">
          {womenCollections.map((item) => (
            <div key={item.id} className="text-center">
              <div
                className="bg-center bg-no-repeat bg-cover h-60 w-full"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <p className="text-lg mt-4 cursor-pointer hover:text-[#ae3f4f]">
                {item.title}
              </p>

              <p className="text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
