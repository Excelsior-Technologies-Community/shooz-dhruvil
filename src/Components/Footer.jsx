import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FooterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center border-b border-[#d5d5cc] md:border-none">
      <button
        className="w-full flex justify-between items-center px-6 py-4 md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="tracking-wider font-semibold">{title}</h4>
        <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>

      <h4 className="tracking-wider font-semibold hidden md:block">{title}</h4>

      <div
        className={`flex flex-col items-center pb-4 md:pb-0 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-5 bg-[#EAEAE2] pt-0 md:pt-10">
        <FooterSection title="INFORMATION">
          <NavLink
            className="pt-5 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/aboutus"
          >
            About US
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Return Policy
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Shipping Policy
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Terms & Condition
          </NavLink>
        </FooterSection>

        <FooterSection title="QUICK LINKS">
          <NavLink
            className="pt-5 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/aboutus"
          >
            My Account
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            My Cart
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Size Chart
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Wishlist
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Gift Cart
          </NavLink>
        </FooterSection>

        <div className="flex flex-col justify-center items-center py-6 md:py-0 border-b border-[#d5d5cc] md:border-none">
          <img src="/logo.webp" alt="" className="w-30 h-8" />
          <p className="pt-4">T: +(08) 9055 0269</p>
          <p className="pt-1">E: example@example.com</p>
          <p className="pt-1">50 Porana Place, West Casuarinas</p>
          <p className="pt-1">Western Australia, Australia.</p>
        </div>

        <FooterSection title="CATEGORIES">
          <NavLink
            className="pt-5 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/aboutus"
          >
            Altheletic Footware
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Boot For Every Occasion
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Luxury Leather Shoes
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Sandles & Slides
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Sneakerhead's Haven
          </NavLink>
        </FooterSection>

        <FooterSection title="SUPPORT">
          <NavLink
            className="pt-5 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/aboutus"
          >
            Contact US
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Newsletter
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Gift Card
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            Sign In
          </NavLink>
          <NavLink
            className="pt-2 hover:text-[#ae3f4f] hover:underline underline-offset-8 text-sm"
            to="/"
          >
            My Account
          </NavLink>
        </FooterSection>
      </div>
      <div className="w-full h-30 bg-[#EAEAE2] flex flex-col md:flex-row justify-between items-center pl-18 pr-18">
        <p className="text-[15px]">
          Copyright &copy; 2026 <span className="text-[#ae3f4f]">Shooz</span>.
          All rights reserved
        </p>
        <div className="flex">
          <img src="/download (6).svg" alt="" />
          <img src="/download (1).svg" alt="" />
          <img src="/download (2).svg" alt="" />
          <img src="/download (3).svg" alt="" />
          <img src="/download (4).svg" alt="" />
          <img src="/download (5).svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
