import React, { useContext } from "react";

import { ProductContext, ProductProvider } from "../contexts/ProductContext";

import { SideBarContext } from "../contexts/SidebarContext";

import { IoMdArrowForward, IoMdTrash } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, increaseAmount, total, itemAmount } =
    useContext(CartContext);

  console.log(isOpen);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vh] lg:w-[70vh] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount}){" "}
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 fñex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[400px] xl:h-[65%] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div className="flex  gap-y-3 py-4 mt-4">
          {/* total  */}
          <div className="flex w-full justify-between items-center text-right uppercase font-semibold">
            <span>Total: $ {parseFloat(total).toFixed(2)} </span>
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            {/* <FiTrash2 /> */}
            <IoMdTrash />
          </div>
        </div>
        <div className="flex ">
          <Link
            to={"/"}
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
          >
            View Cart
          </Link>
          <Link
            to={"/"}
            className="bg-primary flex p-4 justify-center items-center text-gray-200 w-full font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
