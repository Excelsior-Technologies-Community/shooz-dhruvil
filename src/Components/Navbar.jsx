import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useWishList } from "../context/WishlistContext";
import { useCartList } from "../context/CartContext";


const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const { wishlist } = useWishList();
  const { cartlist } = useCartList();
  const navigate = useNavigate();

  return (
    <div className="w-full h-30 flex flex-col items-center justify-center">
      <div className="flex justify-between items-center w-full h-10 pt-3 pb-3 bg-gray-100">
        <div className="flex justify-between items-center w-full px-10">
          <h2 className="text-[15px] md:text-md font-extralight">
            One Day Delivery Available
          </h2>
          {openItem && (
            <div className="absolute top-10 right-0 z-50 bg-white text-black flex flex-col gap-3 p-4 shadow-lg w-48">
              <button className="self-end">
                <RxCross2 onClick={() => setOpenItem(!openItem)} />
              </button>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-[#ae3f4f] tracking-widest" : "tracking-widest hover:text-[#ae3f4f]"} onClick={() => setOpenItem(false)}>Home</NavLink>
              <NavLink to="/shop" className={({ isActive }) => isActive ? "text-[#ae3f4f] tracking-widest" : "tracking-widest hover:text-[#ae3f4f]"} onClick={() => setOpenItem(false)}>Shop</NavLink>
              <NavLink to="/product" className={({ isActive }) => isActive ? "text-[#ae3f4f] tracking-widest" : "tracking-widest hover:text-[#ae3f4f]"} onClick={() => setOpenItem(false)}>Product</NavLink>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#ae3f4f] tracking-widest" : "tracking-widest hover:text-[#ae3f4f]"} onClick={() => setOpenItem(false)}>Blog</NavLink>
              <NavLink to="/pages" className={({ isActive }) => isActive ? "text-[#ae3f4f] tracking-widest" : "tracking-widest hover:text-[#ae3f4f]"} onClick={() => setOpenItem(false)}>Pages</NavLink>
              <NavLink to="/buy-now" className={({ isActive }) => isActive ? "text-[#ae3f4f] tracking-widest" : "tracking-widest hover:text-[#ae3f4f]"} onClick={() => setOpenItem(false)}>Buy Now</NavLink>
              <hr className="border-gray-200" />
              <button className="hover:text-[#ae3f4f] text-md font-extralight text-left">Login</button>
              <button className="hover:text-[#ae3f4f] text-md font-extralight text-left">Register</button>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/"><FaFacebookF className="hover:text-[#ae3f4f]" /></a>
                <a href="https://x.com"><FaTwitter className="hover:text-[#ae3f4f]" /></a>
                <a href="https://www.instagram.com/"><FaInstagram className="hover:text-[#ae3f4f]" /></a>
              </div>
            </div>
          )}
          <button className="md:hidden">
            <RxHamburgerMenu onClick={() => setOpenItem(!openItem)} />
          </button>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-4 px-10">
          <button className="hover:text-[#ae3f4f] text-md font-extralight">
            Login
          </button>
          <button className="hover:text-[#ae3f4f] text-md font-extralight">
            Register
          </button>
          <a href="https://www.facebook.com/">
            {" "}
            <FaFacebookF className="hover:text-[#ae3f4f]" />
          </a>
          <a href="https://x.com">
            <FaTwitter className="hover:text-[#ae3f4f]" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="hover:text-[#ae3f4f]" />
          </a>
        </div>
      </div>
      <div className="flex items-center w-full h-20 px-10">
        <div className="w-28 shrink-0">
          <img src="/logo.webp" alt="" className="w-24 h-6 md:w-30 md:h-6" />
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center lg:gap-6 gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#ae3f4f] tracking-widest underline-offset-8"
                : "tracking-widest"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#ae3f4f] tracking-widest underline-offset-8"
                : "tracking-widest"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#ae3f4f] tracking-widest underline-offset-8"
                : "tracking-widest"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#ae3f4f] tracking-widest underline-offset-8"
                : "tracking-widest"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#ae3f4f] tracking-widest underline-offset-8"
                : "tracking-widest"
            }
          >
            Pages
          </NavLink>
          <NavLink
            to="/buy-now"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#ae3f4f] tracking-widest underline-offset-8"
                : "tracking-widest"
            }
          >
            Buy Now
          </NavLink>
        </div>
        {search && (
          <div className="fixed top-0 left-0 w-full h-30 bg-white z-50 flex flex-col justify-center items-center shadow-lg">
            <div className="w-[60%]">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-500 text-sm tracking-widest">
                  WHAT ARE YOU LOOKING FOR?
                </label>

                <button className="text-2xl" onClick={() => setSearch(false)}>
                  ✕
                </button>
              </div>

              <div className="flex items-center border-b">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="w-full py-2 outline-none text-xl"
                />

                <CiSearch className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center gap-5 ml-auto">
          <CiSearch
            className="w-6 h-5 cursor-pointer"
            onClick={() => setSearch(!search)}
          />
          {selectedItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="bg-gray-100 flex flex-col md:flex-row items-center relative justify-center shadow-2xl w-full max-w-xl gap-6 p-6 md:p-10 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-black text-2xl font-bold"
                >
                  &times;
                </button>

                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-semibold">Login</h2>
                  <p className="text-md font-normal mt-2">
                    Please enter your email and password
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className="w-68 h-10 bg-gray-100 mt-4 p-2 outline-none border-2 border-gray-300"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                    className="w-68 h-10 bg-gray-100 mt-4 p-2 outline-none border-2 border-gray-300"
                  />
                  <p className="pl-40 mt-3 cursor-pointer text-gray-500 underline text-sm">
                    forgot password
                  </p>
                  <button className="w-68 h-10 bg-[#ae3f4f] hover:bg-black text-white cursor-pointer mt-4 p-2 outline-none border-0">
                    Login
                  </button>
                  <p className="mt-3">
                    New Customer?{"  "}
                    <span className="text-gray-500">
                      <NavLink>Register</NavLink>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          <FaUser
            className="w-6 h-5 cursor-pointer"
            onClick={() => setSelectedItem(true)}
          />
          <button
            className="relative cursor-pointer"
            onClick={() => navigate("/wishlist")}
          >
            <CiHeart className="w-6 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ae3f4f] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <PiHandbagBold className="w-6 h-5" />
            {cartlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ae3f4f] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartlist.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
