import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[880px]  bg bg-teal-200/70 bg-no-repeat bg-cover bg-center py-24">
      <div class="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center ">
          <div className="font-semibold flex items-center uppercase">
            <div class="w-10 h-[2px] mr-3 bg-teal-400"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light ">
            AUTUMN SALE STYLISH <br />{" "}
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
