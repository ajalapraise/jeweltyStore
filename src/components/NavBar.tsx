import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/Verosa_Logo.png";
import facebook from "@/components/Icons/facebook.png";
import instagram from "@/components/Icons/instagram.png";
import twitter from "@/components/Icons/twitter.png";
import Menu from "./Icons/Menu";

const NavBar = () => {
  return (
    <div className="min-w-[390px] max-w-[1440px] mx-auto bg-black h-[59px] md:h-[114px] flex justify-between items-center  py-2 px-4 md:py-0  text-white overflow-hidden md:px-2">
      <div className="border-b-[0.5px] border-[#D5C0C5] md:border-none w-[358px] mx-auto md:w-[1376px] flex md:justify-center justify-between items-center py-[13px] md:gap-[170px]">
        <div className="md:hidden">
          <Menu />
        </div>
        <div className="hidden md:flex w-[437px] h-[52px] justify-between items-center">
          <Link
            href="/"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-xl w-[89px]"
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-xl w-[121px]"
          >
            About Us
          </Link>
          <Link
            href="/Collections"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-xl w-[145px]"
          >
            Collections
          </Link>
          <Link
            href="#"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-xl w-[82px]"
          >
            Blogs
          </Link>
        </div>
        <Link
          href="/"
          className=" w-[77.59px] h-[27px] md:w-[235.63px] md:h-[82px]"
        >
          <Image
            src={logo}
            alt=""
            className="object-center object-contain w-full h-full"
          />
        </Link>
        <div className="hidden md:flex justify-evenly gap-[19px] items-center w-[302px] h-[52px]">
          <h1 className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-xl">
            Contact Us
          </h1>
          <div className="flex w-[142px]  h-10 gap-[11px] justify-between items-center">
            <Link
              href="#"
              className="w-10 h-10 p-[2px] rounded-[29px] border flex justify-center items-center border-[#D5C0C5]"
            >
              <Image
                src={facebook}
                alt=""
                className="object-center object-contain w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 p-[2px] rounded-[29px] border flex justify-center items-center border-[#D5C0C5]"
            >
              <Image
                src={twitter}
                alt=""
                className="object-center object-contain w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 p-[2px] rounded-[29px] border flex justify-center items-center border-[#D5C0C5]"
            >
              <Image
                src={instagram}
                alt=""
                className="object-center object-contain w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
