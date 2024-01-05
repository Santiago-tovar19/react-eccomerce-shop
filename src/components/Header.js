import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-10 " />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px]"
        >
          <BsBag className="text-2xl" />
          <div className="absolute -right-2 -bottom-2 text-xs w-[18px] text-white rounded-full flex justify-center items-center bg-red-400">
            {itemAmount}{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
